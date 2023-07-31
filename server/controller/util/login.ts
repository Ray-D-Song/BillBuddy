import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import * as dotenv from 'dotenv'
import CryptoJS from 'crypto-js'

dotenv.config({ path: './../../.env' })

const prisma = new PrismaClient()

const login = Router().post('/login/user', async (req, res) => {
  const { username, password } = req.body

  try {
    const val = await prisma.user.findFirst({
      where: {
        username: username
      }
    })
    const bytes = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY as string);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if(val?.password === decryptedData) {
      res.json({code: 200})
    }
  } catch (e) {
    res.json({code: 403})
  }
})

export default [login]
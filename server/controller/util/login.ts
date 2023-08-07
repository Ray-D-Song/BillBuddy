import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import * as dotenv from 'dotenv'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

dotenv.config({ path: './../../.env' })

const prisma = new PrismaClient()

const login = Router().post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const val = await prisma.user.findFirst({
      where: {
        username: username
      }
    })
    const bytes = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY as string)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    if(val?.password === decryptedData) {
      jwt.sign(
        {username},
        process.env.SECRET_KEY as string,
        {expiresIn: '300000s'},
        (err, token) => {
          if(err)
            res.json({code: 403})
          else
            res.json({
              code: 200,
              token: token,
            })
        }
      )
    }
    else res.json({code: 403})
  } catch (e) {
    console.log(e)
    res.json({code: 403})
  }
})

export default [login]
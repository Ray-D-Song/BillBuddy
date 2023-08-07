import { Router } from 'express'
import jwt from 'jsonwebtoken'

const verification = Router().post('/verification', async (req, res) => {
  try {
    const token = req.body
    if(token)
      jwt.verify(token, process.env.SECRET_KEY as string, (err: any, payload: any) => {
        console.log(payload)
        if(err)
          res.json({
            code: 200,
            ifValid: false
          })
        else res.json({
          code: 200,
          ifValid: true
        })
      }) 
  } catch(e) {
    res.json({
      code: 403,
      ifValid: false
    })
    console.log(e)
  }
})

export default [
  verification
]
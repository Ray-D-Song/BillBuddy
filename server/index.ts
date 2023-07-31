import express from 'express'
import allRouter from './controller/index'

const app = express()

app.use(express.json())

app.listen(8080, () => {
  console.log('server start')
})

app.use('/api/v1', ...allRouter)
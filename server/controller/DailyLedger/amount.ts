import { Router } from 'express'
import { getAmountAndLimit, addAmount } from '../../service/DailyLedger/amount'

function formatDate(date: any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要加 1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


const amountAndLimit = Router().get('/amount-limit', async (req, res) => {
  try {
    const value = await getAmountAndLimit(formatDate(new Date()))
    if(value) {
      res.json({
        code: 200,
        data: value
      })
    } else {
      res.json({
        code: 403
      })
    }
  } catch (e) {
    res.json({
      code: 403
    })
    console.log(e)
  }
})

const addAmountController = Router().post('/amount', async (req, res) => {
  try {
    const value = await addAmount(req.body.amountNum)
    if(value)
      res.json({
        code: 200
      })
    else res.json({
      code: 404
    })
  } catch(e) {
      res.json({
        code: 404
      })
  }
})

export default [
  amountAndLimit,
  addAmountController
]
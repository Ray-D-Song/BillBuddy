import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAmountAndLimit = async (NowDate: string) => {
  try {
    const limit = await prisma.user.findFirst({
      select: {
        dailySpendingLimit: true
      }
    })
    const nowDate = new Date(NowDate)
    const purchases = await prisma.dailyLedger.findMany({
      where: {
        createdAt: {
          gte: nowDate,
          lt: new Date(nowDate.getTime()+24 * 60 * 60 * 1000)
        }
      },
      select: {
        purchaseAmount: true
      }
    })
    if(limit&&purchases) {
      let purchase = 0
      purchases.forEach(p => {purchase += p.purchaseAmount})
      return {
        quota: limit.dailySpendingLimit,
        usedAmount: purchase
      }
    }
  } catch (e) {
    console.log(e)
  }
}

const addAmount = async (amountNum: number) => {
  try {
    const val = await prisma.dailyLedger.create({
      data: {
        purchaseAmount: amountNum
      }
    })
    if(val)
      return val
  } catch(e) {
    console.log(e)
  }
}

export {
  getAmountAndLimit,
  addAmount
}
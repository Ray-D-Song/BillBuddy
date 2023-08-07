import useFetch from '../request'

const amountAndLimit = async () => {
  try {
    const value = await useFetch({
      url: '/amount-limit',
      method: 'GET'
    })
    if(value)
      return value.data
  } catch(e) {
    console.log(e)
  }
}

const addAmount = async (amountNum: number) => {
  try {
    const value = await useFetch({
      url: '/amount',
      method: 'POST',
      body: {
        amountNum
      }
    })
    if(value)
      return value
  } catch(e) {
    console.log(e)
  }
}

export {
  amountAndLimit,
  addAmount
}
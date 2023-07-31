import useFetch from '../request'
import CryptoJS from 'crypto-js'

interface Param {
  username: string,
  password: string
}

export default async function(param: Param) {
  try {
    let { username, password } = param
    username = String(CryptoJS.AES.encrypt(username, import.meta.env.SECRET_KEY))
    password = String(CryptoJS.AES.encrypt(password, import.meta.env.SECRET_KEY))
    const value = await useFetch({
      url: '/api/v1/login',
      method: 'POST',
      body: {
        username: username,
        password: password
      }
    })
    if(value)
      return value
  } catch(e) {

  }
}
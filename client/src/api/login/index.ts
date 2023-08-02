import useFetch from '../request'
import CryptoJS from 'crypto-js'

interface Param {
  username: string,
  password: string
}

const login = async (param: Param) => {
  try {
    let { username, password } = param
    password = String(CryptoJS.AES.encrypt(password, import.meta.env.VITE_SECRET_KEY))
    const value = await useFetch({
      url: '/login',
      method: 'POST',
      body: {
        username: username,
        password: password
      },
      login: true
    })
    if(value)
      return value
  } catch(e) {
    console.log(e)
  }
}

export default login
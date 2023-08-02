import { useRouter } from 'vue-router'

type fetchConfg = {
  url: string
  method: 'POST'|'GET'|'PUT'|'DELETE'
  body?: any
  login?: boolean
}

const router = useRouter()

const prefix = '/api/v1'
let headers = new Headers()
headers.append("Content-Type", "application/json");
headers.append("Accept", "*/*");

const useFetch = async (conf: fetchConfg) => {
  try {
    let ifValid = true
    if(conf.login === false) {
      const val = await fetch(prefix + '/verification', {
        method: 'POST',
        body: window.localStorage.getItem('token'),
        headers: headers
      })
      val.json().then(v => {
        if(v.code!==200 || v.ifValid !== true)
          ifValid = false
      })
    }
    if(ifValid) {
      const res = await fetch(prefix + conf.url, {
        method: conf.method,
        body: JSON.stringify(conf.body),
        headers: headers
      })
      if(!res.ok)
        throw new Error()
      else
        return res.json()
    } else {
      window.localStorage.removeItem('token')
      router.push({
        name: 'login'
      })
    }
  } catch (e) {
    console.log(e)
  }
}

export default useFetch
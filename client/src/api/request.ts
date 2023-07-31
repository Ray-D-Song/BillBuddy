type fetchConfg = {
  url: string
  method: 'POST'|'GET'|'PUT'|'DELETE'
  body?: any
}

const useFetch = async (conf: fetchConfg) => {
  try {
    const res = await fetch(conf.url, {
      method: conf.method,
      body: conf.body
    })
    if(!res.ok)
      throw new Error()
    else
      return res.json()
  } catch (e) {
  }
}

export default useFetch
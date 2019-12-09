// import axios from 'axios'
const axios = require('axios')
axios.defaults.headers.post['Content-type'] = 'application/json'
const axiosGet = (url, data) => {
  return axios
    .get(url, { params: data })
    .then(res => {
      const { data } = res
      if (data.code === 200) {
        return data
      } else {
        console.log(data.msg)
        return undefined
      }
    })
    .catch(err => {
      console.error(err)
      alert('此接口不可用')
      window.location.href = '/'
      throw new Error(err)
    })
}

// const axiosPost = (url, data = {}) => {
//   axios
//     .post(url, data)
//     .then(res => {
//       console.log(res)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

module.exports = {
  axiosGet
}

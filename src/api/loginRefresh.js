import { axiosGet } from '@assets/js/query'
const refreshLoginStatus = async () => {
  const res = await axiosGet('/api/login/refresh')
  return res
}

export default refreshLoginStatus

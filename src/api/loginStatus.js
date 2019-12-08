import { axiosGet } from '@assets/js/query'

// 获取登录状态
const getLoginStatus = async () => {
  const res = await axiosGet('/api/login/status')
  return res
}

export default getLoginStatus

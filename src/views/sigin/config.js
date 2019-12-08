module.exports = {
  PASSORD_WARN: '密码不少于六位',
  PASSORD_ERR: '账号或密码错误',
  LOGIN_WARN: '请先勾选同意《服务条款》《隐私政策》 《儿童隐私政策》',
  PASSORD_SUC: '密码设置成功',
  REGISTER_FILURE: '注册用户失败',
  DETAULT_NAME: '云村新人',
  USERNUMBER_WARN: {
    LENGTH: '应输入11位的数字',
    NUMBER: '电话号码格式错误'
  },
  ROUTER: {
    login: '/api/login/cellphone',
    emailLogin: '/api/login',
    isSigin: '/api/cellphone/existence/check',
    ctcode: '/api/captcha/sent',
    captcha: '/api/captcha/verify',
    register: '/api/register/cellphone',
    activateInit: '/api/activate/init/profile'
  }
}

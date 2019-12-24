// 函数节流
export const debounce = (func, delay = 200) => {
  let timer = null

  return function(...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 计算观看人数
export const playcount = (num1, num2) => {
  const number = num1 ? num1.toString() : num2.toString()
  if (number.length >= 9) {
    return number.replace(/\d{8}$/g, '亿')
  } else if (number.length >= 5) return number.replace(/\d{4}$/g, '万')
  else return number
}

// 计算mV时间

export const duration = time => {
  let second = 0
  if (/0{3}$/g.test(time) || time.toString().length >= 5) {
    second = parseInt(time.toString().replace(/\d{3}$/g, ''))
  } else second = time
  let hour = 0
  let min = 0
  if (second > 60) {
    min = parseInt(second / 60)
    second = parseInt(second % 60)

    if (min > 60) {
      hour = parseInt(min / 60)
      min = parseInt(min % 60)
    }
  }

  if (hour > 0) return `${hour}:${min}:${second}`
  else return `${min}:${second}`
}

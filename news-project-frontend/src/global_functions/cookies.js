import Cookies from 'js-cookie'

const getCookie = (name) => {
  return Cookies.get(name)
}

const setCookie = (name, value, days) => {
  Cookies.set(name, value, { expires: days, secure: true, sameSite: 'strict' })
}

const removeCookie = (name) => {
  Cookies.remove(name)
}

export { getCookie, setCookie, removeCookie }

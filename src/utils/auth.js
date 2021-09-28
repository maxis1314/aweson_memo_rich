import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  //return Cookies.get(TokenKey)
  return localStorage.getItem('TOKEN')
}

export function setToken(token) {
  //return Cookies.set(TokenKey, token, { expires: 180 })
  localStorage.setItem('TOKEN', token)
  return true
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getApiUrl(){
    if(window.location.href.indexOf("localhost") > 0){
        return "http://localhost:8080";
    }else{
        return "https://104.168.174.212";
    }
}

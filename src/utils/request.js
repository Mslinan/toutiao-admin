// 封装axios的请求

import axios from 'axios'

const request = axios.create({
  // 基础地址
  baseURL: 'http://ttapi.research.itcast.cn'
})

export default request

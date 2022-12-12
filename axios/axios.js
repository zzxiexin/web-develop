const axios = require('axios');
// 处理一个应用多个url接口地址（请求前、请求拦截器中适合做这件事）
const baseUrlMap = {
    tb: 'http://suggest.taobao.com',
    jd: 'http://jd.com',
    sojson: 'http://t.weather.sojson.com'
}

// 处理多个接口多个请求拦截的情况(可以添加参数配置也可以根据请求的方式配置)
axios.interceptors.request.use(config => {
    if (config?.headerType){
        config = {
            ...config,
            headers: {
                Accept: config?.headerType
            }
        }
        return config
    }
    return config
})
const get = ({baseUrlKey = 'tb', headerType, url}) => {
    return new Promise((resolve, reject) => {
        axios
        .get(`${baseUrlMap[baseUrlKey]}${url}`, { headerType})
        .then((result) => {
          resolve(result.data);
        }).catch(err => {
          reject(err);
        })
    });
  };

  module.exports = {
    get
  }
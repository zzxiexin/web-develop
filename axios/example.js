const { get } = require('./axios');
const handleData = (data) => {
    return data
}
const getTbSugget = async () => {
        const tb = await get({url: '/sug?code=utf-8&q=手机&callback=handleData', headerType: 'test/json'})
        const tbData =  eval(tb)
        // console.log(tbData)
}

const getWeather= async () => {
    const weather = await get({url: '/api/weather/city/101030100', headerType: 'test/json', baseUrlKey: 'sojson'})
    console.log(weather?.data)
}

getTbSugget()
getWeather()
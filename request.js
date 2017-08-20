// const http = require('http')
// http.get('http://api.douban.com/v2/movie/top250?count=5', resp => {
//     let data = ''
//     resp.on('data', chunk => {
//         data += chunk;
//     })
//     resp.on('end', () => {
//         console.log(JSON.parse(data))
//     })
// }).on('error', err => {
//     console.log('Error: ' + err.message)
// })

// const request = require('request')
// request('http://api.douban.com/v2/movie/top250?count=5', {
//     json: true
// }, (err, res, body) => {
//     if (err)
//         return console.log(err)
//     console.log(body.subjects[0])
// })

const axios = require('axios')
axios.get('http://api.douban.com/v2/movie/top250?count=5').then(response => {
    console.log(response.data)
}).catch(error => {
    console.log(error)
})
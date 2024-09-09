const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Test response aafrom the web app')
})

app.get('/test', (req, res) => {
    const teststr = 'this is under /test route'
    res.send(teststr)
})

app.get('/num', (req, res) => {
    const nuim = Math.floor((Math.random() * 100) + 1)
    res.send("a random nu mber from the server is " + num)
})

app.listen(8080, () => {
    console.log('app listening on port 8080')
})


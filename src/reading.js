const http = require('http')
const fs = require('fs')
const { log } = require('console')
const port = 8080

const server = http.createServer((req, res) => {
    fs.readFile('sample.html', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(port, () => {
    console.log('server is listening aon port ' + port);
})
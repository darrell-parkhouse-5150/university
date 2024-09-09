const http = require('http')
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello')
    res.end('you are getting this text from the server')
}).listen(port, () => {
    console.log('server listening at port ' + port)
    
})
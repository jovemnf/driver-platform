const http = require('http')

http.createServer((req, res) => {
  res.end('FEATURE STORE OK')
}).listen(3002)

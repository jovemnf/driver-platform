const http = require('http')

http.createServer((req, res) => {
  res.end('AI OK')
}).listen(3001)

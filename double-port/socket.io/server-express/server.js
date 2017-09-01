'use strict'

var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3030

// Allow http://localhost:3000 to access this api via websocket.
// https://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function (req, res) {
  const data = {message: 'Hello World!'}
  return res.status(200).json(data)
})

server.listen(port, function () {
  console.log('listening on port 3030!')
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })

  socket.on('message', (msg) => {
    console.log('client message received: ' + msg)
  })
})

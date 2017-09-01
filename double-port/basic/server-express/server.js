'use strict'

const app = require('express')()
const isProd = (process.env.NODE_ENV === 'production')

// Use port 3000 unless there exists a preconfigured port. In many environments
// (e.g. Heroku), and as a convention, you can set the environment variable PORT
// to tell your web server what port to listen on.

// So process.env.PORT || 3000 means: whatever is in the environment variable
// PORT, or 3000 if there's nothing there.
// https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
const port = process.env.PORT || 3030

app.get('/', function (req, res) {
  const data = {message: 'Hello World!'}
  return res.status(200).json(data)
})

app.listen(port, function () {
  console.log('listening on port 3030!')
})

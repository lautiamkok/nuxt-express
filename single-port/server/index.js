'use strict'

import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import config from './config'
import middlewares from './middlewares'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Middlewares are imported here.
middlewares(app)

// Import and Set Nuxt.js options
let configNuxt = require('../nuxt.config.js')
configNuxt.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(configNuxt)

// Build only in dev mode
if (configNuxt.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

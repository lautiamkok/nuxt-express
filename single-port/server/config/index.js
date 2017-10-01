'use strict'

const dbname = process.env.NODE_ENV === 'test' ? 'koatest' : 'koa'

export default {
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: 'localhost',
    port: 27017,
    dbname: dbname,
    username: 'admin',
    password: '123456',
    options: {
    }
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'something'
  }
}

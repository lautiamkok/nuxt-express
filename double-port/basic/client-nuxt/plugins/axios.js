import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  // process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
  // https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3030}`

  console.log(options.baseURL) // http://localhost:3030
}

export default axios.create(options)

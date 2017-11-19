import * as axios from 'axios'

let options = {}

// The server-side needs a full url to works
options.baseURL = process.env.HOST_URL

export default axios.create(options)

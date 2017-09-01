import io from 'socket.io-client'
const socket = io(process.env.HOST_URL)

// console.log(process.env.HOST_URL)
export default socket

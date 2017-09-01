<template>
  <div>
    <h1>{{ message }}</h1>
    <p>
      <input type="button" value="Poke the server" id="poke" v-on:click="greet" />
    </p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import socket from '~/plugins/socket.io'
// Or:
// import io from 'socket.io-client'
// var socket = io.connect('http://127.0.1.1:3030')

socket.on('news', function (data) {
  console.log('server message received: ' + data)
  socket.emit('my other event', { my: 'data' })
})

export default {
  async asyncData () {
    let data = await axios.get('/')
    console.log(data.data)

    return data.data
  },
  head () {
    return {
      title: 'Users'
    }
  },
  methods: {
    greet (event) {
      socket.emit('message', 'Hi server, how are you?')

      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

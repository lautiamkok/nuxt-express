<template>
    <h1>{{ message }}</h1>
</template>

<script>
import axios from '~/plugins/axios'

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
  }
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is Nuxt + Express.</p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let {data} = await axios.get('/api')
    return data.data
  },
  head () {
    return {
      title: 'Nuxt + Express'
    }
  }
}
</script>

<style>
h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}
</style>

# Nuxt Basic

1. Install Nuxt globally:

$ npm install -g vue-cli

2. The package.json

The project needs a package.json file to specify how to start nuxt:

``` bash
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt"
  }
}
```

3. Installing nuxt

Once the package.json has been created, add nuxt to the project via npm:

$ npm install --save nuxt

4. The pages directory

Nuxt.js will transform every *.vue file inside the pages directory as a route for the application.

create the first page in pages/index.vue:

``` bash
<template>
  <h1>Hello world!</h1>
</template>
```

5. Launch the project with:

$ npm run dev

6. The application is now running on http://localhost:3000

# Notes

1. Nuxt.js will listen for file changes inside the pages directory, so there is no need to restart the application when adding new pages.

# References

* http://codingthesmartway.com/introduction-to-server-rendered-vue-js-apps-with-nuxt/
* https://www.sitepoint.com/nuxt-js-universal-vue-js/
* https://github.com/nuxt-community/express-template
* https://github.com/nuxt-community/koa-template
* https://github.com/nuxt/nuxt.js/issues/246
* https://github.com/mluberry/nuxt-express
* https://github.com/nuxt/nuxt.js
* https://www.slideshare.net/SbastienChopin/nuxtjs-introduction
* https://www.slideshare.net/DavidLien1/nuxtjs-introdruction?qid=87edcd63-50c1-4be3-b13e-289cbb518610&v=&b=&from_search=4
* https://github.com/yyss8/scBlog
* https://cnodejs.org/topic/589d1f428c475cf5794dacf3
* https://blog.256pages.com/nuxt-js-socket-io-https/

* https://github.com/nuxt/nuxt.js/tree/master/examples/with-sockets
* https://www.npmjs.com/package/socket.io-client

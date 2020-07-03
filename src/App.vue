<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    // name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .clearfix {
    zoom: 1
  }
</style>

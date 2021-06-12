<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F7F7F7;
}

.btn-red {
    background-color: #C0182F !important;
    color: white !important;
    margin: 1rem;
  }

  .img-size {
    width: 200px;
    height: 200px;
  }

  .img-size2 {
    width: 100px;
    height: 100px;
  }

  .title1 {
    font-weight: 700  !important;
    color: #707070;
    font-family: Roboto;
  }
</style>

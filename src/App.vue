<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

body {
  background-color: #f7f7f7;
}

.btn-red {
  background-color: #c0182f !important;
  color: white !important;
  margin: 1rem;
  border-color: #c0182f !important;
  }

.btn-secondary {
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
  font-weight: 700 !important;
  color: #707070;
  font-family: Roboto;
}

.title2 {
  font-weight: 700 !important;
  color: #c0182f;
  font-family: Roboto;
  text-transform: uppercase;
}
</style>

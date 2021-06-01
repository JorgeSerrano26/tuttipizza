<template>

  <section class="home">
    <img src="../assets/logo.png" class="img-fluid" alt="TuttiPizza logo">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="form-group">
          <button type="button" class="btn btn-secondary btn-block">REALIZAR UN PEDIDO</button>
        </div>
        <div class="form-group">
          Número de pedido
          <input placeholder="n° de pedido">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-secondary btn-block">VER ESTADO DEL PEDIDO</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'home',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .home {

  }
</style>

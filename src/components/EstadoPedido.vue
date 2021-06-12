<template>

  <section class="src-components-estado-pedido">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Realizar pedido</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>

    
        <h2>Tu pedido se encuentra</h2>
        <br>
        <h2 style="color: #C0182F">En preparación</h2>
        <br>
      <div class="form-group">
        <router-link to="/home">
        <a type="button" class="btn btn-red btn-block">VOLVER AL MENÚ PRINCIPAL</a>
        </router-link>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-estado-pedido',
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
  .src-components-estado-pedido {

  }
</style>

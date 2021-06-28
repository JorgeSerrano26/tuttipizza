<template>

  <section class="src-components-confirmacion-pedido">
    <div class="jumbotron">
     <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Confirmación</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
      <br> 
      <br>
      <h2>Tu pedido fue confirmado</h2>
      <h2>{{this.$store.state.orderResponse}}</h2>
      <br>
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
    name: 'src-components-confirmacion-pedido',
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
  .src-components-confirmacion-pedido {

  }
</style>

<template>

  <section class="src-components-home-admin">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="../assets/logo tutti pizza.png" class="img-fluid img-size" alt="TuttiPizza logo">
        <br>
        <br>
        <h4>ADMINISTRADOR</h4>
        <br>
        <router-link to="/estadoPedidos">
          <a type="button" class="btn btn-red btn-block">VER PEDIDOS</a>
        </router-link>
        <br>       
        <router-link to="/editarPizzas">
          <a type="button" class="btn btn-red btn-block">EDITAR PIZZAS</a>
        </router-link>
        
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-home-admin',
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
  .src-components-home-admin {

  }
</style>

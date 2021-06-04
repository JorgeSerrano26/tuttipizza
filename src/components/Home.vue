<template>
  <section class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="../assets/logo tutti pizza.png" class="img-fluid img-size" alt="TuttiPizza logo">
        <br>
        <br>
        <br>
        <router-link to="/realizarPedido">
         <a type="button" class="btn btn-red btn-block">REALIZAR UN PEDIDO</a>
        </router-link>
        <div class="form-group">
          Número de pedido
          <br>
          <input type="text" name="pedido" id="pedido" autcomplete="off" v-model.trim="pedido" autocomplete="off" placeholder="Número de pedido">
        </div>
        <div class="form-group">
          <router-link to="/estadoPedido">
          <a type="button" class="btn btn-red btn-block" >VER ESTADO DEL PEDIDO</a>
          </router-link>
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
        pedido: ""
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

<template>
  <section class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="form-group">
          <router-link to="/realizarPedido">
          <a type="button" class="btn btn-secondary btn-block">REALIZAR UN PEDIDO</a>
          </router-link>
        </div>
        <div class="form-group">
          Número de pedido
          <input placeholder="n° de pedido">
        </div>
        <div class="form-group">
          <router-link to="/estadoPedido">
          <a type="button" class="btn btn-secondary btn-block">VER ESTADO DEL PEDIDO</a>
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

<template>

  <section class="src-components-home-admin">
    <div class="jumbotron jumbotron-fluid">
      <h4>ADMINISTRADOR</h4>
      <div class="container">
        <div class="form-group">
          <router-link to="/estadoPedidos">
          <a type="button" class="btn btn-secondary btn-block">VER PEDIDOS</a>
          </router-link>
        </div>
        <div class="form-group">
          <router-link to="/editarPizzas">
          <a type="button" class="btn btn-secondary btn-block">EDITAR PIZZAS</a>
          </router-link>
        </div>
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

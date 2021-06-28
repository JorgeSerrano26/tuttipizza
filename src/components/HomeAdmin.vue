<template>

  <section class="src-components-home-admin">
    <div class="jumbotron">
      <div class="container d-flex flex-column justify-content-center align-items-center" style="height: 100vh">
        <img src="../assets/logo tutti pizza.png" class="img-size mb-5 blackandwhite" alt="TuttiPizza logo" />
        <h4 style="color: #707070;">ADMINISTRADOR</h4>
        <div class="d-flex flex-column">
          <router-link to="/estadoPedidos">
            <a type="button" class="btn btn-secondary btn-block m-3">VER PEDIDOS</a>
          </router-link>
          <router-link to="/editarPizzas">
            <a type="button" class="btn btn-secondary btn-block">VER PIZZAS</a>
          </router-link>
          <router-link to="/editarIngredientes">
            <a type="button" class="btn btn-secondary btn-block">VER INGREDIENTS</a>
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

  .blackandwhite{
    -webkit-filter: grayscale(100%); /* Safari/Chrome */
    filter: grayscale(100%);
}
</style>

<template>

  <section class="src-components-detalle-pedido">
    <div class="jumbotron">
      <h2>Detalles del pedido</h2>
      <hr>
      <h3>Dirección de entrega</h3>
      <hr>
      <h3>Forma de pago</h3>
      <hr>
      <div class="form-group">
        <router-link to="/home">
          <a type="button" class="btn btn-secondary btn-block">VOLVER AL MENÚ PRINCIPAL</a>
        </router-link>
      </div>
      <div class="form-group">
          <router-link to="/confirmacionPedido">
          <a type="button" class="btn btn-secondary btn-block">CONFIRMAR PEDIDO</a>
          </router-link>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-detalle-pedido',
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
  .src-components-detalle-pedido {

  }
</style>

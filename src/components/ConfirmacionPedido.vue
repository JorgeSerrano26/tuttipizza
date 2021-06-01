<template>

  <section class="src-components-confirmacion-pedido">
    <h1>Tu orden ha sido confirmada</h1>
    <h2>N°123456</h2>
    <div class="form-group">
      <router-link to="/home">
      <a type="button" class="btn btn-secondary btn-block">VOLVER AL MENÚ PRINCIPAL</a>
      </router-link>
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

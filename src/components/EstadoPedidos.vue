<template>

  <section class="src-components-estado-pedidos">
    <div class="jumbotron">
      <h2>Historial de Pedidos</h2>
      <hr>
      <table v-if="pedidos.length" class="table table-white">
        <thead>
          <tr>
          <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(pedido, index) in pedidos" :key="index">
          <th v-for="(col, index) in getCols" :key="index">{{pedido[col]}}</th>
        </tr>
        </tbody>
      </table>
      <div class="form-group">
        <router-link to="/homeAdmin">
          <a type="button" class="btn btn-secondary btn-block">VOLVER AL MENÚ DE ADMINISTRADOR</a>
        </router-link>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-estado-pedidos',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60aa8aef66f1d00017772f51.mockapi.io/pedidos/',
        pedidos: []
      }
    },

    methods: {
      getPedidosAxios() {
        this.axios(this.url)
        .then(respuesta => {
          console.log(respuesta.data)
          this.pedidos = respuesta.data
        })
        .catch(error => console.error(error))
      }
    },

    computed: {
      getCols() {
        return Object.keys(this.pedidos[0])
      }
    },

    beforeMount() {
      this.getPedidosAxios()
    }
}


</script>

<style scoped lang="css">
  .src-components-estado-pedidos {

  }
</style>

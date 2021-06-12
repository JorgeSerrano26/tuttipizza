<template>

  <section class="src-components-estado-pedidos">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Pedidos</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
      <table v-if="pedidos.length" class="table table-stripped">
        <thead>
          <tr>
          <th v-for="(col,index) in getCols" :key="index" style="background-color: #c0182f; color: white">{{col}}</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(pedido, index) in pedidos" :key="index">
          <td v-for="(col, index) in getCols" :key="index" style="color: #424242;">{{pedido[col]}}</td>
        </tr>
        </tbody>
      </table>
      <div class="form-group">
        <router-link to="/homeAdmin">
          <a type="button" class="btn btn-red btn-block">VOLVER AL MENÚ DE ADMINISTRADOR</a>
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

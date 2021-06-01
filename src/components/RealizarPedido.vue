<template>

  <section class="src-components-realizar-pedido">
    <div class="jumbotron">
      <h2>Pizzas Disponibles</h2>
      <hr>
      <table v-if="pizzas.length" class="table table-white">
        <thead>
          <tr>
          <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(pizza, index) in pizzas" :key="index">
          <th v-for="(col, index) in getCols" :key="index">{{pizza[col]}}</th>
        </tr>
        </tbody>
      </table>
      <div class="form-group">
        <router-link to="/home">
          <a type="button" class="btn btn-secondary btn-block">VOLVER AL MENÚ PRINCIPAL</a>
        </router-link>
      </div>
      <div class="form-group">
          <router-link to="/detallePedido">
          <a type="button" class="btn btn-secondary btn-block">REALIZAR PEDIDO</a>
          </router-link>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-realizar-pedido',
    props: [],
    mounted () {

    },
    
    data () {
      return {
        url: 'https://60aa8aef66f1d00017772f51.mockapi.io/pizzas/',
        pizzas: []
      }
    },

    methods: {
      getPizzasAxios() {
        this.axios(this.url)
        .then(respuesta => {
          console.log(respuesta.data)
          this.pizzas = respuesta.data
        })
        .catch(error => console.error(error))
      }
    },

    computed: {
      getCols() {
        return Object.keys(this.pizzas[0])
      }
    },

    beforeMount() {
      this.getPizzasAxios()
    }
}


</script>

<style scoped lang="css">
  .src-components-realizar-pedido {

  }
</style>

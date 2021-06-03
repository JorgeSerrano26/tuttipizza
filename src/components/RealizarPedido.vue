<template>

  <section class="src-components-realizar-pedido">
    <div class="jumbotron">
      <div class="container">
        <div class="row ">
          <div class="col-10">
            <h2 class="title1 mt-5">Detalles del pedido</h2> 
          </div>
          <div class="col-2 col-offset-2">
            <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2 mt-2" alt="TuttiPizza logo">
          </div>
        </div>
      </div> 
      <br>
      <br>
      
      <table v-if="pizzas.length" class="table table-stripped">
        <thead>
          <tr>
          <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          <th> cantidad </th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(pizza, index) in pizzas" :key="index">
          <th v-for="(col, index) in getCols" :key="index">{{pizza[col]}}</th>
          <th>1</th>
        </tr>
        
        
        </tbody>
      </table>
      <div class="form-group">
        <router-link to="/detallePedido">
          <a type="button" class="btn btn-red btn-block">REALIZAR PEDIDO</a>
          </router-link>
      </div>
      <div class="form-group">
        <router-link to="/home">
          <a type="button" class="btn btn-red btn-block">VOLVER AL MENÚ PRINCIPAL</a>
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

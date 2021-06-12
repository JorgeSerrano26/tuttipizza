<template>

  <section class="src-components-editar-pizzas">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Menú de pizzas</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
     
      <table v-if="pizzas.length" class="table table-stripped">
        <thead>
          <tr>
          <th v-for="(col,index) in getCols" :key="index" style="background-color: #c0182f; color: white">{{col}}</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(pizza, index) in pizzas" :key="index">
          <td v-for="(col, index) in getCols" :key="index" style="color: #424242;">{{pizza[col]}}</td>
        </tr>
        </tbody>
      </table>
      <br>
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
    name: 'src-components-editar-pizzas',
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
  .src-components-editar-pizzas {

  }
</style>

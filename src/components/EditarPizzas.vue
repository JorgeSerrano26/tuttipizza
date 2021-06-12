<template>

  <section class="src-components-editar-pizzas">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">ADMINISTRADOR - Menú de pizzas</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
     
      <table v-if="pizzas.length" class="table table-stripped">
        <thead>
          <tr style="background-color: #c0182f; color: white">
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th style="background-color: #c0182f; color: white" class="sticky-col first-col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pizza in pizzas" :key="pizza.id">
            <th><font size="+1"> {{pizza.name}} </font></th>
            <td> {{pizza.description}} </td>
            <td> ${{pizza.prize}} </td>
            <button class="btn btn-red" @click="editar(pizza)" v-show="!pizza.editable">EDITAR</button>
            <button class="btn btn-red" @click="confirmar(pizza)" v-show="pizza.editable">CONFIRMAR</button>
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
        url: 'http://localhost:5000/api/pizzas/',
        pizzas: [],
        editable: true
      }
    },

    methods: {
      getPizzasAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          console.log('data', data)
          this.pizzas = data.map((pizza) => ({
            ...pizza,
            editable: false,
          }))
        })
        .catch(error => console.error(error))
      },
      editar(pizza) {
        console.log(pizza)
        return pizza.editable = true
      },
      confirmar(pizza) {
        console.log(pizza)
        return pizza.editable = false
      }
    },

    computed: {
    },

    beforeMount() {
      this.getPizzasAxios()
    }
}


</script>

<style scoped lang="css">
  .src-components-editar-pizzas {

  }
  .sticky-col {
  position: -webkit-sticky;
  position: sticky;
  background-color: white;
}

  .first-col {
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    left: 0px;
  }
</style>

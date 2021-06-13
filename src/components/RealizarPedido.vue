<template>
  <section class="src-components-realizar-pedido justify-context-center">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Realizar pedido</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>

      <table class="table table-stripped" v-if="pizzas.length">
        <thead>
          <tr style="background-color: #c0182f; color: white">
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pizza in pizzas" :key="pizza.id">
            <th><font size="+1"> {{pizza.name}} </font></th>
            <td> {{pizza.description}} </td>
            <td> ${{pizza.prize}} </td>
                <button
                  :disabled="pizza.cantidad === 0"
                  class="btn btn-red"
                  @click="restar(pizza)"
                >
                  -
                </button>
                {{ pizza.cantidad }}
                <button class="btn btn-red" @click="sumar(pizza)">+</button>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <h4 class="text-center m-4">Total: $ {{ getTotalPedido() }}</h4>
      </div>

      <div class="form-group">
        <router-link to="/detallePedido">
          <button @click="saveOrderDetails()" type="button" class="btn btn-red btn-block" v-show=" this.$store.state.total_order != 0">
            CONTINUAR
          </button>
        </router-link>
      </div>

      <div class="form-group">
        <router-link to="/home">
          <a type="button" class="btn btn-outline-secondary btn-block mb-5">
            VOLVER AL MENÚ PRINCIPAL
          </a>
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
        url: 'http://localhost:5000/api/pizzas/',
        pizzas: [],
      }
    },

    methods: {
      getPizzasAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          this.pizzas = data.map((pizza) => ({
            ...pizza,
            cantidad: 0,
          }))
        })
        .catch(error => console.error(error))
      },

      sumar(pizza) {
        pizza.cantidad++
      },

      restar(pizza) {
        if(pizza.cantidad > 0){
          pizza.cantidad--
        } 
      },

      getTotalPedido() {
        let parcial = 0;
        this.pizzas.forEach(pizza => {
          parcial += (parseInt(pizza.prize) * (pizza.cantidad))
        });
        this.$store.dispatch('new_total', parcial)
        return this.$store.state.total_order
      },

      saveOrderDetails() {
        this.pizzas.forEach(pizza => {
          this.$store.dispatch('savePizza', pizza)
        });
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
.src-components-realizar-pedido {
}
</style>

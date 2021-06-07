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
          <tr>
            <th
              v-for="(col, index) in getCols"
              :key="index"
              style="background-color: #c0182f; color: white"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pizza in pizzas" :key="pizza.id">
            <td
              v-for="(col, index) in getCols"
              :key="col"
              style="color: #424242; vertical-align: middle"
            >
              <span v-if="index < getCols.length - 1">
                {{ pizza[col] }}
              </span>
              <span v-if="index === getCols.length - 1">
                <button
                  :disabled="pizza.cantidad === 0"
                  class="btn btn-red"
                  @click="restar(pizza)"
                >
                  -
                </button>
                {{ pizza.cantidad }}
                <button class="btn btn-red" @click="sumar(pizza)">+</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <h4 class="text-center m-4">Total: $ {{ getTotalPedido }}</h4>
      </div>

      <div class="form-group">
        <router-link to="/detallePedido">
          <a type="button" class="btn btn-red btn-block">
            CONTINUAR
          </a>
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
        url: 'https://60aa8aef66f1d00017772f51.mockapi.io/pizzas/',
        pizzas: [],
      }
    },

    methods: {
      getPizzasAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          console.log('data', data)
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
      }
    },

    computed: {
      getCols() {
        return Object.keys(this.pizzas[0])
      },

      getTotalPedido() {
        let total = 0;
        this.pizzas.forEach(({ cantidad, Precio }) => {
          total += (parseInt(Precio) * cantidad)
        });
        return total
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

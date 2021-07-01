<template>
  <section class="src-components-realizar-pedido justify-context-center">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Realizar pedido</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>

      <h3 style="title2">¡Armá tu propia pizza!</h3>

      <table class="table table-stripped mt-4">
        <thead>
          <tr style="background-color: #c0182f; color: white;">
            <th>Pizza personalizada</th>
            <th>Precio</th>
            <th>Agregá</th>
          </tr>
        </thead>
        <tr>
          <td>
            ¡Armá la pizza como vos quieras! Elegí de nuestra variedad de ingredientes
          </td>
          <td>${{ customPizzaPrice }}</td>
          <td>
            <button class="btn btn-red" @click="openCustomPizzaModal()">AGREGAR PIZZA PERSONALIZADA</button>
          </td>
        </tr>
      </table>

      
      <h3 v-if="this.$store.state.customPizzas.length">Pizzas Personalizadas</h3>
      <table v-if="this.$store.state.customPizzas.length" class="table table-stripped">
        <thead>
          <tr style="background-color: #c0182f; color: white;">
            <th>Nombre</th>
            <th>Masa</th>
            <th>Queso</th>
            <th>Toppings</th>
            <th>Aceitunas</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customPizza in this.$store.state.customPizzas" :key="customPizza._id">
            <td> {{ customPizza.name }} </td>
            <td> {{ customPizza.dough }}</td>
            <td> {{ customPizza.cheese }}</td>
            <td> 
              <!-- <ul>
                <li v-for="topping in this.$store.state.customPizza.toppings" :key="topping.id">
                {{ topping }}
                </li>
              </ul> -->
              {{ customPizza.toppings }}
            </td>
            <td> {{ customPizza.olives }}</td>
            <td> ${{ customPizza.prize }}</td>
            <button
                  :disabled="customPizza.count === 0"
                  class="btn btn-red"
                  @click="restar(customPizza)"
                >
                  -
                </button>
                {{ customPizza.count }}
            <button class="btn btn-red" @click="sumar(customPizza)">+</button>
          </tr>
        </tbody>
      </table>

      <h3>Pizzas de la casa</h3>

      <table class="table table-stripped mt-4" v-if="this.$store.state.pizzas.length" style="vertical-align: middle">
        <thead>
          <tr style="background-color: #c0182f; color: white">
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pizza in this.$store.state.pizzas" :key="pizza.id">
            <th><font size="+1"> {{pizza.name}} </font></th>
            <td> {{pizza.description}} </td>
            <td> ${{pizza.prize}} </td>
                <button
                  :disabled="pizza.count === 0"
                  class="btn btn-red"
                  @click="restar(pizza)"
                >
                  -
                </button>
                {{ pizza.count }}
                <button class="btn btn-red" @click="sumar(pizza)">+</button>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <h4 class="text-center m-4">Total: $ {{ getTotalPedido() }}</h4>
      </div>

      <div class="form-group">
        <router-link to="/detallePedido">
          <button type="button" class="btn btn-red btn-block" v-show=" this.$store.state.total_order != 0">
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

    <ModalCustomPizza v-show="this.$store.state.isModalVisible" />
  </section>
</template>

<script lang="js">

  import ModalCustomPizza from './ModalCustomPizza'

  export default  {
    name: 'src-components-realizar-pedido',
    components: {
      ModalCustomPizza
    },
    props: [],
    mounted () {

    },
    
    data () {
      return {
        url: 'http://localhost:5000/api/pizzas/',
        pizzas: [],
        customPizzas: [],
        customPizzaPrice: 1500
      }
    },

    methods: {
      getPizzasAxios() {
        if (this.$store.state.pizzas.length == 0) {
          this.axios(this.url)
          .then(({ data }) => {
            this.$store.state.pizzas = data.map((pizza) => ({
              ...pizza,
              count: 0,
            }))
          })
          .catch(error => console.error(error))
        }
      },

      sumar(pizza) {
        pizza.count++
      },

      restar(pizza) {
        if(pizza.count > 0){
          pizza.count--
        } 
      },

      getTotalPedido() {
        let parcial = 0;
        this.$store.state.pizzas.forEach(pizza => {
          parcial += (parseInt(pizza.prize) * (pizza.count))
        });
        this.$store.state.customPizzas.forEach(customPizza => {
          parcial += (parseInt(customPizza.prize) * (customPizza.count))
        });
        this.$store.dispatch('new_total', parcial)
        return this.$store.state.total_order
      },

      saveOrderDetails() {
        this.pizzas.forEach(pizza => {
          this.$store.dispatch('savePizza', pizza)
        });
      },

      openCustomPizzaModal() {
        this.$store.state.isModalVisible = true
      },

      closeModal() {
        this.isCustomPizzModalOpen = false;
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

<template>

  <section class="src-components-estado-pedidos">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">AMINISTRADOR - Pedidos</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>

      <table class="table table-stripped" v-if="orders.length">
        <thead>
          <tr style="background-color: #c0182f; color: white">
            <th>N° de Pedido</th>
            <th>Usuario</th>
            <th>Dirección</th>
            <th>Departamento</th>
            <th>Monto</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in activeOrders()" :key="order._id">
            <th><font size="+1"> {{order._id}} </font></th>
            <td> {{order.user.name }} </td>
            <td> {{order.user.address}} {{order.user.address_number}} </td>
            <td> {{order.user.floor}} </td>
            <td> ${{order.payment.total_order}} </td>
            <td> {{order.state}} </td>
            <button class="btn btn-red" @click="moveOrder(order)">AVANZAR ESTADO</button>
          </tr>
        </tbody>
      </table>
      <h3 class="title1">Historial de pedidos</h3>
      <table class="table table-stripped" v-if="orders.length">
        <thead>
          <tr style="background-color: #c0182f; color: white">
            <th>N° de Pedido</th>
            <th>Usuario</th>
            <th>Dirección</th>
            <th>Departamento</th>
            <th>Monto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in historyOrders()" :key="order._id">
            <th><font size="+1"> {{order._id}} </font></th>
            <td> {{order.user.name }} </td>
            <td> {{order.user.address}} {{order.user.address_number}} </td>
            <td> {{order.user.floor}} </td>
            <td> ${{order.payment.total_order}} </td>
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

  // import axios from 'axios';

  export default  {
    name: 'src-components-estado-pedidos',
    props: [],
    mounted () {

    },
    
    data () {
      return {
        url: 'http://localhost:5000/api/orders/',
        orders: [],
      }
    },

    methods: {
      getOrdersAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          this.orders = data.map((order) => ({
            ...order
          }))
        })
        .catch(error => console.error(error))
      },
      
      moveOrder(order) {
        if (order.state != "Archivado") {
          const newIndex = (this.$store.state.state.indexOf(order.state))+1
          const newState = this.$store.state.state[newIndex]
          console.log(newState)
          this.axios.patch(`${this.url}${order._id}`, {state: newState})
          console.log(newIndex, newState)
        }
      },

      activeOrders() {
        return this.orders.filter(i => i.state != 'Archivado')
      },

      historyOrders() {
        return this.orders.filter(i => i.state == 'Archivado')
      },

    },

    computed: {
      
    },

    beforeMount() {
      this.getOrdersAxios()
    }
}


</script>

<style scoped lang="css">
  .src-components-estado-pedidos {

  }
</style>

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
            <th><font size="+1"> {{order.order_id}} </font></th>
            <td> {{order.user.name }} </td>
            <td> {{order.user.address}} {{order.user.address_number}} </td>
            <td> {{order.user.floor}} </td>
            <td> ${{order.total_prize}} </td>
            <td> {{order.state}} </td>
            <button class="btn btn-red" @click="moveOrder(order.order_id)">AVANZAR ESTADO</button>
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
            <th><font size="+1"> {{order.order_id}} </font></th>
            <td> {{order.user.name }} </td>
            <td> {{order.user.address}} {{order.user.address_number}} </td>
            <td> {{order.user.floor}} </td>
            <td> ${{order.total_prize}} </td>
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
      
      async moveOrder(id) {
        try {
          await this.axios.post(this.url+id+'/next', {'content-type':'application/json'})
        }
        catch(error) {
          console.log(error)
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

<template>

  <section class="src-components-estado-pedido">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Realizar pedido</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
        <h2>Pedido N° {{this.$store.state.orderId}} </h2>
        <h2 v-if="validOrder()" style="color: #C0182F">Su pedido se encuentra en "{{this.$store.state.orderSearch}}"</h2>
        <h2 v-else style="color: #C0182F">Lo sentimos pero su pedido no ha podido ser encontrado</h2>
        <br>
      <div class="form-group">
        <router-link to="/home">
        <a type="button" class="btn btn-red btn-block" @click="resetOrderId()">VOLVER AL MENÚ PRINCIPAL</a>
        </router-link>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-estado-pedido',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'http://localhost:5000/api/orders/',
        orders: []
      }
    },
    methods: {
      getOrdersAxios() {
        this.axios.get(this.url).then(response => (this.orders = response.data))
      },
      validOrder() {
        if (this.orders.some(order => order.order_id == this.$store.state.orderId)) {
          this.axios.get(this.url+this.$store.state.orderId).then((response) => this.$store.state.orderSearch = response.data.state)
          return true
        }
        return false
      },
      resetOrderId() {
        this.$store.dispatch('setOrderId', "")
      }
    },
    beforeMount() {
      this.getOrdersAxios()
    }
}


</script>

<style scoped lang="css">
  .src-components-estado-pedido {

  }
</style>

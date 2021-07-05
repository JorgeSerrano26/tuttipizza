<template>

  <section class="src-components-modal-estado-pedido">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Realizar pedido</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
        <h2>Pedido N° {{this.$store.state.orderId}} </h2>
        <h2 v-show="validOrder()" style="color: #C0182F">Su pedido se encuentra en {{this.order_search.data.state}} </h2>
        <h2 v-show="!validOrder()" style="color: #C0182F">Lo sentimos pero su pedido no ha podido ser encontrado</h2>
        <br>
      <div class="form-group">
        <router-link to="/home">
        <a type="button" class="btn btn-red btn-block" @click="reserOrderId()">VOLVER AL MENÚ PRINCIPAL</a>
        </router-link>
      </div>
    </div>
  </section>

</template>
this.orders.some(order => order.order_id == this.$store.state.orderId)
<script lang="js">

  export default  {
    name: 'src-components-modal-estado-pedido',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'http://localhost:5000/api/orders/',
        orders: [],
        order_search: ""
      }
    },
    methods: {
      getOrdersAxios() {
        this.axios.get(this.url).then(response => (this.orders = response.data))
      },
      validOrder() { 
        if (this.orders.some(order => order.order_id == this.$store.state.orderId)) {
          this.axios.get(this.url+this.$store.state.orderId).then((response) => this.order_search = response)
          return true
        }
        return false
      },
      reserOrderId() {
        this.$store.dispatch('setOrderId', "")
      }
    },
    beforeMount() {
      this.getOrdersAxios()
    }
}


</script>

<style scoped lang="css">
    .src-components-modal-estado-pedido {
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 600px; 
    justify-content: center !important;
    height: auto;
  }
  .center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
  .modal-dialog {
    background: #FFFFFF;
    display: flex;
    
    /* align-items: center; */
    
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
}
  .modal-header,
  .modal-footer {
    margin: 15px;
    display: flex;
  }
  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #C0182F;
    justify-content: space-between;
  }
  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>

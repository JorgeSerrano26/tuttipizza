<template>
  <section class="home">
    <div class="jumbotron">
      <div class="container d-flex flex-column justify-content-center align-items-center" style="height: 100vh">
        <img src="../assets/logo tutti pizza.png" class="img-size mb-5" alt="TuttiPizza logo" />
        <div class="d-flex flex-column">
          <router-link to="/realizarPedido">
            <a type="button" class="btn btn-red btn-block">REALIZAR UN PEDIDO</a>
          </router-link>
          <vue-form :state="formState">
            <validate tag="div">
              <div class="form-group">
                Número de pedido
                <br>
                <input type="text" name="orderId" id="orderId" autcomplete="off" v-model.trim="formData.orderId" autocomplete="off" minlength="5" required/>
                <field-messages name="orderId" show="$dirty">
                    <div slot="required" class="text-red mt-1">Ingrese el número de orden</div>
                    <div slot="minlength" class="text-red mt-1">Este campo requiere como mínimo {{ minLength }} caracteres</div>
                </field-messages>
                
                <div v-if="formState.$invalid">
                  <a type="button" class="btn btn-secondary" disabled>VER ESTADO DEL PEDIDO</a>
                </div>
                <div v-else>
                  <router-link to="/estadoPedido">
                    <a type="button" class="btn btn-red btn-block" @click="checkOrderId()">VER ESTADO DEL PEDIDO</a>
                  </router-link>
                </div>
              </div>
            </validate>
          </vue-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'home',
    props: [],
    mounted () {
    },

    data () {
      return {
        formData: this.getInitialData(),
        formState: {},
        minLength: 5,
      }
    },
    methods: {
      checkOrderId() {
        this.$store.dispatch('setOrderId', this.formData.orderId)
      },
       getInitialData() {
        return {
         orderId : ''
          }
        },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.home {
}

 .text-red {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    font-family: roboto;
    color: #C0182F;
  }
</style>

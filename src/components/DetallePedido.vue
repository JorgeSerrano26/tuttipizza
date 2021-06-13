<template>

  <section class="src-components-detalle-pedido">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">Detalles del pedido</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="card m-3" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title">Dirección de entrega</h5>
              <br>
              <vue-form :state="formState">
                <validate tag="div">
                  <label for="name">Nombre y Apellido</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    v-model="formData.name"
                    autocomplete="off" 
                    required
                    class="form-control" 
                    placeholder="Nombre"
                    minlength="5">
                  <field-messages name="name" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo Requerido</div>
                    <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere como mínimo 5 caracteres</div>
                  </field-messages>
                </validate>
                <br>
                <validate tag="div">
                  <label for="address">Calle</label>
                  <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    v-model="formData.address"
                    autocomplete="off" 
                    required
                    class="form-control" 
                    placeholder="Calle"
                    minlength="5">
                  <field-messages name="address" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo Requerido</div>
                    <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere como mínimo 5 caracteres</div>
                  </field-messages>
                </validate>
                <br>
                <validate tag="div">                
                  <label for="address_number">Altura</label>
                  <input 
                    type="number" 
                    name="address_number" 
                    id="address_number" 
                    v-model="formData.address_number"
                    autocomplete="off" 
                    required
                    class="form-control" 
                    placeholder="Altura">
                  <field-messages name="address_number" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo Requerido</div>
                  </field-messages>
                </validate>
                <br>
                <validate tag="div">
                  <label for="floor">Piso/Depto</label>
                   <input 
                    type="text" 
                    name="floor" 
                    id="floor" 
                    v-model="formData.floor"
                    autocomplete="off" 
                    class="form-control" 
                    placeholder="Altura">
                </validate>
              </vue-form>
            </div>
          </div>
          <div class="card m-3" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title">Forma de pago</h5>
              <br>
                <fieldset class="form-group">
                  <div class="row">
                    <legend class="col-form-label col-sm-5 pt-0">Elija la opción de pago</legend>
                    <div class="col-sm-7">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                        <label class="form-check-label" for="gridRadios1">
                          Efectivo
                        </label>
                      </div>
                      <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                        <label class="form-check-label" for="gridRadios3">
                          MercadoPago
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              <form>
                <br>
                <div class="form-group">
                  <label for="importe">¿Con cuánto vas a pagar?</label>
                  <input type="number" class="form-control" id="importe"  placeholder="Importe" v-model="importe"> 
                  <div class="form-group">
                    <br>
                    <p v-show="this.importe > this.$store.state.total_order"> VUELTO: ${{ this.importe - this.$store.state.total_order }} </p>
                    <br>
                    <p>DETALLE DEL PEDIDO:</p>
                    <ul v-for="pizza in printPizza" :key="pizza.id">
                      {{ pizza.name }} x {{pizza.cantidad}}
                    </ul>
                    <hr>
                    <p> MONTO TOTAL: ${{ this.$store.state.total_order }} </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <router-link to="/confirmacionpedido">
      <button type="submit" @click="send()" v-show="!formState.$invalid && this.importe > this.$store.state.total_order" class="btn btn-red btn-block">CONFIRMAR PEDIDO</button>
        </router-link>
      </div>
      <div class="form-group">
          <router-link to="/realizarpedido">
          <a type="button" class="btn btn-red btn-block">MODIFICAR PEDIDO</a>
          </router-link>
      </div>
      <div class="form-group">
          <router-link to="/home">
          <a type="button" class="btn btn-red btn-block">VOLVER AL MENÚ PRINCIPAL</a>
          </router-link>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-detalle-pedido',
    props: [],
    mounted () {
    },
    data () {
      return {
        formData: this.getInitialData(),
        formState: {},
        minLength: 3,
        importe: 0
      }
    },
    methods: {
      getInitialData() {
        return {
          name: '',
          address: '',
          address_number: '',
          floor: '',
          payment_method: 'Efectivo'
          }
        },
      send() {
        this.$store.dispatch('setName', this.formData.name)
        this.$store.dispatch('setAddress', this.formData.address)
        this.$store.dispatch('setAddressNumber', this.formData.address_number)
        this.$store.dispatch('setFloor', this.formData.floor)
        this.formData = this.getInitialData()
        }
    },
    computed: {
      printPizza() {
        return this.$store.state.order.filter(i => i.cantidad > 0)
      },
      
    },
  }
</script>

<style scoped lang="css">
  .src-components-detalle-pedido {

  }
</style>

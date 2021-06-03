<template>
  <section class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="../assets/logo tutti pizza.png" class="img-fluid img-size" alt="TuttiPizza logo">
        <br>
        <br>
        <br>
        <router-link to="/realizarPedido">
         <a type="button" class="btn btn-red btn-block">REALIZAR UN PEDIDO</a>
        </router-link>
        <div class="form-group">
          Número de pedido
          <br>
          <input placeholder="Número de pedido">
        </div>
        <div class="form-group">
          <router-link to="/estadoPedido">
          <a type="button" class="btn btn-red btn-block" >VER ESTADO DEL PEDIDO</a>
          </router-link>
        </div>

        <!-- <vue-form :state="formState" @submit.prevent="enviar()">
          <validate tag="div ">
            <label for="nombre" >Número de pedido</label>
            <input type="text" id="nroPedido" name="nroPedido" autocomplete="off" class="form-control" v-model.trim="formData.nroPedido" :minlength="minNroPedido" required no-espacios>
            <field-messages name="nroPedido" show="$dirty">
              <small slot="required" >Campo requerido</small>
              <small slot="minlength" >Este campo requiere al menos {{ nombreMinLength }} caracteres</small>
              
            </field-messages>

          </validate>

          <button class="btn btn-success mt-3 ml-3 mb-3" type="submit" :disabled="formState.$invalid" >Ver estado</button>
        </vue-form> -->
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
        // formData : this.getInitialData(),
        // formState : {},
        // minNroPedido : 5
      }
    },
    methods: {
      // enviar(){
      //   console.log({...this.formData});

      //   this.formData = this.getInitialData();
      //   this.formState._reset();
      // },

      // getInitialData() {
      //   return {
      //     nroPedido : ''
      //   }
      // }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .home {

  }

  
</style>

<template>

  <section class="src-components-detalle-pedido">
    <div class="jumbotron">
      <div class="container">
        <div class="row ">
          <div class="col-10">
            <h2 class="title1 mt-5">Detalles del Pedido</h2> 
          </div>
          <div class="col-2 col-offset-2">
            <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2 mt-2" alt="TuttiPizza logo">
          </div>
        </div>
        <br>
        <br>
        <div class="row">
          <div class="card m-3" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title">Dirección de entrega</h5>
              <br>
              <form>
                <div class="form-group">
                  <label for="calle">* Calle</label>
                  <input type="calle" class="form-control" id="calle" placeholder="Calle">
                  <br>
                  <label for="altura">* Altura</label>
                  <input type="number" class="form-control" id="altura" placeholder="Altura">
                  <br>
                  <label for="pisoDepto">Piso/Depto</label>
                  <input type="pisoDepto" class="form-control" id="pisoDepto" placeholder="Piso/Depto">
                </div>
              </form>
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
                  <input type="number" class="form-control" id="importe"  placeholder="Importe"> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <router-link to="/confirmacionPedido">
          <a type="button" class="btn btn-red btn-block">CONFIRMAR PEDIDO</a>
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

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-detalle-pedido {

  }
</style>

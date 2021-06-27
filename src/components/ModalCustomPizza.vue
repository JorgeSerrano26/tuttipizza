<template>

  <section class="src-components-modal-custom-pizza">
    <div class="modal-backdrop">
      <div class="modal center">
        <header class="container d-flex flex-row justify-content-between align-items-center">
          <slot name="header">
            <p class="text1 m-3">Armá tu propia pizza</p>
          </slot>

          <button type="button" class="close btn btn-red" @click="close()" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </header>

        <section >
          <slot name="body">

            <!-- NOMBRE -->
            <vue-form :state="formState">
              
              <validate tag="div" class="form-group m-2">
                <label for="nombrePizza" class="text2 align-self-start mt-3" >1. Ingresá el nombre de tu pizza</label>
                <input type="text" id="nombrePizza" name="nombrePizza" class="form-control m-2" v-model.trim="formData.nombrePizza" :minlength="nombrePizzaMinLength" required placeholder="Nombre">
                <field-messages name="nombrePizza" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                  <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ nombrePizzaMinLength }} caracteres</div>
                </field-messages>
              </validate>
              

              <div class="d-flex flex-row justify-content-around">
                <div class="bd-highlight">
                   <!-- MASA -->
                    <validate tag="div" class="form-group m-3">
                      <label for="descripcionPizza" class="text2 align-self-start" >2. Elegí la masa</label>
                      <div class="dropdown">
                        <button class="btn btn-red dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="width: 200px; text-align: right;">
                          Masa
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="width: 200px; text-align: right;">
                          <li><a class="dropdown-item" href="#">Tradicional</a></li>
                          <li><a class="dropdown-item" href="#">Queso y Oregano</a></li>
                          <li><a class="dropdown-item" href="#">Calabaza</a></li>
                        </ul>
                      </div>
                    </validate>
                </div>

                <div class="bd-highlight">
                  <!-- QUESO -->
                    <validate tag="div" class="form-group m-3">
                      <label for="descripcionPizza" class="text2 align-self-start" >3. Elegí el queso</label>
                      <div class="dropdown">
                        <button class="btn btn-red dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="width: 200px; text-align: right;">
                          Queso
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="width: 200px; text-align: right;">
                          <li><a class="dropdown-item " href="#" >Muzarella</a></li>
                          <li><a class="dropdown-item" href="#">Queso vegano</a></li>
                          <li><a class="dropdown-item" href="#">Queso azul</a></li>
                          <li><a class="dropdown-item" href="#">Queso cheddar</a></li>
                        </ul>
                      </div>
                    </validate>
                  
                </div>
              </div>
              

              

              
              <div class="d-flex flex-row justify-content-around">
                <div class="bd-highlight">
                  <!-- TOPPINGS -->
                  <validate tag="div" class="form-group m-2">
                    <label for="descripcionPizza" class="text2 align-self-start">4. Elegí los toppings</label>
                    <!-- <p>Podes elegir 3</p> -->
                      <div class="d-flex flex-row justify-content-around align-items-right">

                        <div class="bd-highlight m-3">
                          <div class="form-check">
                            <input class="form-check-input red-check" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Tomate
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Rúcula
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Morrón
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Ananá
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Anchoas
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Pepperoni
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Calabaza
                            </label>
                          </div>
                        </div>


                        <div class="bd-highlight m-3">
                          <div class="form-check">
                          <input class="form-check-input red-check" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Cebolla
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Salchichas
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Berenjena
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Ajo
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Salame
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Palmitos
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            Jamón
                          </label>
                        </div>
                      </div>

                  </div>
                </validate>
                </div>



              <div class="bd-highlight m-2">
                <!-- ACEITUNAS -->
                
                  <label for="descripcionPizza" class="text2 align-self-start">5. Elegí aceitunas</label>
                  <div class="dropdown">
                    <button class="btn btn-red dropdown-toggle" aria-haspopup="true" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="width: 200px; text-align: right;">
                      Aceitunas
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="width: 200px; text-align: right;">
                      <li><a class="dropdown-item" href="#">Aceitunas verdes</a></li>
                      <li><a class="dropdown-item" href="#">Aceitunas negras</a></li>
                      <li><a class="dropdown-item" href="#">Aceitunas rellenas</a></li>
                      <li><a class="dropdown-item" href="#">Sin aceitunas</a></li>
                    </ul>
                  </div>
              </div>
            </div>
             
            <button class="btn btn-red" type="submit" @click="createPizza()" :disabled="formState.$invalid">
              AGREGAR PIZZA
            </button>
            <button type="button" class="btn btn-secondary" @click="close()">
            Cancelar
          </button>
          </vue-form>
          </slot>
        </section>
      </div>
    </div> 
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-modal-custom-pizza',
    props: [],
    mounted () {

    },
    data () {
      return {
        nombrePizzaMinLength: 3,
        descripcionPizzanMinLength: 3,
        precioMin: 0,
        precioMax: 50000,
        pizzaAEditar: {},
        formData: this.getInitialData(),
        formState: {},
        customPizza: {
          name: '',
          dough: '',
          cheese: '',
          toppings: [],
          olive: ''
        }


      }
    },
    methods: {
      close() {
        this.$store.state.isModalVisible = false
      },
      getInitialData() {
        return {
          nombrePizza: '',
          descripcionPizza: '',
          precioPizza: ''
        }
      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-modal-custom-pizza {

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
    width: 700px; 
    height: auto;
    top: 100px;
    left: 33%;
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
  .center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

  .text1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: initial;
    font-family: roboto;
  }

  .text2 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    font-family: roboto;
  }

  .red-check {
    background-color: #C0182F; 
    border-color: #C0182F
  }

  .checkbox-text {
    font-size: 10px;
  }

  input[type=checkbox] {
  background-color: #FFFFFF;
  border-color: #C0182F;
} 
input[type=checkbox]:checked {
  background-color: #C0182F;
} 
</style>

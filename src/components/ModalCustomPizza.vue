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
            <vue-form :state="formState"  @submit.prevent="addCustomPizzaToOrder()">
              
              <validate tag="div" class="form-group m-2 p-2">
                <label for="name" class="text2 align-self-start mt-3" >1. Ingresá el nombre de tu pizza</label>
                <input type="text" id="nombrePizza" name="nombrePizza" class="form-control" v-model.trim="customPizza.name" :minlength="nombrePizzaMinLength" required placeholder="Nombre">
                <field-messages name="nombrePizza" show="$dirty">
                  <div slot="required" class="text-red mt-1">Campo requerido</div>
                  <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ nombrePizzaMinLength }} caracteres</div>
                </field-messages>
                
              </validate>
              

              <div class="d-flex flex-row justify-content-around">
                <div class="bd-highlight">
                   <!-- MASA -->
                    
                      <label for="dough" class="text2 align-self-start form-control" style="border-color: #FFFFFF">2. Elegí la masa</label>
                      <select v-model="customPizza.dough" class="btn-red btn">
                         <option disabled value="" style="background-color: #FFFFFF;">Seleccioná un tipo de masa</option>

                        <option style="background-color: #FFFFFF; color: #2c3e50;">Tradicional</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Queso y Oregano</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Calabaza</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Glutten Free</option>
                      </select>
                </div>

                <div class="bd-highlight ">
                  <!-- QUESO -->
                    <label for="cheese" class="text2 align-self-start form-control" style="border-color: #FFFFFF">3. Elegí el queso</label>
                    <select v-model="customPizza.cheese" class="btn-red btn">
                      <option disabled value="" style="background-color: #FFFFFF;">Seleccioná un tipo de queso</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Muzarella</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Queso vegano</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Queso azul</option>
                        <option style="background-color: #FFFFFF; color: #2c3e50;">Queso cheddar</option>
                    </select>
                </div>
              </div>
              
              <div class="d-flex flex-row justify-content-around">
                <div class="bd-highlight">
                  <!-- TOPPINGS -->
                  
                    <label for="toppings" class="text2 align-self-start form-control" style="border-color: #FFFFFF">4. Elegí los toppings</label>
                    <p class="checkbox-text">Podes elegir {{ cantMaxToppings }}</p>
                    <div class="d-flex flex-row justify-content-around">

                      <div class="bd-highlight m-3" >
                        <div id='toppings' class="d-flex flex-column align-items-start">
                          <div class="form-check">
                            <input type="checkbox" id="tomate" value="tomate" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('tomate')">
                            <label class="form-check-label " for="tomate">Tomate</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="rucula" value="rucula" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('rucula')">
                            <label class="form-check-label" for="rucula">Rúcula</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="morron" value="morron" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('morron')">
                            <label class="form-check-label" for="morron">Morrón</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="anana" value="anana" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('anana')">
                            <label class="form-check-label" for="anana">Ananá</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="anchoas" value="anchoas" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('anchoas')">
                            <label class="form-check-label" for="anchoas">Anchoas</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="pepperoni" value="pepperoni" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('pepperoni')">
                            <label class="form-check-label" for="pepperoni">Pepperoni</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="pepperoni" value="panceta" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('panceta')">
                            <label class="form-check-label" for="panceta">Pepperoni</label>
                          </div>
                        </div>
                      </div>

                      <div class="bd-highlight m-3">
                        <div id='toppings' class="d-flex flex-column align-items-start">
                          <div class="form-check">
                            <input type="checkbox" id="cebolla" value="cebolla" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('cebolla')">
                            <label class="form-check-label " for="cebolla">Cebolla</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="salchichas" value="salchichas" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('salchichas')">
                            <label class="form-check-label" for="salchichas">Salchichas</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="berenjena" value="berenjena" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('berenjena')">
                            <label class="form-check-label" for="berenjena">Berenjena</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="ajo" value="ajo" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('ajo')">
                            <label class="form-check-label" for="ajo">Ajo</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="salame" value="salame" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('salame')">
                            <label class="form-check-label" for="salame">Salame</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="palmitos" value="palmitos" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('palmitos')">
                            <label class="form-check-label" for="palmitos">Palmitos</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" id="jamon" value="jamon" class="form-check-input red-check" v-model="customPizza.toppings" :disabled="customPizza.toppings.length >= cantMaxToppings && !customPizza.toppings.includes('jamon')">
                            <label class="form-check-label" for="jamon">Jamón</label>
                          </div>
                        </div>            
                      </div>
                  </div>
                </div>



              <div class="bd-highlight m-2">
                <!-- ACEITUNAS -->
                
                <label for="olives" class="text2 align-self-start form-control" style="border-color: #FFFFFF">5. Elegí aceitunas</label>
                <select v-model="customPizza.olives" class="btn-red btn">
                  <option disabled value="" style="background-color: #FFFFFF;">Seleccioná las aceitunas</option>
                  <option style="background-color: #FFFFFF; color: #2c3e50;">Aceitunas verdes</option>
                  <option style="background-color: #FFFFFF; color: #2c3e50;">Aceitunas negras</option>
                  <option style="background-color: #FFFFFF; color: #2c3e50;">Aceitunas rellenas</option>
                  <option style="background-color: #FFFFFF; color: #2c3e50;">Sin aceitunas</option>
                </select>
              </div>
            </div>
             <span style="font-size: 10px;">Seleccionado: {{ customPizza }}</span><br>
            <button class="btn btn-red" type="submit" :disabled="formState.$invalid">
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
        nombrePizzaMinLength: 1,
        formState: {},
        cantMaxToppings: 4,
        customPizza: this.getInitialData(),
      }
    },
    methods: {
      close() {
        this.$store.state.isModalVisible = false
      },

      getInitialData() {
        return {
          name: '',
          dough: '',
          cheese: '',
          toppings: [],
          olives: '',
          count: 0
        }
      },

      addCustomPizzaToOrder() {
        console.log("test")
        this.$store.state.customPizzas.push(this.customPizza)
        // console.log(this.$store.state.customPizzas)
        this.customPizza = this.getInitialData()
        this.formState._reset()
        this.close()
      }

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

  .text-red {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    font-family: roboto;
    color: #C0182F;
  }

  .red-check {
    background-color: #C0182F; 
    border-color: #C0182F
  }

  .checkbox-text {
    font-size: 11px;
    margin-top: -10px;
    margin-bottom: -7px;
  }

  input[type=checkbox] {
  background-color: #FFFFFF;
  border-color: #C0182F;
} 
input[type=checkbox]:checked {
  background-color: #C0182F;
}
</style>

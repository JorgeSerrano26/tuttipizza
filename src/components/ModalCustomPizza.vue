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
                      <select v-model="customPizza.ingredients.dough" class="btn-red btn">
                        <option disabled value="" style="background-color: #FFFFFF;">Seleccioná un tipo de masa</option>
                        <option v-for="dough in this.dough" :key="dough.id" style="background-color: #FFFFFF; color: #2c3e50;"> {{dough.name}}</option>
                      </select>
                </div>

                <div class="bd-highlight ">
                  <!-- QUESO -->
                    <label for="cheese" class="text2 align-self-start form-control" style="border-color: #FFFFFF">3. Elegí el queso</label>
                    <select v-model="customPizza.ingredients.cheese" class="btn-red btn">
                      <option disabled value="" style="background-color: #FFFFFF;">Seleccioná un tipo de queso</option>
                        <option v-for="cheese in this.cheese" :key="cheese.id" style="background-color: #FFFFFF; color: #2c3e50;"> {{cheese.name}}</option>
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
                          <div v-for="topping in this.toppings" :key="topping.id" class="form-check">
                            <input type="checkbox" class="form-check-input red-check" @click='actionIngredient(topping.name)' :disabled="customPizza.ingredients.toppings.length >= cantMaxToppings && !customPizza.ingredients.toppings.includes(topping.name)">
                            <label class="form-check-label">{{topping.name}}</label>
                          </div>                          
                        </div>
                      </div>                      
                  </div>
                </div>



              <div class="bd-highlight m-2">
                <!-- ACEITUNAS -->
                
                <label for="olives" class="text2 align-self-start form-control" style="border-color: #FFFFFF">5. Elegí aceitunas</label>
                <select v-model="customPizza.ingredients.olives" class="btn-red btn">
                  <option disabled value="" style="background-color: #FFFFFF;">Seleccioná las aceitunas</option>
                  <option v-for="olive in this.olives" :key="olive.id" style="background-color: #FFFFFF; color: #2c3e50;"> {{olive.name}}</option>
                </select>
              </div>
            </div>
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
    props: [
      'pizzaCustomList'
    ],
    mounted () {

    },
    data () {
      return {
        urlPizza: 'http://localhost:5000/api/pizzas/',
        urlIngredient: 'http://localhost:5000/api/ingredients/',
        ingredients: [],
        nombrePizzaMinLength: 1,
        formState: {},
        cantMaxToppings: 4,
        customPizza: this.getInitialData(),
        dough: [],
        cheese: [],
        toppings: [],
        olives: []
      }
    },
    methods: {
      close() {
        this.$store.state.isModalVisible = false
      },

      getIngredientsAxios() {
        if (this.ingredients.length == 0) {
          this.axios(this.urlIngredient)
          .then(({ data }) => {
            this.ingredients = data.map((ingredient) => ({
              ...ingredient,
            }))
            this.dough = this.ingredients.filter(ingredient => ingredient.typeIngredient === 'dough')
            this.cheese = this.ingredients.filter(ingredient => ingredient.typeIngredient === 'cheese')
            this.toppings = this.ingredients.filter(ingredient => ingredient.typeIngredient === 'toppings')
            this.olives = this.ingredients.filter(ingredient => ingredient.typeIngredient === 'olives')
          })
          .catch(error => console.error(error))
        }
      },

      actionIngredient(topping) {
        if (this.customPizza.ingredients.toppings.some(elem => elem === topping)) {
          this.customPizza.ingredients.toppings.splice(this.customPizza.ingredients.toppings.indexOf(topping), 1)
        } else {
          this.customPizza.ingredients.toppings.push(topping)
        }
      },

      getInitialData() {
        return {
          name: '',
          ingredients: {
            dough: '',
            cheese: '',
            toppings: [],
            olives: ''
          },
          prize: 1500,
          description: 'Una pizza customizada'
        }
      },

      async addCustomPizzaToOrder() {
        let pizza = {
          name: this.customPizza.name,
          prize: this.customPizza.prize,
          description: this.customPizza.description,
          ingredients: {
            dough: this.customPizza.ingredients.dough,
            cheese: this.customPizza.ingredients.cheese,
            toppings: this.customPizza.ingredients.toppings,
            olives: this.customPizza.ingredients.olives,
          },
          isCustom: true,
        }
        try {
          let respuesta = await this.axios.post(this.urlPizza, pizza, {'content-type':'application/json'})
          let p = respuesta.data
          p.count = 0
          this.$store.state.customPizzas.push(p)
          this.formData = this.getInitialData()
          this.formState._reset();
        }
        catch(error) {
          console.log(error)
        }
        this.close()
      }

    },
    computed: {

    },

    beforeMount() {
      this.getIngredientsAxios()
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

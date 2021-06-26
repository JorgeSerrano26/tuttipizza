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
              <validate tag="div" class="container d-flex flex-row justify-content-between align-items-center mt-3">
                <label for="nombrePizza" class="text2">1. Ingresá el nombre de tu pizza</label>
                <input type="text" id="nombrePizza" name="nombrePizza" style="width: 200px" class="form-control mb-2 p-2" v-model.trim="formData.nombrePizza" :minlength="nombrePizzaMinLength" required placeholder="Nombre">
                <field-messages name="nombrePizza" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                  <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ nombrePizzaMinLength }} caracteres</div>
                </field-messages>
              </validate>

              <!-- MASA -->
              <validate tag="div" class="container d-flex flex-row justify-content-between align-items-center mt-3">
                <label for="descripcionPizza" class="text2">2. Elegí la masa</label>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle btn-red" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </validate>

              <!-- QUESO -->
              <validate tag="div" class="container d-flex flex-row justify-content-between align-items-center mt-3">
                <label for="descripcionPizza" class="text2">3. Elegí el queso</label>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle btn-red" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </validate>

              <!-- TOPPINGS -->
              <validate tag="div" class="container d-flex flex-row justify-content-between align-items-center mt-3">
                <label for="descripcionPizza" class="text2">4. Elegí los toppings</label>
                <!-- <p>Podes elegir 3</p> -->
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle btn-red" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </validate>


              <!-- ACEITUNAS -->
              <validate tag="div" class="container d-flex flex-row justify-content-between align-items-center mt-3">
                <label for="descripcionPizza" class="text2">5. Elegí aceitunas</label>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle btn-red" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </validate>
             <br>
            <button class="btn btn-red p-2" type="submit" @click="createPizza()" :disabled="formState.$invalid">
              AGREGAR PIZZA
            </button>
          </vue-form>
          </slot>
        </section>
        <footer class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close()">
            Cancelar
          </button>
        </footer>
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
        formState: {}
      }
    },
    methods: {
      close() {
        this.$emit('close');
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
    width: 600px; 
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
</style>

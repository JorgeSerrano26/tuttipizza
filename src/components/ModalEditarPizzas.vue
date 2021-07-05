<template>
  <section class="src-components-modal-editar-pizzas">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="modal-backdrop">
        <div class="modal center">
          <header class="modal-header">
            <slot name="header">
              Modificar pizza: <b> {{ this.$store.state.editablePizza.name }} </b>
            </slot>

            <button type="button" class="close btn btn-red" @click="close()" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </header>

          <section class="modal-body">
            <slot name="body">
              <!-- NOMBRE -->
              <vue-form :state="formState" @submit.prevent="editar()">
                <validate tag="div">
                  <label for="nombrePizza">Nombre</label>
                  <input type="text" id="nombrePizza" name="nombrePizza"  class="form-control mb-2" v-model.trim="pizzaAEditar.name" :minlength="nombrePizzaMinLength" required >
                  <field-messages name="nombrePizza" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ nombrePizzaMinLength }} caracteres</div>
                  </field-messages>
                </validate>
                <!-- DESCRIPCIÓN -->
                <validate tag="div">
                  <label for="descripcionPizza">Descripción</label>
                  <input type="text" id="descripcionPizza" name="descripcionPizza"  class="form-control mb-2" v-model.trim="pizzaAEditar.description" required :minlength="descripcionPizzanMinLength" >
                  <field-messages name="descripcionPizza" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div> 
                    <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ descripcionPizzanMinLength }} caracteres</div>
                  </field-messages>
                </validate>

                <!-- PRECIO -->
                <validate tag="div">
                  <label for="precioPizza">Precio</label>
                  <input type="number" id="precioPizza" name="precioPizza" autocomplete="off" class="form-control mb-2" v-model.number="pizzaAEditar.prize" :min="precioMin" :max="precioMax" required>
                  <field-messages name="precioPizza" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    <div slot="min" class="alert alert-danger mt-1">El precio no puede ser menor de {{ precioMin }}</div>
                    <div slot="max" class="alert alert-danger mt-1">El precio no puede ser mayor de {{ precioMax }} </div>
                  </field-messages>
                </validate>
              <br>
              <button class="btn btn-red p-2" type="submit" @click="editar()" :disabled="formState.$invalid">
                EDITAR PIZZA
              </button>
            </vue-form>
            </slot>
          </section>
          <footer class="modal-footer">
            <button type="button" class="btn btn-secondary"  @click="close()">
              Cancelar
            </button>
          </footer>
        </div>
      </div> 
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-modal-editar-pizzas',
    props: [],
    mounted () {
    },
    data () {
      return {
        url: 'http://localhost:5000/api/pizzas/',
        pizzas: [],
        nombrePizzaMinLength: 3,
        descripcionPizzanMinLength: 3,
        precioMin: 0,
        precioMax: 50000,
        pizzaAEditar: this.$store.state.editablePizza,
        formData: this.getInitialData(),
        formState: {}
      }
    },
    methods: {
     close() {
        this.$store.state.editModalVisible = false;
        this.$store.state.editablePizza = null
      },
      getInitialData() {
        return {
          name: this.$store.state.editablePizza.name,
          description: this.$store.state.editablePizza.description,
          prize: this.$store.state.editablePizza.prize
        }
      },
      async editar() {
        this.$store.state.editablePizza.name = this.pizzaAEditar.name
        this.$store.state.editablePizza.description = this.pizzaAEditar.description
        this.$store.state.editablePizza.prize = this.pizzaAEditar.prize
        try {
          let respuesta = await this.axios.patch(this.url+this.$store.state.editablePizza._id, this.$store.state.editablePizza, {'content-type':'application/json'})
          
          let pizzita = respuesta.data
          let index = this.pizzas.findIndex(pizza => pizza._id == pizzita.id)
          this.pizzas.splice(index,1,this.$store.state.editablePizza)
          this.formData = this.getInitialData()
          // alert(`La pizza ${pizza.nombre} se actualizó correctamente`)
          this.close()
        }
        catch(error) {
          console.log(error)
        }
      },
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-components-modal-editar-pizzas {
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
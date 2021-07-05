<template>
  <section class="src-components-modal-agregar-ingrediente">

    <div class="modal-backdrop">
      <div class="modal center">
        <header class="modal-header">
          <slot name="header">
            Agregar ingrediente
          </slot>

          <button type="button" class="close btn btn-red" @click="close()" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </header>

        <section class="modal-body">
          <slot name="body">
              <vue-form :state="formState">
                  <label for="typeIngredient">Tipo de Ingrediente</label>         
                  <select class="btn-red btn" v-model="formData.typeIngredient">
                    <option disabled value="" style="background-color: #FFFFFF;">Tipo</option>
                    <option style="background-color: #FFFFFF; color: #2c3e50;"> dough </option>
                    <option style="background-color: #FFFFFF; color: #2c3e50;"> cheese </option>
                    <option style="background-color: #FFFFFF; color: #2c3e50;"> toppings </option>
                    <option style="background-color: #FFFFFF; color: #2c3e50;"> olives </option>
                  </select>
                <validate tag="div">
                  <label for="name">Nombre</label>
                  <input type="text" id="name" name="name"  class="form-control mb-2" v-model.trim="formData.name" :minlength="nameIngredientMinLength" required placeholder="Nombre">
                  <field-messages name="name" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ nameIngredientMinLength }} caracteres</div>
                  </field-messages>
                </validate>
             <br>
            <button class="btn btn-red p-2" type="submit" @click="postIngredientsAxios()" :disabled="formState.$invalid">
              AGREGAR INGREDIENTE
            </button>
          </vue-form>
          </slot>
        </section>
        <footer class="modal-footer">
          <span>{{formData}}</span>
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
    name: 'src-components-modal-agregar-ingrediente',
    props: [
      'ingredientsList'
    ],
    mounted () {
    },
    data () {
      return {
        url: 'http://localhost:5000/api/ingredients/',
        ingredients: [],
        nameIngredientMinLength: 3,
        descripcionIngredientnMinLength: 3,
        formData: this.getInitialData(),
        formState: {},
      }
    },
    methods: {
      close() {
        this.$store.state.isIngredientAddModalVisible = false;
      },
      getInitialData() {
        return {
          typeIngredient: '',
          name: '',
        }
      },
      async postIngredientsAxios() {
        let ingredient = {
          typeIngredient: this.formData.typeIngredient,
          name: this.formData.name,
        }
        console.log(ingredient)
        try {
          await this.axios.post(this.url, ingredient, {'content-type':'application/json'})
          this.formData = this.getInitialData()
          this.formState._reset();
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
  .src-components-modal-agregar-ingrediente {
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
</style>
<template>

  <section class="src-components-editar-pizzas">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">ADMINISTRADOR - Menú de pizzas</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>


    <table v-if="pizzas.length" class="table table-stripped">
      <thead>
        <tr style="background-color: #c0182f; color: white">
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th style="background-color: #c0182f; color: white" class="sticky-col first-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pizza in pizzas" :key="pizza.id" style="vertical-align: middle">
          <ModalEditarPizzas v-show="isModalVisible" @close="closeModal" :pizzaToEdit="pizza" />
            <td>
                {{ pizza.name }}
            </td>
            <td>
              {{ pizza.description }}
            </td>
            <td>
              ${{ pizza.prize }}
            </td>
            <div class="d-flex flex-row">
              <!-- <button type="button" class="btn btn-red"  @click="showModal()">EDITAR</button> -->
              <!-- <button class="btn btn-red p-2" @click="mostrarFormulario(pizza)" v-show="!pizza.editable">EDITAR</button> -->

              <!-- EDIT -->
              <button type="button" class="btn btn-red"  @click="showModal(pizza)">EDITAR</button>
              

              <!-- DELETE  -->
              <button class="btn btn-red p-2" @click="borrar(pizza._id)">BORRAR</button>
            </div>
        </tr>
      </tbody>
    </table>

    <ModalAgregarPizza v-show="isAgregarModalVisible" @close="closeAgregarModal" :pizzaList="pizzas" />

    <button type="button" class="btn btn-red"  @click="showAgregarModal">AGREGAR</button>

    <!-- ADD-->
      <!-- <br>
        <vue-form :state="formState" @submit.prevent="postPizzasAxios()">
          <validate tag="div"  v-show="showAddField">
            <h5>Agregar nueva pizza</h5>
            <label for="nombrePizza">Nombre</label>
            <input type="text" id="nombrePizza" name="nombrePizza" autocomplete="off" class="form-control" v-model.trim="formData.nombrePizza" :minlength="nombrePizzaMinLength" required>
            <field-messages name="nombrePizza" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
              <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ nombrePizzaMinLength }} caracteres</div>
            </field-messages>
          </validate>

          <validate tag="div" v-show="showAddField">
            <label for="descripcionPizza">Descripcion</label>
            <input type="text" id="descripcionPizza" name="descripcionPizza" autocomplete="off" class="form-control" v-model.trim="formData.descripcionPizza" required :minlength="descripcionPizzanMinLength">
            <field-messages name="descripcionPizza" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
              <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere al menos {{ descripcionPizzanMinLength }} caracteres</div>
            </field-messages>
          </validate>

          <validate tag="div" v-show="showAddField">
            <label for="precioPizza">Precio</label>
            <input type="number" id="precioPizza" name="precioPizza" autocomplete="off" class="form-control" v-model.number="formData.precioPizza" :min="precioMin" :max="precioMax" required>
            <field-messages name="precioPizza" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
              <div slot="min" class="alert alert-danger mt-1">El precio no puede ser menor de {{ precioMin }}</div>
              <div slot="max" class="alert alert-danger mt-1">El precio no puede ser mayor de {{ precioMax }} </div>
            </field-messages>
          </validate>



          <button class="btn btn-success mt-3 ml-3 mb-3" type="submit" :disabled="formState.$invalid" v-show="showAddField">AÑADIR PIZZA</button>

        </vue-form> -->

        <!-- <button button class="btn btn-red" @click="showAddField = true" >AGREGAR PIZZA</button> -->


        <!-- <button class="btn btn-secondary" @click="showAddField = false" v-show="showAddField">Cancelar</button>
      </div> -->

      <!-- <div v-if="!showAddField">
            <button class="btn btn-red" @click="showAddField = true">AGREGAR PIZZA</button>
          </div> -->  


      <div class="form-group">
        <router-link to="/homeAdmin">
          <a type="button" class="btn btn-red btn-block">VOLVER AL MENÚ DE ADMINISTRADOR</a>
        </router-link>
     </div>

   </div>
  </section>
</template>

<script lang="js">

  import ModalEditarPizzas from './ModalEditarPizzas';
  import ModalAgregarPizza from './ModalAgregarPizza';


  export default  {
    name: 'src-components-editar-pizzas',
    components: {
      ModalEditarPizzas,
      ModalAgregarPizza
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'http://localhost:5000/api/pizzas/',
        pizzas: [],
        editable: true,
        showAddField: false,
        nombrePizzaMinLength: 3,
        descripcionPizzanMinLength: 3,
        precioMin: 0,
        precioMax: 50000,
        formData: this.getInitialData(),
        formData2: this.getInitialData(),
        formState: {},
        formState2: {},
        pizzaAEditar: {},
        isModalVisible: false,
        isAgregarModalVisible: false
      }
    },

    methods: {

      getPizzasAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          console.log('data', data)
          this.pizzas = data.map((pizza) => ({
            ...pizza,
            editable: false,
          }))
        })
        .catch(error => console.error(error))
      },

    //  async postPizzasAxios() {
    //     let pizza = {
    //       name: this.formData.nombrePizza,
    //       prize: this.formData.precioPizza,
    //       description: this.formData.descripcionPizza
    //     }
    //     try {
    //       let respuesta = await this.axios.post(this.url, pizza, {'content-type':'application/json'})
    //       let p = respuesta.data
    //       this.pizzas.push(p)
    //       this.formData = this.getInitialData()
    //       this.formState._reset();
    //     }
    //     catch(error) {
    //       console.log(error)
    //     }
    //   },


       async editar(id) {
        let pizza = {
          name: this.pizzaAEditar.nombrePizza,
          prize: this.pizzaAEditar.precioPizza,
          description: this.pizzaAEditar.descripcionPizza
        }
        try {
          let respuesta = await this.axios.patch(this.url+id, pizza, {'content-type':'application/json'})
          let pizzita = respuesta.data
          let index = this.usuarios.findIndex(pizza => pizza._id == pizzita.id)
          this.pizzas.splice(index,1,pizza)

          this.formData = this.getInicialData()
          alert(`La pizza ${pizzita.nombre} se actualizó correctamente`)
        }
        catch(error) {
          console.log(error)
        }
      },

       async borrar(id) {
        try {
          let respuesta = await this.axios.delete(this.url+id)
          let piz = respuesta.data
          console.log(piz)
          let index = this.pizzas.findIndex(pizza => pizza._id == id)
          this.pizzas.splice(index,1)
          alert(`La pizza se elimino correctamente`)
        }
        catch(error) {
          console.log(error)
        }
      },

      // mostrarFormulario(pizza) {
      //   this.pizzaAEditar = {
      //     nombrePizza: pizza.name,
      //     descripcionPizza: pizza.description,
      //     precioPizza: pizza.prize
      //   };
      //   pizza.editable = true
      // },

      getInitialData() {
        return {
          nombrePizza: '',
          descripcionPizza: '',
          precioPizza: ''
        }
      },

      showModal(pizza) {
        this.isModalVisible = true;
        this.$store.state.editablePizza = pizza
      },
      closeModal() {
        this.isModalVisible = false;
      },

      showAgregarModal() {
        this.isAgregarModalVisible = true;
      },
      closeAgregarModal() {
        this.isAgregarModalVisible = false;
      }


    },
    computed: {
    },

    beforeMount() {
        this.getPizzasAxios()
      },
  }
</script>

<style scoped lang="css">
  .src-components-editar-pizzas {

  }
  .sticky-col {
  position: -webkit-sticky;
  position: sticky;
  background-color: white;
}

  .first-col {
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    left: 0px;
  }
</style>

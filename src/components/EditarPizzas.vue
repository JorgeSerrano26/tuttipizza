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
              <ModalEditarPizzas v-if="$store.state.editModalVisible" />
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
              <!-- EDIT -->
              <button type="button" class="btn btn-red"  @click="showEditModal(pizza)">EDITAR</button>
              <!-- DELETE  -->
              <button class="btn btn-red p-2" @click="borrar(pizza._id)">BORRAR</button>
            </div>
        </tr>
      </tbody>
    </table>

    <ModalAgregarPizza v-show="this.$store.state.isAddModalVisible" :pizzaList="pizzas" />


    <!-- ADD  -->
    <button type="button" class="btn btn-red"  @click="showAgregarModal">AGREGAR</button>

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
        nombrePizzaMinLength: 3,
        descripcionPizzanMinLength: 3,
        precioMin: 0,
        precioMax: 50000,
        formData: this.getInitialData(),
        formData2: this.getInitialData(),
        formState: {},
        formState2: {},
        pizzaAEditar: {}
      }
    },
    methods: {
      getPizzasAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          this.pizzas = data.map((pizza) => ({
            ...pizza,
            editable: false,
          }))
        })
        .catch(error => console.error(error))
      },

      //  async editar(id) {
      //   let pizza = {
      //     name: this.pizzaAEditar.nombrePizza,
      //     prize: this.pizzaAEditar.precioPizza,
      //     description: this.pizzaAEditar.descripcionPizza
      //   }
      //   try {
      //     let respuesta = await this.axios.patch(this.url+id, pizza, {'content-type':'application/json'})
      //     let pizzita = respuesta.data
      //     let index = this.usuarios.findIndex(pizza => pizza._id == pizzita.id)
      //     this.pizzas.splice(index,1,pizza)
      //     this.formData = this.getInicialData()
      //     alert(`La pizza ${pizzita.nombre} se actualizó correctamente`)
      //   }
      //   catch(error) {
      //     console.log(error)
      //   }
      // },
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

      getInitialData() {
        return {
          nombrePizza: '',
          descripcionPizza: '',
          precioPizza: ''
        }
      },

      showEditModal(pizza) {
        this.$store.state.editModalVisible = true
        this.$store.state.editablePizza = pizza
      },
      showAgregarModal() {
        this.$store.state.isAddModalVisible = true;
      },
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
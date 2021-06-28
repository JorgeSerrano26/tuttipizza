<template>

  <section class="src-components-editar-ingredientes">
    <div class="jumbotron">
      <header class="py-4">
        <div class="container d-flex flex-row justify-content-between align-items-center">
          <h2 class="title1">ADMINISTRADOR - Menú de ingredientes</h2>
          <img src="../assets/logo tutti pizza.png" class="img-fluid img-size2" alt="TuttiPizza logo" />
        </div>
      </header>


    <table v-if="ingredients.length" class="table table-stripped">
      <thead>
        <tr style="background-color: #c0182f; color: white">
          <th>Tipo</th>
          <th>Nombre</th>
          <th style="background-color: #c0182f; color: white" class="sticky-col first-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ingredient in ingredients" :key="ingredient.id" style="vertical-align: middle">
            <td>
                {{ ingredient.name }}
            </td>
            <td>
              {{ ingredient.description }}
            </td>
            <td>
              ${{ ingredient.prize }}
            </td>
            <div class="d-flex flex-row">
              <!-- DELETE  -->
              <button class="btn btn-red p-2" @click="borrar(ingredient._id)">BORRAR</button>
            </div>
        </tr>
      </tbody>
    </table>

    <ModalAgregarIngredient v-show="this.$store.state.isIngredientAddModalVisible" :ingredientList="ingredients" />


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
  import ModalAgregarIngredient from './ModalAgregarIngredient';
  export default  {
    name: 'src-components-editar-ingredientes',
    components: {
      ModalAgregarIngredient
    },
    props: [],
    mounted () {
    },
    data () {
      return {
        url: 'http://localhost:5000/api/ingredients/',
        ingredients: [],
        formData: this.getInitialData(),
        formState: {},
      }
    },
    methods: {
      getIngredientsAxios() {
        this.axios(this.url)
        .then(({ data }) => {
          this.ingredients = data.map((ingredient) => ({
            ...ingredient,
          }))
        })
        .catch(error => console.error(error))
      },

       async borrar(id) {
        try {
          let respuesta = await this.axios.delete(this.url+id)
          let ingr = respuesta.data
          console.log(ingr)
          let index = this.ingredients.findIndex(ingredient => ingredient._id == id)
          this.ingredients.splice(index,1)
          alert(`El ingrediente se elimino correctamente`)
        }
        catch(error) {
          console.log(error)
        }
      },

      getInitialData() {
        return {
          typeIngredient: '',
          nameIngredient: '',
        }
      },

      showAgregarModal() {
        this.$store.state.isIngredientAddModalVisible = true;
      },
    },
    computed: {
    },
    beforeMount() {
        this.getIngredientsAxios()
      },
  }
</script>

<style scoped lang="css">
  .src-components-editar-ingredientes {
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
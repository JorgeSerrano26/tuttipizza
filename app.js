window.app = new Vue({
  el: '#app',
  data: {
    name: '',
    pizza: [
      {
        name: 'Pizza Personalizada',
        description: 'Elegí los ingredientes!, desde la masa hasta los toppings',
        precio: 1000,
        cantidad: 0
      },
      {
        name: 'Muzzarella',
        description: 'muzzarella, orégano y aceitunas verdes',
        precio: 500,
        cantidad: 0
      },
      {
        name: 'Napolitana',
        description: 'muzzarella, orégano, tomate y aceitunas verdes',
        precio: 700,
        cantidad: 0
      },
      {
        name: 'Jamón y Morrón',
        description: 'muzzarella, orégano, jamón, morrones rojos y aceitunas verdes',
        precio: 650,
        cantidad: 0
      },
      {
        name: 'Fugazzetta',
        description: 'muzzarella, orégano, cebolla y aceitunas verdes',
        precio: 800,
        cantidad: 0
      },
      {
        name: 'Calabresa',
        description: 'muzzarella, orégano, pepperoni y aceitunas verdes',
        precio: 750,
        cantidad: 0
      }
    ]
  },
  computed: {
  }
})
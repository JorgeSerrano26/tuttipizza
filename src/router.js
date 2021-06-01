import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import ConfirmacionPedido from './components/ConfirmacionPedido.vue'
import DetallePedido from './components/DetallePedido.vue'
import EditarPizzas from './components/EditarPizzas.vue'
import EstadoPedidos from './components/EstadoPedidos.vue'
import HomeAdmin from './components/HomeAdmin.vue'
import RealizarPedido from './components/RealizarPedido.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/confirmacionPedido', component: ConfirmacionPedido },
        { path: '/detallePedido', component: DetallePedido },
        { path: '/editarPizzas', component: EditarPizzas },
        { path: '/estadoPedidos', component: EstadoPedidos },
        { path: '/homeAdmin', component: HomeAdmin },
        { path: '/realizarPedido', component: RealizarPedido }
    ]
})
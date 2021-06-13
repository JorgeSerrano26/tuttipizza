import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: "",
            email: "",
            address: "",
            payment_method: "Efectivo",
        },
        order: [],
        total_order: 0,
    },
    actions : {
        new_total({commit}, parcial) {
            commit('new_total_mutation', parcial)
        },
        savePizza({commit}, pizza) {
            commit('savePizzaMutation', pizza)
        }
    },
    mutations : {
        new_total_mutation(state, parcial) {
            state.total_order = parcial
        },
        savePizzaMutation(state, pizza) {
            state.order.push(pizza)
        },
    }
})

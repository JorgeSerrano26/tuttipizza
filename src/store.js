import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: "",
            address: "",
            address_number: "",
            floor: "",
            payment_method: "Efectivo",
        },
        order: [],
        orderId: "",
        total_order: 0,
    },
    actions : {
        new_total({commit}, parcial) {
            commit('new_total_mutation', parcial)
        },
        savePizza({commit}, pizza) {
            commit('savePizzaMutation', pizza)
        },
        setName({commit}, name) {
            commit('setNameMutation', name)
        },
        setAddress({commit}, address) {
            commit('setAddressMutation', address)
        },
        setAddressNumber({commit}, address_number) {
            commit('setAddressNumberMutation', address_number)
        },
        setFloor({commit}, floor) {
            commit('setFloorMutation', floor)
        },
        setOrderId({commit}, orderId) {
            commit('setOrderIdMutation', orderId)
        }
    },
    mutations : {
        new_total_mutation(state, parcial) {
            state.total_order = parcial
        },
        savePizzaMutation(state, pizza) {
            state.order.push(pizza)
        },
        setNameMutation(state, name) {
            state.user.name = name
        },
        setAddressMutation(state, address) {
            state.user.address = address
        },
        setAddressNumberMutation(state, address_number) {
            state.user.address_number = address_number
        },
        setFloorMutation(state, floor) {
            state.user.floor = floor
        },
        setOrderIdMutation(state, orderId) {
            state.orderId = orderId
        }
    }
})

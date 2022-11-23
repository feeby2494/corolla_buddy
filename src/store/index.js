import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
    repairs: [],
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if ( localStorage.getItem('cart') ) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      // to test if a given item is already in the cart
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)

      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    addRepair(state, repair) {
      state.repairs.push(repair)
    },
    removeRepair(state, repair) {
      state.repairs.pop(repair)
    },
    updateBrand(state, index, value){
      state.repairs[index].brand = value
    },
    updateModel(state, index, value){
      state.repairs[index].model = value
    },
    updateSerial(state, index, value){
      console.log(index, value)
      state.repairs[index].serial = value
    }
  },
  actions: {
  },
  modules: {
  }
})

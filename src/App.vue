<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Corolla Buddy</strong></router-link>

        <a @click="showMobileMenu = !showMobileMenu" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
        <div class="navbar-end">
          <router-link to="/8th_gen_corolla" class="navbar-item">8th Gen Corolla</router-link>
          <router-link to="/11th_gen_corolla" class="navbar-item">11th Gen Corolla</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log_in" class="button is-light">Log in</router-link>

              <button @click="showModal()" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLength }})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading}">
      <div class="lds-dual-ring"></div>
    </div>
    <!-- Turn me into modal or slider -->

    <div class="modal" :class="{'is-active': showCartModalFlag}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Shopping Cart</p>
          <button class="delete" aria-label="close" @click="cancelModal">></button>
        </header>
        <ul class="modal-card-body columns is-multiline">
          <div v-if="!cart.items.length" class="column is-12 has-text-centered">No Items in your cart!</div>
          <li class="column is-12" v-for="(item, index) in cart.items" :key="index">
            <div class="box columns">
              <p class="column is-2">{{item.product.name}}</p>
              <div class="control column is-5 columns">
                <label class="label column is-7">Quantity:</label>
                <input class="input column is-5" type="number" v-model="item.quantity">
              </div>
              <p class="column is-2">
                Total: {{ item.quantity * item.product.price }}
              </p>
              <button @click="$event=> removeFromCart(item)" class="column is-3 button is-danger">Remove from cart</button>
            </div> 
          </li>
        </ul>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="okModal">Ok</button>
          <button class="button" @click="cancelModal">Cancel</button>
        </footer>
      </div>
    </div>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>
</template>

<script>
  import { toast } from 'bulma-toast'
  export default {
    data() {
      return {
        showMobileMenu: false,
        showCartModalFlag: false,
        okCartPressed: false,
        cart: {
          items: []
        }
      }
    },
    beforeCreate() {
      this.$store.commit('initializeStore')
    },
    mounted() {
      this.cart = this.$store.state.cart
    },
    computed: {
      cartTotalLength() {
        let totalLength = 0

        for (let i = 0; i < this.cart.items.length; i++) {
          totalLength += this.cart.items[i].quantity
        }

        return totalLength
      }
    },
    methods: {
      removeFromCart(item){

        // const item = {
        //         product: this.cart.items[itemToRemove].product,
        //         quantity: this.cart.items[itemToRemove].quantity
        //     }

        this.$store.commit('removeFromCart', item)

          toast({
              message: 'The product was removed from the cart',
              type: 'is-success',
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: 'bottom-right',
          })
      },
      showModal() {
        this.okCartPressed = false;
        this.showCartModalFlag = true;
      },
      okModal() {
        this.okCartPressed = true;
        this.showCartModalFlag = false;
      },
      cancelModal() {
        this.okCartPressed = false;
        this.showCartModalFlag = false;
      }
      
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}
</style>

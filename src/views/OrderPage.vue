<template>
  <div>
    <div class="p-5">
      <h4>My Order</h4>

      <div class="d-flex flex-row flex-wrap mt-3">
        <!--* Product Card -->
        <OrderCard  v-for="cart in carts.Products" :key="cart.id" :product="cart" :isCart=true></OrderCard>

        <!--* EmptyMessage -->
        <div class="d-flex justify-content-center align-items-center" v-if="carts.length < 1">
          <h1 class="muted text-muted">
            EMPTY
          </h1>
        </div>
      </div>
      <button  @click.prevent="order" type="button" class="btn btn-danger">Checkout</button>
    </div>
  </div>
</template>

<script>

import OrderCard from '@/components/OrderCard.vue'

import { alertError } from '@/apis/swal.js'

export default {
  name: 'OrderPage',
  data () {
    return {
      carts: []
    }
  },
  methods: {
    fetchAllCart () {
      this.$store.dispatch('fetchAllCart')
        .then((data) => {
          console.log(data,'orderPage vue');
          this.carts = data
        }).catch((err) => {
          console.log(err);
          alertError(err.error)
          this.$router.push('/')
        })
    },
    order(){
      console.log(this.carts)
      this.$store.dispatch('order', this.carts.Products)
      .then((data) => {
          console.log(data, "Order Page--- Vue");
          window.snap.pay(data.token);
          // this.$router.push("/order");
        })
        .catch((err) => {
          alertError(err.error);
        });
    }
  },
  created: function () {
    this.fetchAllCart()
  },
  components: {
 OrderCard
  }
}
</script>

<style>

</style>
<template>
  <div id="app">
    <Navbar></Navbar>
 
    <div>
      <router-view />
    </div>

    <!-- <footer class="page-footer font-small blue fixed-bottom">
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer> -->

    <div class="">
      <div class="">
        <HFooter></HFooter>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'


export default{
  name: "App",
  created: function () {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGGED_IN", true);
    } else {
      this.$store.commit("SET_IS_LOGGED_IN", false);
    }
  },
  components: {
    Navbar,
    HFooter
  }
}
</script>

<style>

</style>

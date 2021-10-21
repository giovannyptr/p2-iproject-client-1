<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #f4978e !important">
      <div class="container">
         <img src="../assets/logo.jpg" alt="nav-logo" style="height: 55px">
        <div class="me-auto"></div>
        <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
           <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/register" class="nav-link text-white" aria-current="page" >Register</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link text-white" aria-current="page" to="/orderpage">My Order</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link text-white" aria-current="page" @click.prevent="logout" >Logout</a>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link text-white" aria-current="page" to="/login">Login</router-link>
          </li>
        
          
         
        </ul>
      </div>
    </nav>
</template>

<script>


export default {
    name: "Navbar",
    methods:{
        logout() {
            localStorage.removeItem('access_token')
            this.$store.commit('SET_IS_LOGGED_IN', false)
            if(this.$router.currentRoute.path !== '/') {
                this.$router.push('/')
            }
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="tabs-to-dropdown">
    <div class="nav-wrapper d-flex align-items-center justify-content-between">
      <ul class="nav nav-pills d-none d-md-flex" id="pills-tab" role="tablist">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>

        <li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" to="/bookmarks">My</router-link>
        </li>

        <li class="nav-item" v-if="!isLoggedIn">
          <router-link class="nav-link navbar-nav pull-right" to="/login"
            >Login</router-link
          >
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link class="nav-link navbar-nav pull-right" to="/register"
            >Register</router-link
          >
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <a
            class="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            @click.prevent="logout"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { alertSuccess } from '@/apis/swal.js'

export default {
  name: "Navbar",
  methods: {
   logout () {
      localStorage.removeItem('access_token')
      this.$store.commit('SET_IS_LOGGED_IN', false)
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/')
      }
      alertSuccess('See you later!')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
};
</script>

<style>
:root {
  --darkgreen: #f08080;
}

body,
.tabs-to-dropdown .dropdown-toggle,
.tabs-to-dropdown .dropdown-item {
  font-size: 1rem;
}

.tabs-to-dropdown {
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}

.tabs-to-dropdown .nav-wrapper a {
  color: var(--darkgreen);
}

.tabs-to-dropdown .nav-pills .nav-link.active {
  background-color: var(--darkgreen);
}

.tabs-to-dropdown .nav-pills li:not(:last-child) {
  margin-right: 30px;
}
</style>


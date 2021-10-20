<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="border w-75 p-5 my-5 bg-white rounded-3 shadow">
      <div class="row">
        <div class="col-6">
          <img src="../assets/2020.jpg" alt="login-img" width="100%" />
        </div>
        <div class="col-6 align-self-center">
          <form @submit.prevent="login">
            <div class="mb-3">
              <h5 class="mb-4">Sign in to your account</h5>
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-danger w-100">Login</button>
          </form>

          <div>
            <p class="mb-0">
              Don't have an account?
              <a @click.prevent="toRegister" class="text-pink-50 fw-bold">
                Sign Up</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alertSuccess, alertError } from "@/apis/swal.js";

export default {
   name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", payload)
        .then(() => {
          this.$router.push("/");
          alertSuccess("Welcome to Hack Beauty!");
        })
        .catch((err) => {
          alertError(err.error);
        });
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  components: {
   
  },
};
</script>

<style>
</style>
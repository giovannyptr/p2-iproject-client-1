<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="border w-75 p-5 my-5 bg-white rounded-3 shadow">
      <div class="row">
        <div class="col-6">
          <img src="../assets/register.jpg" alt="login-img" width="100%" />
        </div>
        <div class="col-6 align-self-center">
          <form @submit.prevent="submit">
            <div class="mb-3">
              <h5 class="mb-4 text-center">Create your account</h5>
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
            <button type="submit" class="btn btn-danger w-100">Register</button>
          </form><br>

          <div>
            <p class="mb-0 text-center">
             Already have an account?
              <a @click.prevent="toLogin" class="text-pink-50 fw-bold">
                Sign In</a
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
  name: "RegisterPage",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        adress: this.adress,
      };
      this.$store
        .dispatch("register", payload)
        .then((data) => {
          alertSuccess(
            `New user with email ${data.email} is created! Please log in to continue`
          );
          this.$router.push("/login");
        })
        .catch((err) => {
          alertError(err.error.join(", "));
        });
    },
  },
};
</script>

<style>

</style>
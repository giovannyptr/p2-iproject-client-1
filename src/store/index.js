import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    SET_IS_LOGGED_IN: function (state, payload = false) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login(context, payload) {
      const { email, password } = payload
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/login',
          data: { email, password }
        })
          .then(({ data }) => {
            console.log(data, 'store index.js');
            localStorage.setItem('access_token', data.access_token)
            context.commit('SET_IS_LOGGED_IN', true)
            resolve()
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/register',
          data: payload
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchAllProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/products',
          params: payload
        })
          .then(({ data }) => {
            console.log(data);
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    fetchAllCart() {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/mycarts',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            console.log(data, 'store');
            resolve(data)
          }).catch((err) => {
            console.log(err);
            reject(err.response.data)
          })
      })
    },
    addMyCart (context, ProductId) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/mycarts',
          headers: { access_token: localStorage.getItem('access_token') },
          data: { ProductId }
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    getProductData (context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `/products/${id}`,
        })
          .then(({ data }) => {
            console.log('getProductData=', data)
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    order (context, carts) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/order',
          headers: { access_token: localStorage.getItem('access_token') },
          data: carts
        })
          .then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    removeMyCart (context, ProductId) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: `/mycarts/${ProductId}`,
          headers: { access_token: localStorage.getItem('access_token') },
          data: { ProductId }
        })
          .then(({ data }) => {

            resolve(data)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
  
  },
  modules: {
  }
})

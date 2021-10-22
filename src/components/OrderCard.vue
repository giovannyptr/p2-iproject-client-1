<template>
    <div class="col-4">
        <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="product.img_url" alt="Card image cap" style="height: 200px"/>
            <div class="card-body">
                <h5 class="card-title" style="height: 60px">{{product.name}}</h5>
                <p class="card-text">
                {{product.brand}}
                </p>
                <a href="#" @click.prevent="toDetails" class="card-link fas fa-search fa-lg">detail</a> | 
                <a href="#"  v-if="isLoggedIn" @click.prevent="removeMyCart" class="fas fa-trash-alt fa-lg"></a>
            </div>
        </div>
  </div>
</template>

<script>
import { alertError, alertSuccess } from "../apis/swal";


export default {
  name: "OrderCard",
  props: ["product"],
  methods: {
    toDetails() {
      console.log(this.product, "cek");
      this.$router.push(`/products/${this.product.id}`);
    },
    removeMyCart() {
      this.$store
        .dispatch("removeMyCart", this.product.id)
        .then((data) => {
          console.log(data);
          this.$router.push("/orderpage");
          alertSuccess(`Product has been deleted to your cart!`);
        })
        .catch((err) => {
          alertError(err.error);
        });
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "roboto", sans-serif;
  background-color: #f2f2f2;
}

h1 {
  text-align: center;
  color: #333333;
}

.cardcontainer {
  width: 350px;
  height: 500px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  transition: 0.3s;
}

.cardcontainer:hover {
  box-shadow: 0 0 45px gray;
}

.photo {
  height: 300px;
  width: 100%;
}

.photo img {
  height: 100%;
  width: 100%;
}

.txt1 {
  margin: auto;
  text-align: center;
  font-size: 17px;
}

.content {
  width: 80%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -33px;
}

.photos {
  width: 90px;
  height: 30px;
  background-color: #e74c3c;
  color: white;
  position: relative;
  top: -30px;
  padding-left: 10px;
  font-size: 20px;
}

.txt4 {
  font-size: 27px;
  position: relative;
  top: 33px;
}

.txt5 {
  position: relative;
  top: 18px;
  color: #e74c3c;
  font-size: 23px;
}

.txt2 {
  position: relative;
  top: 10px;
}

.cardcontainer:hover > .photo {
  height: 200px;
  animation: move1 0.5s ease both;
}

@keyframes move1 {
  0% {
    height: 300px;
  }

  100% {
    height: 200px;
  }
}

.cardcontainer:hover > .content {
  height: 200px;
}

.footer {
  width: 80%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  position: relative;
  top: -15px;
}

.btn {
  position: relative;
  top: 20px;
}

#heart {
  cursor: pointer;
}

.like {
  float: right;
  font-size: 22px;
  position: relative;
  top: 20px;
  color: #333333;
}

.fa-gratipay {
  margin-right: 10px;
  transition: 0.5s;
}

.fa-gratipay:hover {
  color: #e74c3c;
}

.txt3 {
  color: gray;
  position: relative;
  top: 18px;
  font-size: 14px;
}

.comments {
  float: right;
  cursor: pointer;
}

.fa-clock,
.fa-comments {
  margin-right: 7px;
}
</style>
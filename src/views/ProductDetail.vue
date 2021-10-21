<template>
  <div class="container">
    <div class="card">
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">
            <!-- <video width="320" height="240" controls>
              <source :src="this.link" type="video/mp4" />
            </video> -->
            <div class="preview-pic tab-content">
              <div class="tab-pane active" id="pic-1">
                <img class="m-4" :src="productData.img_url" />
              </div>
            </div>
          </div>
          <div class="details col-md-6">
            <h3 class="product-title m-4">{{ productData.name }}</h3>

            <p class="product-description">{{ productData.description }}</p>
            <h4 class="price">
              current price:
              <span>IDR {{ productData.price.toLocaleString("id-ID") }}</span>
            </h4>
          </div>
          <div class="col-12 m-4">
            <iframe width="100%" height="400" :src="this.link"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alertError } from "../apis/swal";

export default {
  name: "ProductDetail",
  data: function () {
    return {
      productData: {
        name: '',
        description: '',
        price: 0
      },
      link: ''
    };
  },
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
    getProductData() {
      this.$store
        .dispatch("getProductData", this.$route.params.id)
        .then((data) => {
          this.productData = data.product;
          this.link = `https://www.youtube.com/embed/${data.videos.Data[0].video_id}`
        })
        .catch((err) => {
          console.log(err);
          alertError(err.error);
          this.$router.push("/");
        });
    },
     
  },
  created: function () {
    this.getProductData();
  },
  components: {},
};
</script>

<style>
body {
  font-family: "open sans";
  overflow-x: hidden;
}

img {
  max-width: 100%;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff1aec;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart,
.like {
  background: #ff1aa0;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
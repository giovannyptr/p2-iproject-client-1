<template>
  <div>
    <!--* HomePage -->
    <section id="HomePage" class="p-5 container" style="height: 1080px">
      <div class="row">
        <div class="content col-10" id="PostList">
          <ProductList
            :products="products"
            :totalPages="4"
            :currentPage="currentPage"
            :currentSize="size"
            @changePage="changePage"
            @changeSize="2"
          ></ProductList>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import { alertError } from "@/apis/swal.js";

export default {
  name: "Home",
  data() {
    return {
      size: 6,
      // ? response
      totalPages: 5,
      currentPage: 1,
      posts: [],
      products: [],
    };
  },
  methods: {
    changePage(targetPage) {
      this.page = targetPage;
      this.fetchAllProduct();
    },
    changeSize(targetSize) {
      this.size = Number(targetSize);
      this.fetchAllProduct();
    },
    fetchAllProduct() {
      const payload = {
        name: this.name || undefined,
        CategoryId: this.CategoryId || undefined,
        page: this.page || undefined,
        size: this.size || undefined,
      };
      console.log(payload);
      this.$store
        .dispatch("fetchAllProduct", payload)
        .then((data) => {
          console.log(data.rows, "home");
          this.products = data.rows;
          this.totalPages = data.totalPages;
          this.currentPage = data.currentPage;
        })
        .catch((err) => {
          alertError(err.error);
        });
    },
    clear() {
      this.name = "";
      this.CategoryId = "";
    },
  },
  created: function () {
    this.fetchAllProduct();
  },
  components: {
    ProductList,
  },
};
</script>
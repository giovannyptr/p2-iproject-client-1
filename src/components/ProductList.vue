<template>
  <div class="container">
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "PostList",
  data: function () {
    return {
      targetPage: 1,
    };
  },
  props: ["products", "totalPages", "currentPage", "currentSize"],
  methods: {
    changePage(event) {
      const targetPage = event.target.innerHTML;
      this.$emit("changePage", targetPage);
    },
    changeSize(event) {
      const targetSize = event.target.innerHTML;
      this.$emit("changeSize", targetSize);
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style>
</style>
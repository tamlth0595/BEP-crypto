<template>
  <div class="home">
    <Header />
    <div>Home page</div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/Home.scss";
</style>

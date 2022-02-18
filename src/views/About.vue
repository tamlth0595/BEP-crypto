<template>
  <div class="about-page">
    <Header />
    <div>About US</div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "About",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/About.scss";
</style>

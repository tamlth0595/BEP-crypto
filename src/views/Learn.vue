<template>
  <div class="learn-page">
    <Header />
    <div>Learn and Play page</div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "Learn",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/Learn.scss";
</style>

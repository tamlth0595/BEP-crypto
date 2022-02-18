<template>
  <div class="gamefi-page">
    <Header />
    <div>GameFi page</div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "GameFi",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/GameFi.scss";
</style>

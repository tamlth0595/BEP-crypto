<template>
  <div class="governance">
    <Header />
    <div>Governance page</div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "Governance",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/Governance.scss";
</style>

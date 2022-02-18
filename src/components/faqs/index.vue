<template>
  <div class="faq-section">
    <div class="faq-section-inner">
      <h3>FAQs</h3>
      <div class="text-part d-flex">
        <div class="half-part">
          <h1>LEARN MORE.</h1>
        </div>
        <div class="half-part">
          <p>
            Here’s some common questions about Infinity Guild and how to become
            part of the community.
          </p>
        </div>
      </div>
      <div class="search-part">
        <img src="@/assets/images/searchIcon.svg" alt="search-icon" />
        <input type="text" placeholder="Search..." v-model="searchKey" />
      </div>
      <FaqItem title="GETTING STARTED" :faqs="startFaqs" />
      <FaqItem title="BECOMING A SCHOLAR" :faqs="startFaqs" />
      <FaqItem title="BECOMING A MANAGER" :faqs="startFaqs" />
    </div>
  </div>
</template>

<script>
import { startFaqs } from "@/constants/index.js";
import FaqItem from "@/components/faqs/Faq.vue";
export default {
  name: "FaqSection",
  components: {
    FaqItem,
  },
  data() {
    return {
      searchKey: "",
      startFaqs: startFaqs,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/About.scss";
</style>

<template>
  <div class="faq-list-item">
    <div class="faq-list-item-inner">
      <div class="sub-inner d-flex">
        <div class="title-part">
          <h5>{{ title }}</h5>
        </div>
        <div class="faqs-list">
          <details v-for="faq in faqs" :key="faq.id">
            <summary>{{ faq.quiz }}</summary>
            <div class="answer">
              <p>
                {{ faq.answer }}
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqItem",
  props: {
    title: String,
    faqs: Array,
  },
};
</script>

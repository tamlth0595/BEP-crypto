<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-logo">
        <img src="@/assets/images/footer-logo.svg" alt="" />
      </div>
      <div class="main-section d-flex">
        <div class="left-part">
          <router-link
            :to="navItem.link"
            v-for="navItem in navItems"
            :key="navItem.id"
          >
            {{ navItem.label }}
          </router-link>
        </div>
        <div class="right-part">
          <p>Join Us:</p>
          <div class="d-flex">
            <router-link
              :to="socialLink.link"
              v-for="socialLink in socialLinks"
              :key="socialLink.id"
            >
              <img :src="socialLink.icon" alt="social-icon" />
              <span>{{ socialLink.label }}</span>
            </router-link>
          </div>
        </div>
      </div>
      <p class="year-indicator">
        © {{ currentYear }} Infinity Guild. All rights reserved
      </p>
    </div>
  </div>
</template>

<script>
import twitterIcon from "@/assets/images/twitterIcon.svg";
import discordIcon from "@/assets/images/discordIcon.svg";

export default {
  name: "Header",
  data() {
    return {
      navItems: [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "About Us", link: "/about" },
        { id: 3, label: "Login/Sign-up", link: "/login" },
        { id: 4, label: "FAQs", link: "/faqs" },
      ],
      socialLinks: [
        {
          id: 1,
          label: "Twitter",
          link: "/",
          icon: twitterIcon,
        },
        {
          id: 2,
          label: "Discord",
          link: "/",
          icon: discordIcon,
        },
      ],
      currentYear: "",
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/Footer.scss";
</style>

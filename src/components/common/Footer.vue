<template>
  <div class="footer">
    <div class="footer-inner container">
      <div class="divider"></div>
      <div class="footer-links d-flex">
        <div class="left-part d-flex-col">
          <div class="footer-logo">
            <img src="@/assets/images/logo.svg" alt="" />
          </div>
          <div class="footer-social">
            <router-link
              :to="socialLink.link"
              v-for="socialLink in socialLinks"
              :key="socialLink.id"
            >
              <img :src="socialLink.icon" :alt="socialLink.label" />
            </router-link>
          </div>
        </div>
        <div class="right-part d-flex">
          <div
            class="service"
            v-for="{ id, label, children } in navItems"
            :key="id"
          >
            <div class="service-name">{{ label }}</div>
            <ul class="service-items">
              <li
                class="service-items-link"
                v-for="{ id, label, path } in children"
                :key="id"
              >
                <a :href="path">{{ label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="footer-extra d-flex">
        <span class="year-indicator">©BEP20 {{ currentYear }}</span>
        <div class="term">
          <a href="#">Term of Services</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navItems: [
        {
          id: "Resources",
          label: "Resources",
          children: [
            { id: 1, label: "Who We Are", path: "/" },
            { id: 2, label: "Learn and Play", path: "/" },
            { id: 3, label: "GameFi", path: "/" },
            { id: 4, label: "DeFi Governance's", path: "/" },
          ],
        },
        {
          id: "Solutions",
          label: "Solutions",
          children: [
            { id: 1, label: "Decentralized Finance", path: "/" },
            { id: 2, label: "Security Tokens", path: "/" },
            { id: 3, label: "SEC-Registered Offerings", path: "/" },
            { id: 4, label: "About Us", path: "/" },
          ],
        },
        {
          id: "Partners",
          label: "Partners",
          children: [
            { id: 1, label: "Valued Partners", path: "/" },
            { id: 2, label: "Leadership", path: "/" },
            { id: 3, label: "Contracts", path: "/" },
          ],
        },
        {
          id: "Company",
          label: "Partners",
          children: [
            { id: 1, label: "About Us", path: "/" },
            { id: 2, label: "Grants", path: "/" },
            { id: 3, label: "Join Us", path: "/" },
          ],
        },
      ],
      socialLinks: [
        {
          id: 1,
          label: "Facebook",
          link: "/",
          icon: require("@/assets/images/footer/facebook.svg"),
        },
        {
          id: 2,
          label: "Twitter",
          link: "/",
          icon: require("@/assets/images/footer/twitter.svg"),
        },
        {
          id: 3,
          label: "Reddit",
          link: "/",
          icon: require("@/assets/images/footer/reddit.svg"),
        },
        {
          id: 4,
          label: "Medium",
          link: "/",
          icon: require("@/assets/images/footer/medium.svg"),
        },
        {
          id: 5,
          label: "Discord",
          link: "/",
          icon: require("@/assets/images/footer/discord.svg"),
        },
        {
          id: 6,
          label: "Telegram",
          link: "/",
          icon: require("@/assets/images/footer/telegram.svg"),
        },
        {
          id: 7,
          label: "Youtube",
          link: "/",
          icon: require("@/assets/images/footer/youtube.svg"),
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

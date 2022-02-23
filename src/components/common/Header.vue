<template>
  <div class="header">
    <div class="header-inner d-flex container m-hide">
      <div class="left-part">
        <router-link to="/" class="logo-link">
          <img alt="Vue logo" src="@/assets/images/logo.svg" />
        </router-link>
      </div>
      <div class="right-part d-flex">
        <div class="d-flex">
          <router-link
            :to="navItem.link"
            v-for="navItem in navItems"
            :key="navItem.id"
          >
            {{ navItem.label }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-inner mobile-navbar d-hide">
      <div class="mobile-navbar-inner">
        <router-link to="/" class="logo-link">
          <img alt="Vue logo" src="@/assets/images/logo.svg" />
        </router-link>
        <div @click="showMobileMenu = !showMobileMenu">
          <img alt="menu" src="@/assets/images/menu.svg" />
        </div>
      </div>
    </div>
    <div v-if="showMobileMenu" class="d-flex mobile-menu">
      <router-link
        :to="navItem.link"
        v-for="navItem in navItems"
        :key="navItem.id"
      >
        {{ navItem.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
// import mobileDiscordIcon from "@/assets/images/social/discord.svg";

export default {
  name: "Header",
  data() {
    return {
      navItems: [
        { id: 1, label: "Who We Are", link: "/" },
        { id: 2, label: "Learn and Play", link: "/learn-play" },
        { id: 3, label: "GameFi", link: "/gamefi" },
        { id: 4, label: "DeFi Governance's", link: "/governance" },
        { id: 5, label: "About Us", link: "/about" },
      ],
      showMobileMenu: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/Header.scss";
</style>

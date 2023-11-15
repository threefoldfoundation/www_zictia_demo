<template>
  <NavbarView />

  <router-view></router-view>
  <FooterView />
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

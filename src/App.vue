<template>
  <NavbarView msg="Welcome to Your Vue.js App" />
  <router-view></router-view>
</template>

<script>
import NavbarView from "./components/NavbarView.vue";

export default {
  name: "App",
  components: {
    NavbarView,
  },
};
</script>

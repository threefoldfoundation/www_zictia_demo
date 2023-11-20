<template>
  <AboutHeader :items="HeaderView" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import AboutHeader from "@/components/AboutHeader.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    AboutHeader,
    BackGround,
  },

  data() {
    return {
      HeaderView: [
        {
          bg: "home/about_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Elevating Zanzibar's Connectivity",
          content:
            "Explore our story, mission, and the impactful role we play in shaping a digitally empowered future for all.",
        },
      ],
      backgroundItems: [
        {
          bg: "home/about_bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
    };
  },
};
</script>

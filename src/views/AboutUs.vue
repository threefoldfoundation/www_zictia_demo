<template>
  <AboutHeader :items="HeaderView" />
  <CallToaction :calltoactions="CallToactionitems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import AboutHeader from "@/components/AboutHeader.vue";
import CallToaction from "@/components/CallToaction.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    AboutHeader,
    CallToaction,
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
      CallToactionitems: [
        {
          title: "About ZICTIA",
          content:
            "Zanzibar ICT Infrastructure Agency (ZICTIA) is a government agency established in 2018, responsible for managing Zanzibar's National Fiber backbone and Data Centre. In 2020, an act was enacted, expanding its mandate to include managing ICT infrastructure, telecommunication towers, and providing affordable, secure, and convergent ICT infrastructure services to the public",
          content2:
            "ZICTIA has a dedicated team of technical experts available 24/7 for support and education on ICT infrastructure. They also offer a secure Data Centre for public and private institutions for data backup and disaster recovery. ZICTIA aims to advance Information and Communication Technology in the country through its services.",
        },
      ],
    };
  },
};
</script>

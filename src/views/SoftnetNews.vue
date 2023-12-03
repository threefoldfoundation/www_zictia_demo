<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    SmallBanner,
    HeaderSection,
    BackGround,
  },

  data() {
    return {
      HeaderView: [
        {
          bg: "home/news_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Latest News and Innovations",
          content:
            "Stay at the forefront of technological advancements in Zanzibar by delving into ZICTIA's latest news",
        },
      ],
      backgroundItems: [
        {
          bg: "home/news_bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
    };
  },
};
</script>

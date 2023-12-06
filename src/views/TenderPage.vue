<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <ListConent />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import ListConent from "@/components/ListConent.vue";
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import BackGround from "@/components/BackGround.vue";

export default {
  name: "TenderPage",
  components: {
    SmallBanner,
    HeaderSection,
    ListConent,
    BackGround,
  },

  data() {
    return {
      HeaderView: [
        {
          bg: "home/docs_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Documentation Hub",
          content:
            "Explore the comprehensive documentation provided by ZICTIA to access a treasure trove of useful information.",
        },
      ],
      backgroundItems: [
        {
          bg: "home/docs_bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
    };
  },
};
</script>

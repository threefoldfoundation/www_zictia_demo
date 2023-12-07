<template>
  <SmallBanner />
  <Sliderview :items="sliderItems" />
  <FAQAccordion />
</template>
<script>
import SmallBanner from "@/components/SmallBanner.vue";
import Sliderview from "@/components/Sliderview.vue";
import FAQAccordion from "@/components/FAQAccordion.vue";
export default {
  name: "FAQ",
  components: {
    SmallBanner,
    Sliderview,
    FAQAccordion,
  },
  data() {
    return {
      sliderItems: [
        {
          bg: "home/home_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Powering Innovation, Connecting Futures",
          content:
            "Catalyzing Zanzibar's Digital Transformation Journey Together.",
        },
        {
          bg: "home/about_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Elevating Zanzibar's Connectivity",
          content:
            "Explore our story, mission, and the impactful role we play in shaping a digitally empowered future for all.",
        },

        {
          bg: "home/management_header.jpg",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Delve into the expertise behind ZICTIA's success",
          content:
            "Explore our dedicated management team and organizational members shaping the future of ICT infrastructure in Zanzibar.",
        },
      ],
    };
  },
};
</script>

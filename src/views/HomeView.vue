<template>
  <Sliderview :items="sliderItems" />
  <HeaderContent />
  <HeaderWithBg />
  <FeaturesPage />
  <HeaderWithBgRight />
  <TestimonialsPage />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import Sliderview from "@/components/Sliderview.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import FeaturesPage from "@/components/FeaturesPage.vue";
import HeaderWithBg from "@/components/HeaderWithBg.vue";
import HeaderWithBgRight from "@/components/HeaderWithBgRight.vue";
import TestimonialsPage from "@/components/TestimonialsPage.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "HomeView",
  components: {
    Sliderview,
    HeaderContent,
    FeaturesPage,
    HeaderWithBg,
    HeaderWithBgRight,
    TestimonialsPage,
    BackGround,
  },
  data() {
    return {
      sliderItems: [
        {
          bg: "home/home_header.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
      backgroundItems: [
        {
          bg: "home/bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
    };
  },
};
</script>

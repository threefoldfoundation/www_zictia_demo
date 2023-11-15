<template>
  <Sliderview :items="sliderItems" />
  <HeaderContent />
  <HeaderWithBg />
  <FeaturesPage />
  <HeaderWithBgRight />
</template>

<script>
import Sliderview from "@/components/Sliderview.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import FeaturesPage from "@/components/FeaturesPage.vue";
import HeaderWithBg from "@/components/HeaderWithBg.vue";
import HeaderWithBgRight from "@/components/HeaderWithBgRight.vue";
export default {
  name: "HomeView",
  components: {
    Sliderview,
    HeaderContent,
    FeaturesPage,
    HeaderWithBg,
    HeaderWithBgRight,
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
    };
  },
};
</script>

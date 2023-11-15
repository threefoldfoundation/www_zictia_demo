<template>
  <Sliderview :items="sliderItems" />
  <HeaderContent />
  <HeaderWithBg />
  <FeaturesPage />
</template>

<script>
import Sliderview from "@/components/Sliderview.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import FeaturesPage from "@/components/FeaturesPage.vue";
import HeaderWithBg from "@/components/HeaderWithBg.vue";
export default {
  name: "HomeView",
  components: {
    Sliderview,
    HeaderContent,
    FeaturesPage,
    HeaderWithBg,
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

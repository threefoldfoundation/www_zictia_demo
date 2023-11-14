<template>
  <Sliderview :items="sliderItems" />
</template>

<script>
import Sliderview from "@/components/Sliderview.vue";
export default {
  name: "HomeView",
  components: {
    Sliderview,
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

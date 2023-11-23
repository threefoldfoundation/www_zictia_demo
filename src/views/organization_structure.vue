<template>
  <HeaderSectionRight :items="HeaderView" />
  <HeaderContent :headerContents="headerContentItems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import HeaderSectionRight from "@/components/HeaderSectionRight.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    HeaderSectionRight,
    HeaderContent,
    BackGround,
  },

  data() {
    return {
      HeaderView: [
        {
          bg: "home/management_header.jpg",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Delve into the expertise behind ZICTIA's success",
          content:
            "Explore our dedicated management team and organizational members shaping the future of ICT infrastructure in Zanzibar.",
        },
      ],
      backgroundItems: [
        {
          bg: "home/mang_bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
      headerContentItems: [
        {
          photo: require("../assets/imgs/home/management_our.jpg"),
          title: "Our Management",
          content:
            "ZICTIA's commitment to effective management and leadership plays a crucial role in delivering quality ICT infrastructure and services to the public and private sectors in Zanzibar. Explore our organizational structure in the following section to gain insights into how we are structured to achieve our objectives.",
        },
      ],
    };
  },
};
</script>

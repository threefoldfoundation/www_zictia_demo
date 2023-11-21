<template>
  <Sliderview :items="sliderItems" />
  <HeaderContent :headerContents="headerContentItems" />
  <HeaderWithBg  :headerContentBlues="headerContentBlueItems" />
  <FeaturesPage />
  <HeaderWithBgRight :headerWithBgRights="headerWithBgRightItems" />
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
      backgroundItems: [
        {
          bg: "home/bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
      headerContentItems: [
        {
          photo: require("../assets/imgs/home/innovation.jpg"),
          title: "Where Innovation meets Infrastructure",
          content:
            "Learn more about our mission to empower Zanzibar through cutting-edge ICT solutions and our vision for a digitally connected future. Explore our About page to dive deeper into our journey and commitments.",
          button: "About ZICTIA",
        },
      ],
      headerContentBlueItems: [
        {
          photo: require("../assets/imgs/home/data_center.png"),
          title: "ZICTIA’s Reliable, Secure and Innovative Data Center",
          content:
            "Our Data Center is meticulously designed to provide secure, scalable, and efficient data storage and management solutions; your trusted partner in safeguarding your data, ensuring business continuity, and supporting your digital ambitions. ",
            content2:
            "Explore our cutting-edge infrastructure and discover how we're shaping the future of data management in Zanzibar",
          button: "Discover",
        },
      ],
      headerWithBgRightItems: [
        {
          photo: require("../assets/imgs/home/innovation.jpg"),
          title: "News & Announcements",
          content:
            "Stay informed and connected with the latest developments at ZICTIA by visiting our News and Announcements page. Discover timely updates, exciting initiatives, and important announcements that shape the landscape of ICT infrastructure and services in Zanzibar.",
          button: "About ZICTIA",
        },
      ],
    };
  },
};
</script>

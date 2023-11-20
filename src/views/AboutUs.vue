<template>
  <AboutHeader :items="HeaderView" />
  <CallToaction :calltoactions="CallToactionitems" />
  <HeaderContent :headerContents="headerContentItems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import AboutHeader from "@/components/AboutHeader.vue";
import CallToaction from "@/components/CallToaction.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    AboutHeader,
    CallToaction,
    HeaderContent,
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
      headerContentItems: [
        {
          photo: require("../assets/imgs/home/about_support.jpg"),
          title: "Supporting You Around the Clock",
          content:
            "At ZICTIA, our dedicated team of technical experts is at your service 24/7, offering proactive support and solutions whenever you need them. We're not just about technology; we also focus on educating the public about the significance of ICT infrastructure and the proper utilization of our services. Together, we're building a digital-savvy Zanzibar.",
        },
      ],
    };
  },
};
</script>

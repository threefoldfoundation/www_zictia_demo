<template>
  <AboutHeader :items="HeaderView" />
  <CallToaction :calltoactions="CallToactionitems" />
  <HeaderWithBgRight :headerWithBgRights="headerWithBgRightItems" />
  <HeaderContent :headerContents="headerContentItems" />
  <HeaderWithBg :headerContentBlues="headerContentBlueItems" />
  <FeaturesPageCenter :Features="FeaturesItems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import AboutHeader from "@/components/AboutHeader.vue";
import CallToaction from "@/components/CallToaction.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import HeaderWithBg from "@/components/HeaderWithBg.vue";
import HeaderWithBgRight from "@/components/HeaderWithBgRight.vue";
import FeaturesPageCenter from "@/components/FeaturesPageCenter.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    AboutHeader,
    CallToaction,
    FeaturesPageCenter,
    HeaderContent,
    HeaderWithBg,
    BackGround,
    HeaderWithBgRight,
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
      headerContentBlueItems: [
        {
          photo: require("../assets/imgs/home/about_data.jpg"),
          title: "Your Data's Safe Haven",
          content:
            "Explore our secure and fully operational Data Centre, your dependable data backup solution. Whether you're a public institution or a private entity, we offer a safe haven for your data, particularly for disaster recovery purposes. By partnering with us, you contribute to advancing Information and Communication Technology in our nation, where technology thrives with increased usage. ",
          content2: "",
          button: "",
        },
      ],
      headerWithBgRightItems: [
        {
          photo: require("../assets/imgs/home/about_zictia.jpg"),
          title: "Message from ZICTIA’s Executive Director",
          content:
            "Welcome to the Zanzibar ICT Infrastructure Agency (ZICTIA). Established on December 4, 2018, through Legal Notice No. 119 of 2018, ZICTIA is a government agency tasked with managing  Zanzibar's National Fiber backbone and Data Centre.",
          button: "",
        },
      ],
      FeaturesItems: [
        {
          title: "OBJECTIVE",
          photo: require("../assets/imgs/home/objective.png"),
          content:
            "To establish a Point of Presence in all country's administrative districts and facilitate the implementation of e-government initiative.",
        },
        {
          title: "MISSION",
          photo: require("../assets/imgs/home/mission.png"),
          content:
            "To ensure institutions are connected to the IT infrastructure to facilitate the common systems that will promote ease access of service.",
        },
        {
          title: "VISION",
          photo: require("../assets/imgs/home/vision.png"),
          content:
            "To facilitate ICT infrastructure that help the Government to easy access and collect revenue to develop social and economic activity.",
        },
      ],
    };
  },
};
</script>

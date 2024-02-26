<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <HeaderWithBgRight :headerWithBgRights="headerWithBgRightItems" />
  <CallToaction :calltoactions="CallToactionitems" />
  <HeaderWithBg :headerContentBlues="headerContentBlueItems" />
  <HeaderContent :headerContents="headerContentItems" />
  <FeaturesPageCenter :Features="FeaturesItems" />
  <FeaturesLogo :Featureslogos="FeatureslogosItems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import CallToaction from "@/components/CallToaction.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import HeaderWithBg from "@/components/HeaderWithBg.vue";
import HeaderWithBgRight from "@/components/HeaderWithBgRight.vue";
import FeaturesPageCenter from "@/components/FeaturesPageCenter.vue";
import FeaturesLogo from "@/components/FeaturesLogo.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "AboutUs",
  components: {
    SmallBanner,
    HeaderSection,
    CallToaction,
    FeaturesPageCenter,
    HeaderContent,
    HeaderWithBg,
    BackGround,
    HeaderWithBgRight,
    FeaturesLogo,
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
      backgroundItems: {
        bg: "home/about_bottom.png",
        logo: "logo",
        title: "title",
        content: "content",
      },

      CallToactionitems: [
        {
          title: "About ZICTIA",
          content:
            "Zanzibar Communication Corporation (ZICTIA) is a government entity, officially established on July 23rd, 2023, in accordance with Act No. 4 of 2023. Our core focus revolves around the management of the Strategic ICT Infrastructure, encompassing the Zanzibar National Fiber Backbone and Data Centre. ZICTIA holds the pivotal role of providing ICT services, emphasizing accessibility, sustainability, security, and convergence for the public.",
          content2: "",
        },
      ],
      headerContentItems: [
        {
          photo: require("../assets/imgs/home/about_data.jpg"),

          title: "Your Data's Safe Haven",
          content:
            "For both public and private institutions, we present a secure and fully operational Data Centre, serving as a dependable backup for data storage. This facility assumes a critical role in disaster recovery scenarios and provides essential support to institutions facing challenges in securing their data locally.",
          content2:
            "Through these strategic initiatives, ZICTIA strives to make significant contributions to the advancement of ICT in the country. We firmly believe that technology thrives with increased usage, and our ultimate goal is to contribute to the development of a nation boasting robust ICT capabilities, thereby fostering growth and innovation.",
          button: "",
        },
      ],
      headerContentBlueItems: [
        {
          photo: require("../assets/imgs/home/about_support.jpg"),

          title: "Supporting You Around the Clock",
          content:
            "With a dedicated team of technical experts available around the clock, we ensure proactive support to address any potential issues promptly. ZICTIA is deeply committed to public education, actively raising awareness about the crucial significance of ICT Infrastructure and advocating for responsible usage of the services we provide.",
        },
      ],
      headerWithBgRightItems: [
        {
          photo: require("../assets/imgs/home/about_zictia.jpg"),
          title: "Message from ZICTIA’s Executive Director",
          content:
            "I trust this message finds you well. As the Director General of Zanzibar Communication Corporation (ZICTIA), I am honoured and privileged to guide a team that is wholeheartedly committed to shaping...",
          button: "Read More",
          link: "/manager",
        },
      ],
      FeaturesItems: [
        {
          title: "OBJECTIVE",
          photo: require("../assets/imgs/home/objective.png"),
          content:
            "Provide affordable, sustainable, secure and convergent ICT infrastructure services delivery to the public, Improve and maintain the deployment of ICT Infrastructure to economic development in Zanzibar and Enhance and improve the contribution of ICT infrastructure to economic development in Zanzibar.",
        },
        {
          title: "MISSION",
          photo: require("../assets/imgs/home/mission.png"),
          content:
            "Fostering Connectivity Excellence: By linking public and private institutions to the national fiber backbone, accelerating digitalization, enabling seamless e-Government and e-Commerce services. Elevating service delivery to citizens and driving developmental strides.",
        },
        {
          title: "VISION",
          photo: require("../assets/imgs/home/vision.png"),
          content:
            "Elevating Zanzibar’s Future: Investing in Cutting-Edge ICT Infrastructure for unmatched digital transformation, catalyzing social and economic progress.",
        },
      ],
      FeatureslogosItems: [
        {
          title: "Ahmed Abdulkadir",
          title2: "ICT Officer at ZATICO",
          photo: require("../assets/imgs/home/Ellipse1.png"),
          content:
            "“Zictia is attentive, personable and professional. The team provided great support for my company's needs.”",
        },
        {
          title: "Yahya Ali",
          title2: " ICT Officer at OR-TMSMIM",
          photo: require("../assets/imgs/home/Ellipse2.png"),
          content:
            "“The team is always available to answer any questions. ZICTIA is very knowledgeable about the services they provide.”",
        },
        {
          title: "Ahmed Abdulkadir",
          title2: "ICT Officer at ZATICO",
          photo: require("../assets/imgs/home/Ellipse1.png"),
          content:
            "“Zictia is attentive, personable and professional. The team provided great support for my company's needs.”",
        },
      ],
    };
  },
};
</script>

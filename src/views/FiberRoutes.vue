<template>
  <SmallBanner />
  <HeaderSectionCenter :items="HeaderViewCenter" />
  <CallToactionBlue :calltoactionblues="CallToactionBlueitems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSectionCenter from "@/components/HeaderSectionCenter.vue";
import CallToactionBlue from "@/components/CallToactionBlue.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "FiberRoutes",
  components: {
    SmallBanner,
    HeaderSectionCenter,
    CallToactionBlue,
    BackGround,
  },

  data() {
    return {
      HeaderViewCenter: [
        {
          bg: "home/fiberRoutes_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Uncover the backbone of ZICTIA's transformative impact",
          content:
            "Explore our robust infrastructure page to understand how we're laying the groundwork for a digitally advanced Zanzibar",
          blue_title: "",
        },
      ],
      CallToactionBlueitems: [
        {
          photo: require("../assets/imgs/home/pemba.png"),
          title: "Fiber Routes Across Unguja and Pemba Island",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507805.9206742061!2d39.051363792215874!3d-6.099187870905901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d29602a2909e5%3A0xa035af4aad9b7d5f!2sUnguja!5e0!3m2!1sen!2seg!4v1701188843224!5m2!1sen!2seg",
          content:
            "ZICTIA is at the forefront of revolutionizing connectivity across the beautiful islands of Zanzibar. Our state-of-the-art Fiber Routes Network spans the archipelago, connecting Unguja and Pemba Islands with an intricate web of high-capacity, resilient fiber optic infrastructure. With a focus on cutting-edge technology, robust maintenance, and wide-reaching connectivity, we're redefining how Zanzibar stays digitally connected.",
          title2: "INSERT LIVE MAP HERE",
          content2:
            "Across Unguja and Pemba Island, our Fiber Routes Network comprises a main route, which serves as the backbone of digital connectivity, linking key locations and urban centers to ensure uninterrupted data transmission, benefiting businesses, institutions, and residents alike.",
          content3:
            "In addition, we've expanded our network with a new fiber route, extending connectivity to previously underserved areas on Unguja Island, enabling more communities to access high-speed internet and advanced services. Complementing these routes are strategically placed Points of Presence (PoPs), creating convenient access points to our Fiber Routes Network, ensuring that cutting-edge technology is always within reach.",
          content4:
            "ZICTIA's Fiber Routes Network is not just about connectivity; it's about transforming lives, powering businesses, and advancing Zanzibar's technological landscape. With a commitment to infrastructure excellence and innovative solutions, we're proud to lead the way in creating a connected Zanzibar.",
        },
      ],
      backgroundItems: [
        {
          bg: "home/fiberroutes_bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
    };
  },
};
</script>

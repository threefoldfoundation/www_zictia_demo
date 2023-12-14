<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <CallToactionBlue :calltoactionblues="ctaContent" />
  <FAQAccordion :faqs="faqs" />
  <ContactUs />
</template>
<script>
import SmallBanner from "@/components/SmallBanner.vue";
import CallToactionBlue from "@/components/CallToactionBlue.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FAQAccordion from "@/components/FAQAccordion.vue";
import ContactUs from "@/components/ContactUs.vue";
export default {
  name: "FAQ",
  components: {
    SmallBanner,
    CallToactionBlue,
    HeaderSection,
    FAQAccordion,
    ContactUs,
  },
  data() {
    return {
      HeaderView: [
        {
          bg: "home/news_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Latest News and Innovations",
          content:
            "Stay at the forefront of technological advancements in Zanzibar by delving into ZICTIA's latest news",
        },
      ],
      ctaContent: [
        {
          content:
            "ZICTIA is at the forefront of revolutionizing connectivity across the beautiful islands of Zanzibar. Our state-of-the-art Fiber Routes Network spans the archipelago, connecting Unguja and Pemba Islands with an intricate web of high-capacity, resilient fiber optic infrastructure. With a focus on cutting-edge technology, robust maintenance, and wide-reaching connectivity, we're redefining how Zanzibar stays digitally connected.",
          button: "Contact Us",
          buttonUrl: "/",
        },
      ],
      faqs: [
        {
          question: "What is ZICTIA?",
          answer:
            "Is an Agency responsible for managing Zanzibar National Fiber Backbone and Data Center. The Infrastructure will enhance usage of ICT applications for sustainable socio-econimic development, including implimentation of e-health, e-tax, e-learning and much more locally and globally.",
        },
        {
          question: "What services are offered by ZICTIA?",
          answer: [
            {
              title: "VPN Services",
              hash: "#vpn",
            },
            {
              title: "IP - MPLS",
              hash: "#ip",
            },
            {
              title: "Co-Location",
              hash: "#location",
            },
            {
              title: "Virtual Machine",
              hash: "#vm",
            },
            {
              title: "Capacity Lease",
              hash: "#capacity",
            },
            {
              title: "Internet Services",
              hash: "#internet",
            },
            {
              title: "Web Hosting",
              url: "/faq",
            },
          ],
        },
        {
          question: "How many organizations have been connected to the fiber?",
          answer:
            "Currently, There are about 118 organizations on the fiber network.",
        },
        {
          question: "How can I apply  for ZICTIA services?",
          answer:
            "By visiting the ZICTIA office at Mazizini, You will be provided with documents explaining about the full services provided. A team of technical experts will advice you based on your requirements.",
        },
        {
          question: "What is the difference between ZICTIA and TCRA?",
          answer: "",
        },
        {
          question: "New Question?",
          answer: "Not available",
        },
      ],
    };
  },
};
</script>

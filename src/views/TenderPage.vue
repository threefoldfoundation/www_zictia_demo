<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <ListContent :tenders="tenders" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import ListContent from "@/components/ListContent.vue";
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import BackGround from "@/components/BackGround.vue";

export default {
  name: "TenderPage",
  components: {
    SmallBanner,
    HeaderSection,
    ListContent,
    BackGround,
  },

  data() {
    return {
      HeaderView: [
        {
          bg: "home/docs_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Documentation Hub",
          content:
            "Explore the comprehensive documentation provided by ZICTIA to access a treasure trove of useful information.",
        },
      ],
      backgroundItems: [
        {
          bg: "home/docs_bottom.png",
          logo: "logo",
          title: "title",
          content: "content",
        },
      ],
      tenders: [
        {
          name: "PUBLIC NOTICE.",
          url: "./files/TENDER/TENDER.docx",
        },
        { name: "SUPPLY OF FIBER EQUIPMENT.", url: "#" },
        {
          name:
            "SUPPLY OF WOODEN POLES AND ITS TENSION HOOKS IN A FRAMEWORK CONTRACT.",
          url: "./files/TENDER/Supply of Wooden Poles.pdf",
        },
        {
          name:
            "GENERAL PROCUREMENT NOTICE [GPN] FOR GOODS, WORKS AND NONCONSULTANCY SERVICES FOR THE FINANCIAL YEAR 2021/2022",
          url: "./files/TENDER/GPN.pdf",
        },
      ],
    };
  },
};
</script>

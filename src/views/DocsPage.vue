<template>
  <SmallBanner />
  <HeaderSectionCenter :items="HeaderViewCenter" />
  <ListContent :docs="$data[$props.docs]" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import ListContent from "@/components/ListContent.vue";
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSectionCenter from "@/components/HeaderSectionCenter.vue";
import BackGround from "@/components/BackGround.vue";

export default {
  name: "TenderPage",
  components: {
    SmallBanner,
    HeaderSectionCenter,
    ListContent,
    BackGround,
  },
  props: ["docs"],
  data() {
    return {
      HeaderViewCenter: [
        {
          bg: "home/docs_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Documentation Hub",
          content:
            "Explore the comprehensive documentation provided by ZICTIA to access a treasure trove of useful information.",
          blue_title: "",
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
      legal_tenders: [
        {
          name: "PUBLIC NOTICE.",
          url: "./files/TENDER/TENDER.docx",
        },
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
      legal_acts: [
        {
          name:
            "AN ACT TO ESTABLISH THE ZANZIBAR INFORMATION COMMUNICATION TECHNOLOGY INFRUSTRUCTURE AGENCY AND TO MAKE PROVISIONS FOR PROVIDING ICT INFRUSTRUCTURE SERVICES AND OTHER MATTERS CONNECTED THEREWITH.",
          url: "./files/LEGAL_ACTS/LEGAL_ACT.pdf",
        },
      ],
      brochures: [
        {
          name: "2021 BRONCHURE",
          url: "./files/BROCHURES/2021.pdf",
        },
        {
          name: "2019 BRONCHURE",
          url: "./files/BROCHURES/2019BROCHURES.pdf",
        },
      ],
      request_Form: [
        {
          name: "ZICTIA SITE REQUEST FORM",
          url: "./files/FORM/ZICTIASITEREQUESTFORM.pdf",
        },
      ],
      corporate_Acts: [
        {
          name: "Corporate Acts (ENG)",
          url: "./files/CORPORATE/ZICTIA_ACT_ENG.pdf",
        },
        {
          name: "Corporate Acts (SWAHILI)",
          url: "./files/CORPORATE/ZICTIA_ACT_SWAHILI.pdf",
        },
      ],
    };
  },
};
</script>

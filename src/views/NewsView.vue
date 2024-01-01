<template>
  <div>
    <!-- SmallBanner and HeaderSection components remain clickable -->
    <SmallBanner />
    <HeaderSection :items="HeaderView" />

    <!-- NewsSec component made unclickable -->
    <NewsSec :news="news" />

    <!-- BackGround component made unclickable -->
    <BackGround :backgroundImg="backgroundItems" />
  </div>
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import BackGround from "@/components/BackGround.vue";
import NewsSec from "@/components/NewsSec.vue";
export default {
  name: "NewsView",
  components: {
    SmallBanner,
    HeaderSection,
    BackGround,
    NewsSec,
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
      backgroundItems: {
        bg: "home/news_bottom.png",
        logo: "logo",
        title: "title",
        content: "content",
      },
      news: [
        {
          isFeatured: true,
          image: require("../assets/imgs/news/moja.jpg"),
          title: "ZICTIA - SoftNet",
          description:
            "ZICTIA Management & Staff Attending the Contract signing Meeting with SoftNet for Upgrading Data Center.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/director.jpeg"),
          title: "ZICTIA - SoftNet Contract Signing",
          description:
            "ZICTIA Executive Director Eng. Shukuru A. Suleiman signing contract with SoftNet.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/data.jpg"),
          title: "Data Center Upgrade",
          description:
            "SoftNet Project Manager signing Data Center Upgrading contract with ZICTIA in the presence of other staff from SoftNet.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/softnet.png"),
          title: "Contract Signing",
          description:
            "Principal Secretary of the Ministry of Infrastructure, Communication and Transportation,ZICTIA Executive Director Eng. Shukuru A. Suleiman, together with SoftNet Chief Executive Officer Mr. Nuru Othman soon after contract signing with SoftNet.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zictia-zantel.jpeg"),
          title: "ZICTIA and ZANTEL",
          description:
            "ZICTIA and ZANTEL signs agreement contract for fiber services provision.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zictia-zantel-2.jpg"),
          title: "Zantel Contract Signing",
          description:
            "ZICTIA Executive Director Eng. Shukuru A. Suleiman, together with some of the ZICTIA staff soon after contract signing with ZANTEL.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zanlink2.jpg"),
          title: "ZICTIA - Zanlink",
          description:
            "ZICTIA signs fiber services provision contract with Zanlink in the presence of Principal secretary of the Ministry of Infrastructure, Communication and Transportation.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zanlink1.jpg"),
          title: "ZICTIA - Zanlink Signing",
          description:
            "Deputy principal secretary of the Ministry of Infrastructure, Communication and Transportation,ZICTIA Executive Director Eng. Shukuru A. Suleiman, together with ZICTIA and Zanlink staff soon after contract signing with Zanlink.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zictia-ttcl-1.jpeg"),
          title: "ZICTIA and TTCL",
          description:
            "ZICTIA and TTCL signs agreement contract for capacity provision.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zictia-ttcl-3.jpeg"),
          title: "ZICTIA and TTCL Contract Signing",
          description:
            "Contract signing witnessed by a member of ZICTIA and a member of TTCL.",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zictia-ttcl-2.jpeg"),
          title: "ZICTIA and TTCL Meeting",
          description:
            "ZICTIA Executive Director Eng. Shukuru A. Suleiman and TTCL's Director General Mr. Waziri Kindamba exchanging contracts .",
        },
        {
          isFeatured: false,
          image: require("../assets/imgs/news/zictia-ttcl-4.jpeg"),
          title: "ZICTIA and TTCL Guest of Honors",
          description:
            "Principal secretary of the Ministry of Infrastructure, Communication and Transportation, Mr. Mustafa Aboud Jumbe (left) and Principal secretary of the Ministry of Infrastructure, Communication and Transportation (Communication sector), Dr.Zainabu Chaula (right) were the guest of honors.",
        },
      ],
    };
  },
};
</script>

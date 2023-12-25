<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <NewsSec :news="news" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import BackGround from "@/components/BackGround.vue";
import NewsSec from "@/components/NewsSec.vue";
export default {
  name: "AboutUs",
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
          image:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
          title: "New trends in Tech",
          description:
            "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.",
        },
        {
          isFeatured: false,
          image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
          title: "Working with legacy stacks",
          description:
            "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.",
        },
        {
          isFeatured: false,
          image:
            "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
          title: "10 best smartphones for devs",
          description:
            "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.",
        },
        {
          isFeatured: false,
          image:
            "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
          title: "8 High performance Notebooks",
          description:
            "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.",
        },
        {
          isFeatured: false,
          image:
            "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
          title: "10 best smartphones for devs",
          description:
            "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.",
        },
        {
          isFeatured: false,
          image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
          title: "Working with legacy stacks",
          description:
            "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.",
        },
      ],
    };
  },
};
</script>

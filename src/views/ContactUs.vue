<template>
  <SmallBanner />
  <HeaderSection :items="HeaderView" />
  <ContactForm />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "ContactUs",
  components: {
    SmallBanner,
    HeaderSection,
    ContactForm,
    BackGround,
  },

  data() {
    return {
      HeaderView: [
        {
          bg: "contact_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Your gateway to responsive assistance",
          content:
            "Our dedicated support services to you as we strive to ensure your experience with our ICT solutions is as smooth as possible.",
        },
      ],
      backgroundItems: {
        bg: "contact_footer.png",
        logo: "logo",
        title: "title",
        content: "content",
      },
    };
  },
};
</script>

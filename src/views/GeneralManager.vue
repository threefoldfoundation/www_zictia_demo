<template>
  <SmallBanner />
  <MangerContent />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import MangerContent from "@/components/MangerContent.vue";

export default {
  name: "generalManager",
  components: {
    SmallBanner,
    MangerContent,
  },
};
</script>

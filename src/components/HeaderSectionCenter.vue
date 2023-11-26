<template>
  <div
    v-for="(item, i) in items"
    :key="i"
    class="item bg-cover text-white flex flex-col justify-center items-center"
    :style="{
      'background-image': 'url(' + require('../assets/imgs/' + item.bg) + ')',
    }"
  >
    <div class="text-center">
      <img :src="item.logo" class="mx-auto my-3" alt="" />

      <h1 class="text-lg md:text-4xl font-bold mb-3 md:leading-10">
        {{ item.title }}
      </h1>
      <p
        class="text-base md:text-xl md:max-w-5xl mx-auto md:leading-8"
        v-html="item.content"
      ></p>
    </div>
  </div>
  <div
    class="flex justify-center items-center bg-blue-950 text-center text-white"
  >
    <h3
      class="md:text-xl text-lg my-3 py-2 font-medium uppercase tracking-wide"
    >
      Our Comprehensive Services to Fulfill Your Digital Needs
    </h3>
  </div>
</template>

<script>
export default {
  name: "HeaderViewCenter",
  props: ["items"],
};
</script>
<style>
.item {
  height: 75vh !important;
  max-height: 100vh;
}
</style>

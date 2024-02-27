<template>
  <div v-if="backgroundImg.isBlue" class="bg-blue-950 py-4">

    <h2 class="text-2xl text-center mt-6 md:text-3xl lg:text-5xl leading-none font-bold tracking-tight text-white">
      Organization Structure
    </h2>
    <img
      :src="backgroundImg.image"
      class="relative w-full py-4 sm:my-4 lg:w-1/2 mx-auto"
      alt=""
    />
  </div>
  <div
    v-else
    :style="{
      'background-image':
        'url(' + require('../assets/imgs/' + backgroundImg.bg) + ')',
    }"
    style="
      height: 45vh;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    "
  ></div>
</template>

<script>
export default {
  name: "BackGround",
  props: ["backgroundImg"],
};
</script>

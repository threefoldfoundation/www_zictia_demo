<template>
  <div v-if="backgroundImg.isBlue" class="bg-blue-950 py-4">
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

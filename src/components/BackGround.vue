<template>
  <div v-for="(background, i) in backgroundImg" :key="i">
    <div
      :style="{
        'background-image':
          'url(' + require('../assets/imgs/' + background.bg) + ')',
      }"
      style="
        height: 45vh;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
      "
    ></div>
    <div class="bg-blue-950 h-16"></div>
  </div>
</template>

<script>
export default {
  name: "BackGround",
  props: ["backgroundImg"],
};
</script>

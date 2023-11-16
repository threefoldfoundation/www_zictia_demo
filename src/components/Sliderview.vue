<template>
  <div class="carousel">
    <div class="carousel-inner" v-for="(item, i) in items" :key="i">
      <input
        class="carousel-open"
        type="radio"
        :id="`carousel-${i + 1}`"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div
        class="carousel-item flex items-center bg-cover bg-center"
        :class="{
          'justify-end': i % 2 === 0,
          'justify-start': i % 2 !== 0,
        }"
        :style="{
          'background-image':
            'url(' + require('../assets/imgs/' + item.bg) + ')',
        }"
        style="height: 75vh;"
      >
        <div
          class="w-1/2 text-white leading-8"
          :class="{
            'ml-28': i % 2 !== 0,
          }"
        >
          <img src="../assets/imgs/home/logo_white.png" class="w-1/2" alt="" />
          <h1 class="text-4xl font-bold max-w-md mb-3 mx-6">
            {{ item.title }}
          </h1>
          <p class="text-2xl max-w-md mx-6" v-html="item.content"></p>
        </div>
      </div>
      <ol class="carousel-indicators">
        <li v-for="(item, i) in items" :key="i">
          <label :for="`carousel-${i + 1}`" class="carousel-bullet">•</label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderView",
  props: ["items"],
};
</script>

<style scoped>
.carousel {
  position: relative;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
}

.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.carousel-indicators li {
  display: inline-block;
  margin: 0 5px;
}

.carousel-bullet {
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 35px;
}

.carousel-bullet:hover {
  color: #aaaaaa;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #428bca;
}
</style>

<template>
  <div class="navigation-wrapper">
    <div ref="slider" class="">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="slide number-slide1 bg-cover"
        :style="{
          'background-image':
            'url(' + require('../assets/imgs/' + item.bg) + ')',
        }"
      >
        <div class="item-1 md:flex" :class="{ hidden: i % 2 !== 0 }">
          <div
            class="lg:w-1/2 mx-auto text-center md:text-left px-3"
            v-if="i % 2 == 0"
          >
            <img
              :src="item.logo"
              class="lg:mx-0 mx-auto w-2/3 md:w-1/2"
              alt=""
            />
            <h1
              class="text-lg md:text-4xl font-bold max-w-md mb-3 md:leading-10"
            >
              {{ item.title }}
            </h1>
            <p
              class="text-base md:text-xl max-w-sm md:leading-8"
              v-html="item.content"
            ></p>
          </div>
        </div>
        <div class="item-2 md:flex" :class="{ hidden: i % 2 == 0 }">
          <div
            class="lg:w-1/2 mx-auto text-center md:text-left px-3"
            v-if="i % 2 !== 0"
          >
            <img
              :src="item.logo"
              class="lg:mx-0 mx-auto w-2/3 md:w-1/2"
              alt=""
            />
            <h1
              class="text-lg md:text-4xl font-bold max-w-md mb-3 md:leading-10"
            >
              {{ item.title }}
            </h1>
            <p
              class="text-base md:text-xl max-w-sm md:leading-8"
              v-html="item.content"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  props: ["items"],
};
</script>

<style scoped>
[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 75vh !important;
  max-height: 100vh;
}

.item-1,
.item-2 {
  flex: 1 1 25%;
  color: #fff;
}

.navigation-wrapper {
  position: relative;
}
</style>

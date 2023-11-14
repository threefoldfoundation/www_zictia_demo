<template>
  <div class="carousel relative shadow-2xl">
    <div
      class="carousel-inner relative overflow-hidden w-full"
      v-for="(item, id) in items"
      :key="id"
    >
      <!--Slides-->
      <input
        class="carousel-open"
        type="radio"
        :id="`carousel - ${id + 1}`"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div
        class="carousel-item absolute opacity-0 bg-center bg-cover"
        :style="{
          'background-image':
            'url(' + require('../assets/imgs/' + item.bg) + ')',
        }"
        style="height: 75vh;"
      >
        <div class="flex h-full w-full text-white justify-end">
          <h1>{{ item.title }}</h1>
        </div>
      </div>

      <!-- Add additional indicators for each slide-->
      <ol class="carousel-indicators">
        <li class="inline-block mr-3">
          <label
            :for="`carousel-${id + 1}`"
            class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >•</label
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderView",
  props: ["items"],
  mounted() {
    console.log(this.items);
  },
};
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-5xl px-4 md:px-8">
      <div
        class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8"
      >
        <img
          :src="require('../../assets/imgs/news/softnet.png')"
          loading="lazy"
          :alt="name"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <h1
        class="mb-4 text-center capitalize text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6"
      >
        {{ name.replace(/_/g, " ") }}
      </h1>

      <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi
        beatae non hic exercitationem. Officiis beatae perspiciatis veniam
        suscipit fugiat itaque, eligendi illo qui unde vel dolor sed alias fuga?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  props: ["name"],
};
</script>

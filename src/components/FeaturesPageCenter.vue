<template>
  <div class="bg-blue-950 text-white md:py-24 lg:py-24 py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center lg:mx-0">
        <h2 class="text-3xl md:text-3xl lg:text-5xl font-bold tracking-tight">
          Envision a Digitally Inclusive Zanzibar
        </h2>
        <p
          class="mt-6 text-xl max-w-none mx-auto lg:max-w-4xl font-medium leading-8"
        >
          Together We Could Expand ICT Reach, Strengthen Our Governance, and
          Foster Socioeconomic Growth of Zanzibar
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-8 grid max-w-2xl text-center grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- Capacity lease -->
        <li class="md:my-3 my-2" v-for="(Feature, i) in Features" :key="i">
          <h3
            class="text-2xl md:text-3xl my-4 lg:text-3xl leading-none font-semibold tracking-tight"
          >
            {{ Feature.title }}
          </h3>
          <img
            :src="Feature.photo"
            class="w-3/4 mx-auto object-cover my-2"
            alt=""
          />
          <p
            class="text-base lg:text-lg font-medium leading-8 py-4"
            v-html="Feature.content"
          ></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesPageCenter",
  props: ["Features"],
};
</script>

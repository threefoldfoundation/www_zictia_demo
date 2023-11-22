<template>
  <div class="bg-blue-950 md:py-24 lg:py-24 py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center lg:mx-0">
        <h2
          class="text-3xl mb-4 md:text-3xl lg:text-5xl font-bold tracking-tigh text-white"
        >
          What Our Clients Say
        </h2>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl text-center grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- Capacity lease -->
        <li
          class="md:my-3 my-4"
          v-for="(Featurelogo, i) in Featureslogos"
          :key="i"
        >
          <div class="bg-white relative rounded-md p-4">
            <div class="absolute -top-1/3 bottom-0 left-0 right-0">
              <img
                :src="Featurelogo.photo"
                class="w-24 mx-auto object-cover my-2 rounded-full"
                alt=""
              />
            </div>
            <p
              class="text-base lg:text-lg font-medium leading-8 pt-8 py-4 text-blue-800"
              v-html="Featurelogo.content"
            ></p>
            <h3 class="text-lg font-semibold tracking-tight text-blue-800">
              {{ Featurelogo.title }}
            </h3>
            <h3 class="text-lg font-medium tracking-tight text-blue-800">
              {{ Featurelogo.title2 }}
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesLogo",
  props: ["Featureslogos"],
};
</script>

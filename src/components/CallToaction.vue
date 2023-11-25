<template>
  <div
    v-for="(calltoactio, i) in calltoactions"
    :key="i"
    class="text-center container mx-auto my-8 md:my-24 lg:max-w-6xl"
  >
    <h2
      class="text-3xl md:text-3xl lg:text-5xl mb-3 leading-none font-bold tracking-tight text-blue-800"
    >
      {{ calltoactio.title }}
    </h2>
    <p
      class="my-3 text-base px-3 lg:text-lg font-medium leading-6 lg:leading-8 text-blue-800"
      v-html="calltoactio.content"
    ></p>
    <p
      class="my-3 text-base mx-3 lg:text-lg font-medium leading-6 lg:leading-8 text-blue-800"
      v-html="calltoactio.content2"
    ></p>
  </div>
</template>

<script>
export default {
  name: "CallToaction",
  props: ["calltoactions"],
};
</script>

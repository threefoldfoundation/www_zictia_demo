<template>
  <div class="px-6 container lg:mx-auto py-10 mx-4 lg:py-32 lg:px-8">
    <div class="">
      <h2
      class="text-2xl md:text-3xl lg:text-5xl mb-3 leading-none font-bold tracking-tight text-blue-800 uppercase"
      >
        {{ $route.params.docs.replace(/_/g, " ") }}
      </h2>

      <ul class="list-disc my-4">
        <li
          v-for="doc in docs"
          :key="doc.name"
          class="my-2 font-medium text-base lg:text-lg text-blue-800"
        >
          <a :href="doc.url" target="_blank">{{ doc.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContent",
  props: ["docs"],
};
</script>

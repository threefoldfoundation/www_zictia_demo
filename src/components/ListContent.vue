<template>
  <div class="px-6 container lg:mx-auto py-10 mx-4 lg:py-32 lg:px-8">
    <div class="">
      <h2
        class="my-1 text-2xl leading-none uppercase font-bold tracking-tight text-blue-800"
      >
        {{ $route.params.docs.replace(/_/g, " ") }}
      </h2>

      <ul class="list-disc my-4">
        <li
          v-for="doc in docs"
          :key="doc.name"
          class="font-semibold text-blue-800"
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

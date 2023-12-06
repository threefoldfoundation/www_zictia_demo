<template>
  <div class="px-6 container lg:mx-auto py-10 mx-4 lg:py-32 lg:px-8">
    <div class="">
      <h2
        class="text-2xl my-1 md:text-3xl lg:text-5xl leading-none font-bold tracking-tight text-blue-800"
      >
        TENDER
      </h2>
      <p class="text-xl leading-8 text-gray-800">Available tender</p>
      <ul class="list-disc my-4">
        <li
          v-for="tender in tenders"
          :key="tender.name"
          class="font-semibold text-blue-800"
        >
          <a :href="tender.url" target="_blank">{{ tender.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContent",
  props: ["tenders"],
};
</script>

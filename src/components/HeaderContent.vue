<template>
  <section>
    <div
      v-for="(headerContent, i) in headerContents"
      :key="i"
      class="py-8 md:py-20"
    >
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-1/2 lg:px-4">
            <div class="relative mx-auto md:mr-0 max-w-max">
              <img
                :src="headerContent.photo"
                class="relative w-full py-4 sm:my-4 lg:w-3/4 mx-auto"
                alt=""
              />
            </div>
          </div>
          <div
            class="w-full text-center md:text-left md:w-1/2 md:mb-0 sm:px-3 px-8 md:px-16"
          >
            <h2
              class="text-2xl my-3 md:text-3xl lg:text-5xl leading-none font-bold tracking-tight text-blue-800"
            >
              {{ headerContent.title }}
            </h2>
            <p
              class="my-3 text-base lg:text-xl mx-auto font-medium leading-6 lg:leading-8 text-blue-800"
              v-html="headerContent.content"
            ></p>
            <div class="flex flex-wrap">
              <div class="w-full md:w-auto py-1 md:py-0 md:mr-4">
                <button
                  v-if="headerContent.button"
                  type="button"
                  class="mt-2 rounded-md bg-blue-600 px-4 py-1.5 lg:text-lg text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {{ headerContent.button }}
                </button>
              </div>
              <div class="w-full md:w-auto py-1 md:py-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderContent",
  props: ["headerContents"],
};
</script>

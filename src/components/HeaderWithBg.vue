<template>
  <section class="bg-blue-950">
    <div
      v-for="(headerContentBlue, i) in headerContentBlues"
      :key="i"
      class="md:py-20"
      v-bind:id="`${headerContentBlue.id}`"
    >
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-1/2 px-4">
            <div class="relative mx-auto md:mr-0 max-w-max">
              <img
                :src="headerContentBlue.photo"
                class="relative w-full py-4 sm:my-4 lg:w-3/4 mx-auto"
                alt=""
              />
            </div>
          </div>
          <div
            class="w-full md:w-1/2 mb-16 md:mb-0 text-center md:text-left sm:px-3 px-8 md:px-16 py-3 lg:order-first"
          >
            <h2
              class="text-2xl md:text-3xl my-3 lg:text-5xl leading-none font-semibold tracking-tight text-white"
            >
              {{ headerContentBlue.title }}
            </h2>
            <p
              class="mt-3 text-base lg:text-lg mx-auto font-normal leading-6 lg:leading-8 text-white"
              v-html="headerContentBlue.content"
            ></p>
            <br />
            <p
              class="mb-3 text-base lg:text-lg mx-auto font-normal leading-6 lg:leading-8 text-white"
              v-html="headerContentBlue.content2"
            ></p>
            <div class="flex flex-wrap">
              <div class="w-full md:w-auto py-1 md:py-0 md:mr-4">
                <button
                  v-if="headerContentBlue.button"
                  type="button"
                  class="mt-2 rounded-md bg-blue-600 px-4 py-1.5 lg:text-lg text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {{ headerContentBlue.button }}
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
  name: "HeaderWithBg",
  props: ["headerContentBlues"],
};
</script>

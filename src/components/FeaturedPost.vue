<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div
        v-for="post in posts"
        :key="post.title"
        class="flex flex-col overflow-hidden rounded-lg sm:flex-row md:h-80"
      >
        <!-- image - start -->
        <div
          class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5"
        >
          <img
            :src="post.image"
            loading="lazy"
            :alt="post.title"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <!-- image - end -->

        <!-- content - start -->
        <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
          <h2
            class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl"
          >
            {{ post.title }}
          </h2>

          <p class="mb-8 max-w-md text-gray-600">
            {{ post.description }}
          </p>

          <div class="mt-auto">
            <router-link
              :to="`/softnet_news/${post.title
                .replace(/ /g, '_')
                .toLowerCase()}/`"
              class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-400 focus-visible:ring active:bg-indigo-400 md:text-base"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- content - end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedPosts",
  props: ["posts"],
};
</script>

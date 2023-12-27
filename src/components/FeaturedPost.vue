<template>
  <div class="py-3 sm:py-8 lg:py-4 border border-blue-900 mb-8 rounded-lg">
    <div class="mx-auto max-w-screen-2xl p-4">
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
          <h3 class="text-base not-italic leading-6 text-gray-600">
            FEATURED POST
          </h3>
          <router-link
            :to="`/news/${post.title.replace(/[ -]/g, '_').toLowerCase()}/`"
            class="mb-4 text-3xl font-bold text-gray-800 md:text-2xl lg:text-4xl"
            >{{ post.title }}</router-link
          >

          <p class="mb-8 max-w-md text-gray-600">
            {{ post.description }}
          </p>
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

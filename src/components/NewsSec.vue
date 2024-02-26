<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <FeaturedPost v-if="featuredPosts.length > 0" :posts="featuredPosts" />
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <!-- article - start -->
        <div
          v-for="n in news"
          :key="n.title"
          class="flex flex-col overflow-hidden rounded-lg border bg-white"
        >
          <router-link
            :to="`/news/${n.title.replace(/[ -]/g, '_').toLowerCase()}/`"
            class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
          >
            <img
              :src="n.image"
              loading="lazy"
              :alt="n.title"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </router-link>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <router-link
                :to="`/news/${n.title.replace(/[ -]/g, '_').toLowerCase()}/`"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >{{ n.title }}</router-link
              >
            </h2>

            <p class="mb-8 text-gray-500">
              {{ n.description }}
            </p>
          </div>
        </div>
        <!-- article - end -->
      </div>
    </div>
  </div>
</template>

<script>
// import FeaturedPost from "./FeaturedPost.vue";
export default {
  name: "NewsSec",
  components: {
    // FeaturedPost,
  },
  props: ["news"],
  computed: {
    featuredPosts() {
      return this.news.filter((post) => post.isFeatured);
    },
  },
};
</script>

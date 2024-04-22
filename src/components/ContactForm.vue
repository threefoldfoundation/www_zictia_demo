<template>
  <div class="bg-blue-950 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2
          class="mb-4 text-white text-center text-2xl md:text-3xl lg:text-4xl leading-none font-bold tracking-tight"
        >
          Send us an Inquiry
        </h2>
      </div>
      <!-- text - end -->

      <!-- form - start -->
      <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        <div>
          <input
            placeholder="Your Name"
            class="w-full rounded-xl bg-blue-850 px-3 py-2 placeholder:text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <input
            placeholder="E-mail"
            class="w-full rounded-xl bg-blue-850 px-3 py-2 placeholder:text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <input
            placeholder="Phone Number"
            class="w-full rounded-xl bg-blue-850 px-3 py-2 placeholder:text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <input
            placeholder="Subject"
            class="w-full rounded-xl bg-blue-850 px-3 py-2 placeholder:text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        <div class="sm:col-span-2">
          <textarea
            placeholder="Your Message"
            class="h-44 w-full rounded-xl bg-blue-850 px-3 py-2 placeholder:text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
          ></textarea>
        </div>

        <div class="flex items-center justify-center sm:col-span-2">
          <a
            class="mt-2 rounded-md bg-blue-600 px-4 py-1.5 lg:text-lg text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="mailto:info@zictia.go.tz"
          >
            Contact Us
          </a>
        </div>
      </form>
      <!-- form - end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.bg-blue-850 {
  background-color: #2044aa;
}
</style>

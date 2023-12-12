<template>
  <div class="bg-blue-950 py-8 md:py-24">
    <div
      v-for="(calltoactionblue, i) in calltoactionblues"
      :key="i"
      class="text-white text-center container mx-auto lg:max-w-6xl"
    >
      <div class="pb-4">
        <h2
          v-if="calltoactionblue.title"
          class="text-2xl md:text-3xl lg:text-4xl my-4 leading-none font-bold tracking-tight"
        >
          {{ calltoactionblue.title }}
        </h2>

        <p
          v-if="calltoactionblue.content"
          class="mb-5 text-base mx-3 lg:text-lg font-medium leading-6 lg:leading-8"
          v-html="calltoactionblue.content"
        ></p>
      </div>

      <a
        v-if="calltoactionblue.button"
        class="mt-2 rounded-md bg-blue-600 px-4 py-1.5 lg:text-lg text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        :href="calltoactionblue.buttonUrl"
      >
        {{ calltoactionblue.button }}
      </a>

      <p
        v-if="calltoactionblue.content2"
        class="md:mb-12 mb-6 text-base mx-3 lg:text-lg font-medium leading-6 lg:leading-8"
        v-html="calltoactionblue.content2"
      ></p>

      <iframe
        v-if="calltoactionblue.iframe"
        class="my-6 md:my-8"
        :src="calltoactionblue.iframe"
        width="100%"
        height="450"
        style="border: 0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <!-- <iframe
        class="my-6 md:my-8"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38466.66579039967!2d39.210295!3d-6.199225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cdba0f57fac05%3A0xe6183b8532a857b5!2sZanzibar%20ICT%20Infrastructure%20Agency!5e1!3m2!1sen!2sus!4v1701179641781!5m2!1sen!2sus"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> -->
      <p
        v-if="calltoactionblue.content3"
        class="my-3 text-base px-3 lg:text-lg font-medium leading-6 lg:leading-8"
        v-html="calltoactionblue.content3"
      ></p>

      <br />
      <br />
      <br />

      <!-- <iframe
        class="my-6 md:my-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302428.2257777368!2d39.59916800818977!3d-5.166842091024374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1842139f3f03aea3%3A0x616d9a539f11de85!2sPemba%20Island!5e0!3m2!1sen!2seg!4v1701188356646!5m2!1sen!2seg"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> -->

      <img
        v-if="calltoactionblue.photo"
        :src="calltoactionblue.photo"
        class="relative w-full py-4 sm:my-4 mx-auto"
        alt=""
      />

      <p
        v-if="calltoactionblue.content4"
        class="my-3 text-base mx-3 lg:text-lg font-medium leading-6 lg:leading-8"
        v-html="calltoactionblue.content4"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallToactionBlue",
  props: ["calltoactionblues"],
};
</script>

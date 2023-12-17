<template>
  <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl my-12 md:text-3xl lg:text-5xl leading-none font-bold tracking-tight text-blue-800">
        FAQ
      </h2>
    </div>

    <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto">
      <div
        class="py-5 rounded-lg bg-blue-950 p-5 text-white"
        v-for="(faq, id) in faqs"
        :key="id"
      >
        <details class="group">
          <summary
            class="flex justify-between items-center font-medium cursor-pointer list-none"
          >
            <span>{{ faq.question }}</span>
            <span class="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p
            v-if="(faq.answer instanceof Array)"
            class="text-white mt-3 group-open:animate-fadeIn"
          >
          <ul class="py-2 ">
            <li class="py-2" v-for="answer in faq.answer" :key="answer.title">
              <router-link
                v-if="answer.hash"
                :to="{ name: 'OurServices', hash: `${answer.hash}` }"
                >&#11157; {{ answer.title }}</router-link
              >
              <router-link v-else :to="answer.url"
                >&#11157; {{ answer.title }}</router-link
              >
            </li>
          </ul>
          </p>
          <p v-else
          class="py-2 text-white mt-3 group-open:animate-fadeIn"
            v-html="faq.answer.replaceAll(/\. /g, '. <br /><br />')"
          ></p>       
         </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQAccordion",
  props: ["faqs"],
};
</script>

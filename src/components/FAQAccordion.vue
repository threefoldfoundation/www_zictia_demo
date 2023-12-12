<template>
  <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
    <div class="flex flex-col items-center">
      <h2 class="font-bold text-5xl mt-5 tracking-tight">
        FREQUANTLY ASKED QUESTIONS
      </h2>
      <p class="text-neutral-500 text-xl mt-3">
        We've crafted this FAQ page to answer many of your frequently asked
        questions.
      </p>
    </div>
    <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
      <div
        v-for="(faq, id) in faqs"
        :key="id"
        class="group flex flex-col rounded-lg bg-blue-950 p-5 text-white"
        :tabindex="id + 1"
      >
        <div class="flex cursor-pointer items-center justify-between">
          <span> {{ faq.question }} </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div
          v-if="(faq.answer instanceof Array)"
          class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
        >
          <ul class="py-2">
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
        </div>
        <div
          v-else
          class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
        >
          <p
            class="py-2"
            v-html="faq.answer.replaceAll(/\. /g, '. <br /><br />')"
          ></p>
        </div>
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

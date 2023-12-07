<template>
  <!-- component -->
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
      <div class="py-5">
        <details class="group">
          <summary
            class="flex justify-between items-center font-medium cursor-pointer list-none"
          >
            <span> What is ZICTIA?</span>
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
          <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            ZICTIA Is an Agency responsible for managing Zanzibar National Fiber
            Backbone and Data Center The Infrastructure will enhance usage of
            ICT applications for sustainable socio-econimic development,
            including implimentation of e-health, e-tax, e-learning and much
            more locally and globally.
          </p>
        </details>
      </div>
      <div class="py-5">
        <details class="group">
          <summary
            class="flex justify-between items-center font-medium cursor-pointer list-none"
          >
            <span> How does billing work?</span>
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
          <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            We offers a variety of billing options, including monthly and annual
            subscription plans, as well as pay-as-you-go pricing for certain
            services. Payment is typically made through a credit card or other
            secure online payment method.
          </p>
        </details>
      </div>
      <div class="py-5">
        <details class="group">
          <summary
            class="flex justify-between items-center font-medium cursor-pointer list-none"
          >
            <span> Can I get a refund for my subscription?</span>
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
          <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            We offers a 30-day money-back guarantee for most of its subscription
            plans. If you are not satisfied with your subscription within the
            first 30 days, you can request a full refund. Refunds for
            subscriptions that have been active for longer than 30 days may be
            considered on a case-by-case basis.
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQAccordion",
};
</script>

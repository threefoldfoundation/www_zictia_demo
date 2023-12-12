<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-5xl px-4 md:px-8">
      <div
        class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8"
      >
        <img
          src="https://placehold.co/600x350"
          loading="lazy"
          :alt="name"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6"
      >
        {{ name.replace(/_/g, " ") }}
      </h1>

      <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated. It may be used to display a sample of
        fonts or generate text for testing. Filler text is dummy text which has
        no meaning however looks very similar to real text. The important factor
        when using filler text is that the text looks realistic otherwise it
        will not look very good.<br /><br />

        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        <a
          href="#"
          class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >random</a
        >
        or otherwise generated. It may be used to display a sample of fonts or
        generate text for testing. Filler text is dummy text which has no
        meaning however looks very similar to real text.
      </p>

      <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
        About us
      </h2>

      <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated. It may be used to display a sample of
        fonts or generate text for testing. Filler text is dummy text which has
        no meaning however looks very similar to real text.
      </p>

      <ul class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
        <li>This is a section of some simple filler text</li>
        <li>Also known as placeholder text</li>
        <li>It shares some characteristics of a real written text</li>
      </ul>

      <blockquote
        class="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6"
      >
        “This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated.”
      </blockquote>

      <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
        Features
      </h2>

      <p class="text-gray-500 sm:text-lg">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated. It may be used to display a sample of
        fonts or generate text for testing. Filler text is dummy text which has
        no meaning however looks very similar to real text.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  props: ["name"],
};
</script>

<template>
  <div class="mx-2 my-10 rounded-xl border bg-white px-4 py-8">
    <div class="mb-2 flex">
      <div class="mr-1 w-full">
        <input
          type="text"
          class="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Search for articles"
        />
      </div>
      <button
        class="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="space-x-1">
      <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"
        ><span class="mr-1 text-gray-300">#</span>Policy</a
      >
      <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"
        ><span class="mr-1 text-gray-300">#</span>Science</a
      >
      <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"
        ><span class="mr-1 text-gray-300">#</span>Technology</a
      >
      <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"
        ><span class="mr-1 text-gray-300">#</span>Health</a
      >
      <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"
        ><span class="mr-1 text-gray-300">#</span>Research</a
      >
    </div>
  </div>
</template>

<template>
  <div class="bg-blue-950 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16 text-center">
        <h2
          class="text-2xl md:text-3xl lg:text-5xl mb-3 leading-none font-bold tracking-tight text-white"
        >
          {{ title }}
        </h2>

        <p
          class="my-3 text-base px-3 lg:text-lg font-medium leading-6 lg:leading-8 text-white"
        >
          {{ description }}
        </p>
      </div>
      <!-- text - end -->

      <!-- general  -->
      <div class="text-center mb-10">
        <h3
          class="text-2xl md:text-3xl mb-6 leading-none font-semibold tracking-tight text-white"
        >
          {{ generaltitle }}
        </h3>
        <div
          class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12"
        >
          <!-- person - start -->
          <div
            class="col-auto md:col-start-2"
            v-for="general in generals"
            :key="general.id"
          >
            <div
              class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80"
            >
              <img
                :src="require(`../assets/imgs/team/${general.image}`)"
                loading="lazy"
                :alt="general.name"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div class="font-bold text-white md:text-lg">
                {{ general.name }}
              </div>
              <p class="mb-3 text-sm text-gray-200 md:mb-4 md:text-base">
                {{ general.title }}
              </p>
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>

      <!-- directors  -->
      <div class="text-center my-10">
        <h3
          class="text-2xl md:text-3xl mb-6 leading-none font-semibold tracking-tight text-white"
        >
          {{ directortitle }}
        </h3>
        <div
          class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12"
        >
          <!-- person - start -->
          <div v-for="director in directors" :key="director.id">
            <div
              class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80"
            >
              <img
                :src="require(`../assets/imgs/team/${director.image}`)"
                loading="lazy"
                :alt="director.name"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div class="font-bold text-white md:text-lg">
                {{ director.name }}
              </div>
              <p class="mb-3 text-sm text-gray-200 md:mb-4 md:text-base">
                {{ director.title }}
              </p>
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>

      <!-- units  -->
      <div class="text-center my-10">
        <h3
          class="text-2xl md:text-3xl mb-6 leading-none font-semibold tracking-tight text-white"
        >
          {{ unittitle }}
        </h3>
        <div
          class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
        >
          <!-- person - start -->
          <div v-for="unit in units" :key="unit.id">
            <div
              class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80"
            >
              <img
                :src="require(`../assets/imgs/team/${unit.image}`)"
                loading="lazy"
                :alt="unit.name"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div class="font-bold text-white md:text-lg">
                {{ unit.name }}
              </div>
              <p class="mb-3 text-sm text-gray-200 md:mb-4 md:text-base">
                {{ unit.title }}
              </p>
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>

      <!-- divisions  -->
      <div class="text-center my-10">
        <h3
          class="text-2xl md:text-3xl mb-6 leading-none font-semibold tracking-tight text-white"
        >
          {{ divisiontitle }}
        </h3>
        <div
          class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
        >
          <!-- person - start -->
          <div v-for="division in divisions" :key="division.id">
            <div
              class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80"
            >
              <img
                :src="require(`../assets/imgs/team/${division.image}`)"
                loading="lazy"
                :alt="division.name"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div class="font-bold text-white md:text-lg">
                {{ division.name }}
              </div>
              <p class="mb-3 text-sm text-gray-200 md:mb-4 md:text-base">
                {{ division.title }}
              </p>
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>
    </div>
  </div>
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import BackGround from "@/components/BackGround.vue";

export default {
  name: "TeamMembers",
  components: {
    BackGround,
  },
  data() {
    return {
      title: "Team Members",
      description:
        "Comprising dedicated individuals driven by passion, we are on a shared journey to enhance the state of Tanzania and contribute positively to Tanzania's Internet infrastructure services, and improve the lives of those within our community.",
      generaltitle: "Genaral Manager",
      generals: [
        {
          image: "1.png",
          name: "Shukuru A. Suleiman",
          title: "Genaral Manager",
        },
      ],
      directortitle: "Department Directors",
      directors: [
        {
          image: "12.png",
          name: "Saada A Mohammed",
          title: "Director of Human resouce and Administration",
        },
        {
          image: "4.png",
          name: "Abubakar A Sheha",
          title: "Director Planning and Marketing",
        },
        {
          image: "11.png",
          name: "Mohammad A Msoma",
          title: "Director of Technical and Innovation",
        },
      ],
      unittitle: "Head Of Units",
      units: [
        {
          image: "9.png",
          name: "Maryam A Mtawa",
          title: "Head of Internal Audit Unit",
        },
        {
          image: "2.png",
          name: "Ali S Mgambe",
          title: "Head of ICT Unit",
        },
        {
          image: "7.png",
          name: "Haji M Msheba",
          title: "Head of Procurement Unit",
        },
        {
          image: "8.png",
          name: "Kassim M Kassim",
          title: "Head of legal Unit",
        },
        {
          image: "14.png",
          name: "Soud S Said",
          title: "Head of Accounting Unit",
        },
      ],
      divisiontitle: "Head Of Division",
      divisions: [
        {
          image: "13.png",
          name: "Shani Kh Khamis",
          title: "Manager Planning and Research",
        },
        {
          image: "10.png",
          name: "Mohamed M Khamis",
          title: "Manager of Operations",
        },
        {
          image: "5.png",
          name: "Abdulrahman J Abdulrahman",
          title: "Manager Fiber network",
        },
        {
          image: "3.png",
          name: "Abdulrahman M Abdulrahman",
          title: "Manager Datacente",
        },
        {
          image: "6.png",
          name: "Haji K Hamad",
          title: "Manager Power and Cooling",
        },
      ],

      backgroundItems: {
        bg: "team/team_bottom.png",
        logo: "logo",
        title: "title",
        content: "content",
      },
    };
  },
};
</script>

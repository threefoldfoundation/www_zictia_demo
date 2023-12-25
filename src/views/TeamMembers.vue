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

      <div
        class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <!-- person - start -->
        <div v-for="member in members" :key="member.id">
          <div
            class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80"
          >
            <img
              :src="require(`../assets/imgs/team/${member.image}`)"
              loading="lazy"
              :alt="member.name"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <div class="font-bold text-white md:text-lg">
              {{ member.name }}
            </div>
            <p class="mb-3 text-sm text-gray-200 md:mb-4 md:text-base">
              {{ member.title }}
            </p>
          </div>
        </div>
        <!-- person - end -->
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
      members: [
        {
          image: "1.png",
          name: "Eng. / Nd. Shukuru Awadh Suleiman",
          title: "Executive Director",
        },
        {
          image: "2.png",
          name: "Abdulrahman J Abdulrahman",
          title: "Fiber network Manager",
        },
        {
          image: "3.png",
          name: "Abdulrahman M Abdulrahman",
          title: "Data Center Manager",
        },
        {
          image: "4.png",
          name: "Abubakar A Sheha",
          title: "Planning and Marketing Director",
        },
        { image: "5.png", name: "Ali S Mgambe", title: "Head of ICT Unit" },
        {
          image: "6.png",
          name: "Haji K Hamad",
          title: "Power and Cooling Manager",
        },
        {
          image: "7.png",
          name: "Haji M Msheba",
          title: "Head of Procurement Unit",
        },
        {
          image: "8.png",
          name: "Eng. / Nd. Shukuru Awadh Suleiman",
          title: "Head of legal Unit",
        },
        {
          image: "9.png",
          name: "Eng. / Nd. Shukuru Awadh Suleiman",
          title: "Executive Director",
        },
        {
          image: "10.png",
          name: "Mohamed M Khamis",
          title: "Manager of Operations",
        },
        {
          image: "11.png",
          name: "Mohammad A Msoma",
          title: "Director of Technical and Innovation",
        },
        {
          image: "12.png",
          name: "Saada A Mohammed",
          title: "Director of Human resouce and Administration",
        },
        {
          image: "13.png",
          name: "Shani Kh Khamis",
          title: "Manager Planning and Research",
        },
        { image: "14.png", name: "Soud S Said", title: "Soud S Said" },
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

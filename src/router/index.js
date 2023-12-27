import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeViewVue,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/management",
      children: [
        {
          name: "Organization Structure",
          path: "/organization_structure",
          component: () => import("../views/organization_structure.vue"),
        },
        {
          name: "Team Members",
          path: "/team_members",
          component: () => import("../views/TeamMembers.vue"),
        },
      ],
    },
    {
      path: "/our_services",
      name: "OurServices",
      component: () => import("../views/OurServices.vue"),
    },
    {
      path: "/fiberRoutes",
      name: "FiberRoutes",
      component: () => import("../views/FiberRoutes.vue"),
    },
    {
      path: "/news",
      name: "News",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/news/:name",
      name: "PostDetails",
      props: true,
      component: () => import("../views/PostDetails.vue"),
    },
    {
      name: "Documents",
      path: "/:docs",
      props: true,
      component: () => import("../views/DocsPage.vue"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("../views/FAQ.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactUs.vue"),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;

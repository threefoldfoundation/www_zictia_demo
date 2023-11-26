import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
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
          //   component: () => import(".."),
        },
      ],
    },
     {
      path: "/our_services",
      name: "OurServices",
      component: () => import("../views/OurServices.vue"),
    },

    // {../views/OurServices.vue
    //   path: "/our_services",
    //   children: [
    //     {
    //       name: "VPN",
    //       path: "/vpn",
    //         component: () => import("../views/VPN.vue"),
    //     },
    //     {
    //       name: "IPMPLS",
    //       path: "/ipmpls",
    //       //   component: () => import(".."),
    //     },
    //     {
    //       name: "Co-Location",
    //       path: "/colocation",
    //       //   component: () => import(".."),
    //     },
    //     {
    //       name: "VirtualMachine",
    //       path: "/virtualmachine",
    //       //   component: () => import(".."),
    //     },
    //     {
    //       name: "CapacityLease",
    //       path: "/fiberLeaseServices",
    //       //   component: () => import(".."),
    //     },
    //     {
    //       name: "InternetServices",
    //       path: "/internetservices",
    //       //   component: () => import(".."),
    //     },
    //   ],
    // },
    {
      path: "/fiberRoutes",
      name: "FiberRoutes",
      //   component: () => import(".."),
    },
    {
      path: "/softnet_news",
      name: "SoftnetNews",
      //   component: () => import(".."),
    },
    {
      path: "/documents",
      children: [
        {
          name: "Tender",
          path: "/tender",
          //   component: () => import(".."),
        },
        {
          name: "LegalAct",
          path: "/legal_act",
          //   component: () => import(".."),
        },
        {
          name: "Bronchure",
          path: "/bronchure",
          //   component: () => import(".."),
        },
        {
          name: "Form",
          path: "/form",
          //   component: () => import(".."),
        },
      ],
    },
    {
      path: "/faq",
      name: "FAQ",
      //   component: () => import(".."),
    },
    {
      path: "/contact",
      name: "Contact",
      //   component: () => import(".."),
    },
  ],
});

export default router;

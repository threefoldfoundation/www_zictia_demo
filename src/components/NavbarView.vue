<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="flex flex-1 sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <a href="#">
              <img
                class="h-8 w-auto"
                src="../assets/imgs/logo.png"
                alt="Zictia"
              />
            </a>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            @click="isOpen = !isOpen"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="absolute right-0 flex items-center justify-center sm:items-stretch sm:justify-start pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link
              to="/"
              class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >Home</router-link
            >
            <router-link
              to="/about"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >About Us</router-link
            >
            <Menu
              as="div"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 bg-white text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Management
                  <ChevronDownIcon
                    class="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute top-12 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/organization_structure"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        Organization Structure
                      </router-link>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/team_members"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Team Members</router-link
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <Menu
              as="div"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 bg-white text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Our Services
                  <ChevronDownIcon
                    class="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute top-12 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/vpn"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        VPN
                      </router-link>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/ipmpls"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >IP MPLS</router-link
                      >
                    </MenuItem>
                  </div>

                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="colocation"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >CO-Location</router-link
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/virtualmachine"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Virtual Machine</router-link
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/fiberLeaseServices"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Capacity Lease</router-link
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/internetservices"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Internet Services</router-link
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <router-link
              to="/fiberRoutes"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Fiber Routes</router-link
            >
            <router-link
              to="/softnet_news"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >News &amp; Events</router-link
            >
            <Menu
              as="div"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 bg-white text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Documents
                  <ChevronDownIcon
                    class="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute top-12 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/tender"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        Tender
                      </router-link>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/legal_act"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Legalact</router-link
                      >
                    </MenuItem>
                  </div>

                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/bronchure"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Borchure</router-link
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <router-link
                        to="/form"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Form</router-link
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <router-link
              to="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >FAQ's</router-link
            >
            <router-link
              to="/contact"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Contact</router-link
            >
          </div>
          <!-- <button
            type="button"
            class="relative rounded-full bg-white pl-3 pt-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Search</span>
            <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
          </button> -->
        </div>
      </div>
    </div>

    <nav :class="isOpen ? 'block' : 'hidden'">
      <ul class="space-y-1 pb-4 pt-2">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
        >
          <Menu
            v-if="item.children"
            as="div"
            class="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <div>
              <MenuButton
                @click="setActive(index)"
                class="inline-flex w-full justify-center gap-x-1.5 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                {{ item.name }}
                <ChevronDownIcon
                  class="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              v-if="active == index"
              x-show="open"
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                v-if="open"
                class="absolute top-48 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem
                    v-slot="{ active }"
                    v-for="element in item.children"
                    :key="element.name"
                  >
                    <router-link
                      :to="element.path"
                      :class="[
                        active
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      {{ element.name }}
                    </router-link>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <router-link v-else :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  // DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  // MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

export default {
  name: "NavBar",
  components: {
    Disclosure,
    DisclosureButton,
    // DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Bars3Icon,
    // MagnifyingGlassIcon,
    XMarkIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      scrollPosition: null,
      headerHeight: 0,
      isOpen: false,
      search: "",
      open: false,
      active: null,
      navItems: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About Us",
          path: "/about",
        },
        {
          name: "Management",
          path: "",
          children: [
            {
              name: "Organization Structure",
              path: "/organization_structure",
            },
            {
              name: "Team Members",
              path: "/team_members",
            },
          ],
        },
        {
          name: "Our Services",
          path: "",
          children: [
            {
              name: "VPN",
              path: "/vpn",
            },
            {
              name: "IP MPLS",
              path: "/ipmpls",
            },
            {
              name: "Co-Location",
              path: "/colocation",
            },
            {
              name: "Virtual Machine",
              path: "/virtualmachine",
            },
            {
              name: "Capacity Lease",
              path: "/fiberLeaseServices",
            },
            {
              name: "Internet Services",
              path: "/internetservices",
            },
          ],
        },
        {
          name: "Fiber Routes",
          path: "/fiberRoutes",
        },
        {
          name: "News & Events",
          path: "/softnet_news",
        },
        {
          name: "Documents",
          path: "",
          children: [
            {
              name: "Tender",
              path: "/tender",
            },
            {
              name: "Legalact",
              path: "/legal_act",
            },
            {
              name: "Brochure",
              path: "/bronchure",
            },
            {
              name: "From",
              path: "/form",
            },
          ],
        },
        {
          name: "FAQ's",
          path: "/faq",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
  methods: {
    // result() {
    //   window.location.href = `/search?query=${this.search}`;
    // },
    setActive(index) {
      this.active = index;
      this.open = !this.open;
      this.isOpen = !this.isOpen;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close);
  },
};
</script>

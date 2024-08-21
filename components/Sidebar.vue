<template>
  <aside
    :class="sidebarClass"
    class="hover:shadow fixed inset-y-0 left-0 bg-background-200 dark:bg-dark-background-300 w-64 text-gray-600 dark:text-gray-300 p-4 fixed h-screen lg:h-auto transition-transform transform lg:translate-x-0 z-1000"
  >
    <button @click="toggleSidebar" class="lg:hidden absolute top-4 right-4">
      <!-- Icono de la "X" para cerrar -->
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
    <div class="mb-6 flex items-center">
      <img src="" alt="Logo" class="h-12 w-auto" />
    </div>
    <nav>
      <ul class="space-y-3">
        <SidebarItem
          :to="{ name: 'index' }"
          :icon="HomeIcon"
          text="Home"
          :active="isActive('index')"
        />
        <SidebarItem
          :to="{ name: 'Planifications' }"
          :icon="CalendarIcon"
          text="Planificaciones"
          :active="isActive('Planifications')"
        />
        <SidebarItem
          :to="{ name: '' }"
          :icon="PencilIcon"
          text="Dietas y nutrición"
          :active="isActive('nutrition')"
        />
        <SidebarItem :to="{ name: '' }" :icon="UserGroupIcon" text="Usuarios" />
        <SidebarItem
          :to="{ name: '' }"
          :icon="PaperAirplaneIcon"
          text="Invitaciones"
          :active="isActive('invitations')"
        />
        <SidebarItem :to="{ name: '' }" :icon="ChatIcon" text="Chat" />
        <SidebarItem
          :to="{ name: '' }"
          :icon="CalendarIcon"
          text="Calendario"
          :active="isActive('calendar')"
        />
        <SidebarItem
          :to="{ name: '' }"
          :icon="ViewBoardsIcon"
          text="Kanban"
          :active="isActive('kanban')"
        />
        <SidebarItem
          :to="{ name: '' }"
          :icon="UsersIcon"
          text="Equipos"
          :active="isActive('teams')"
        />
        <SidebarItem
          :to="{ name: '' }"
          :icon="BellIcon"
          text="Recordatorios"
          :active="isActive('reminders')"
        />
      </ul>
    </nav>
  </aside>
</template>
  
  <script setup>
import { computed } from "vue";
import {
  HomeIcon,
  CalendarIcon,
  PencilIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  ChatIcon,
  ViewBoardsIcon,
  UsersIcon,
  BellIcon,
} from "@heroicons/vue/outline";
import SidebarItem from "~/components/SidebarItem.vue";

const props = defineProps({
  sidebarVisible: Boolean,
  toggleSidebar: Function,
});

const sidebarClass = computed(() => {
  return {
    "translate-x-0": props.sidebarVisible,
    "-translate-x-full": !props.sidebarVisible,
  };
});
const currentRoute = computed(() => useRoute().name);

const isActive = (routeName) => {
  return currentRoute.value === routeName;
};
</script>
  
  <style scoped>
aside {
  transition: transform 0.5s ease;
}
</style>
  
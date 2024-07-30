<template>
  <aside
    :class="sidebarClass"
    class="w-64 bg-gray-800 text-white p-4 fixed top-0 left-0 h-screen lg:relative lg:h-auto transition-transform transform -translate-x-full lg:translate-x-0 z-1000"
  >
    <button
      @click="toggleSidebar"
      class="lg:hidden absolute top-4 right-4 text-white"
    >
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
    <div class="mb-6 flex items-center ">
      <img src="" alt="Logo" class="h-12 w-auto" />
    </div>
    <nav>
      <ul class="space-y-2">
        <SidebarItem :to="{ name: 'Test' }" :icon="HomeIcon" text="Home" />
        <SidebarItem
          :to="{ name: '' }"
          :icon="CalendarIcon"
          text="Planificaciones"
        />
        <SidebarItem
          :to="{ name: '' }"
          :icon="PencilIcon"
          text="Dietas y nutrición"
        />
        <SidebarItem :to="{ name: '' }" :icon="UserGroupIcon" text="Usuarios" />
        <SidebarItem
          :to="{ name: '' }"
          :icon="PaperAirplaneIcon"
          text="Invitaciones"
        />
        <SidebarItem :to="{ name: '' }" :icon="ChatIcon" text="Chat" />
        <SidebarItem
          :to="{ name: '' }"
          :icon="CalendarIcon"
          text="Calendario"
        />
        <SidebarItem :to="{ name: '' }" :icon="ViewBoardsIcon" text="Kanban" />
        <SidebarItem :to="{ name: '' }" :icon="UsersIcon" text="Equipos" />
        <SidebarItem :to="{ name: '' }" :icon="BellIcon" text="Recordatorios" />
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
</script>
  
  <style scoped>
aside {
  transition: transform 0.5s ease;
}
</style>
  
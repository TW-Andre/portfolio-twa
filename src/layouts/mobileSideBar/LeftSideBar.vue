<script setup>
import {RouterLink} from "vue-router";
import { userStore } from "@/stores/authStore";
import {useSidebarStore} from "@/stores/sidebar";

let user    = userStore();
let sidebar = useSidebarStore();
</script>

<template>
    <v-navigation-drawer
      v-model="sidebar.Custom_drawer"
      class="border-opacity-0 vertical-menu"
	  :rail="sidebar.Custom_rail"
	  temporary
	  rail-width="240"
	>
      <v-list-item
        class="py-5"
        prepend-icon="mdi-account"
        :title="user.getUser()"
		slim
        nav
      ></v-list-item>

      <v-divider></v-divider>

      <v-list class="side-bar-list" density="compact" nav>
        <RouterLink to="/" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
        </RouterLink>
        <RouterLink to="/projetos/menurestaurante" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-silverware" title="Menu de Restaurante" value="restaurantmenu"></v-list-item>
        </RouterLink>
        <RouterLink to="/projetos/projeto2" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-wrench-clock" title="Projeto 2" value="projeto2"></v-list-item>
        </RouterLink>
        <RouterLink to="/login" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-login" title="Logout" value="logout" @click="user.logout()"></v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

</template>

<style scoped lang="scss">

</style>

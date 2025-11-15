<script setup>
import {RouterLink} from "vue-router";
import { userStore } from "@/stores/authStore";
import {useSidebarStore} from "@/stores/sidebar";
import portfolio_icon from "@/assets/portfolio-icon.png";

let user    = userStore();
let sidebar = useSidebarStore();
</script>

<template>
    <v-navigation-drawer
      v-model="sidebar.Custom_drawer"
      class="border-none vertical-menu position-fixed"
	  :rail="sidebar.Custom_rail"
	  temporary
	  rail-width="240"
	>
      <v-list-item
        class="list-title-user py-5"
		:prepend-avatar="portfolio_icon"
		title="André dos Santos"
		expand-on-hover
		
		slim
        nav
      ></v-list-item>

      <v-divider></v-divider>
		
		<v-list class="side-bar-list" density="compact" nav>
			<RouterLink to="/">
				<v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
			</RouterLink>
			
			<v-list-subheader class="smallCap text-uppercase">
				<span class="mini-text">Projetos</span>
			</v-list-subheader>
			
			<RouterLink to="/projetos/menurestaurante">
				<v-list-item prepend-icon="mdi-silverware" title="Menu de Restaurante" value="restaurantmenu"></v-list-item>
			</RouterLink>
			<RouterLink to="/projetos/testingDB">
				<v-list-item prepend-icon="mdi-database" title="Teste de Banco" value="testingDB"></v-list-item>
			</RouterLink>
			<RouterLink to="/projetos/projeto2">
				<v-list-item prepend-icon="mdi-wrench-clock" title="Projeto 2" value="projeto2"></v-list-item>
			</RouterLink>
			
			<v-list-subheader
				class="smallCap text-uppercase mt-1"
			>
				<span class="mini-text">Curiosidades</span>
			</v-list-subheader>
			
			<RouterLink to="/curiosidades/sobremim">
				<v-list-item prepend-icon="mdi-account-question" title="Sobre mim" value="aboutme"></v-list-item>
			</RouterLink>
			<RouterLink to="/curiosidades/ferramentas">
				<v-list-item prepend-icon="mdi-tools" title="Ferramentas" value="tools"></v-list-item>
			</RouterLink>
		</v-list>
    </v-navigation-drawer>

</template>

<style scoped lang="scss">

</style>

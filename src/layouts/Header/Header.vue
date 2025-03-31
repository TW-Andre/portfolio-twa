<script setup>
import {useSidebarStore} from "@/stores/sidebar";
import {useDisplay} from "vuetify";

let sidebar 	 = useSidebarStore();
const { mobile } = useDisplay();


</script>

<template>
	
	<v-app-bar class="app-bar-mobile">
		
		<v-toolbar
			class="position-fixed"
			color="transparent"
			style="width: 48px;"
		>
			<template v-slot:prepend>
				<v-btn v-if="mobile" icon="$menu" @click="sidebar.SET_CUSTOM_DRAWER"></v-btn>
				<v-btn v-show="sidebar.Rail_drawer" icon="$menu" @click="sidebar.SET_RAIL_DRAWER"></v-btn>
				<v-btn v-show="!sidebar.Rail_drawer" icon="$close" @click="sidebar.SET_RAIL_DRAWER"></v-btn>
			</template>
		
		</v-toolbar>
		
	</v-app-bar>
	
</template>

<style scoped>

</style>

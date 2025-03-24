<script setup>
import {useSidebarStore} from "@/stores/sidebar";
import { useDisplay } from 'vuetify';

let sidebar = useSidebarStore();

let xs = useDisplay();

watch(xs, ()=>{
	if (xs) {
		sidebar.SET_SIDEBAR_DRAWER;
	} else {
	
	}
})
</script>

<template>
	
	<v-app-bar class="app-bar-mobile">
		
		<v-toolbar
			class="position-fixed"
			color="transparent"
			style="width: 48px;"
		>
			<template v-slot:prepend>
				<div v-if="$vuetify.display.xs" class="d-flex align-center">
					<v-btn v-show="!sidebar.Sidebar_drawer" icon="$menu" @click="sidebar.SET_SIDEBAR_DRAWER"></v-btn>
				</div>
				<div v-if="!$vuetify.display.xs" class="d-flex align-center">
					<v-btn v-show="sidebar.Rail_drawer" icon="$menu" @click="sidebar.SET_RAIL_DRAWER"></v-btn>
					<v-btn v-show="!sidebar.Rail_drawer" icon="$close" @click="sidebar.SET_RAIL_DRAWER"></v-btn>
				</div>
			</template>
		
		</v-toolbar>
		
	</v-app-bar>
	
</template>

<style scoped>

</style>

<script setup>
import {useSidebarStore} from "@/stores/sidebar";
import {useDisplay} from "vuetify";
import Profile from "@/components/account/Profile.vue";

let sidebar 	 = useSidebarStore();
const { mobile } = useDisplay();

</script>

<template>
	
	<v-app-bar
		class="app-bar-mobile position-fixed"
		style="background-image: linear-gradient(150deg, #064538, #34E89E);"
	>
		<v-toolbar
			class="text-white"
			color="transparent"
			style="width: 48px;"
		>
			<template v-slot:prepend>
				<v-btn v-if="mobile" icon="$menu" @click="sidebar.SET_CUSTOM_DRAWER"></v-btn>
				<v-btn v-show="sidebar.Rail_drawer" icon="$menu" @click="sidebar.SET_RAIL_DRAWER"></v-btn>
				<v-btn v-show="!sidebar.Rail_drawer" icon="$close" @click="sidebar.SET_RAIL_DRAWER"></v-btn>
			</template>
		</v-toolbar>
		
		<Profile />
		
<!--		<v-card-text v-if="!mobile" class="text-end mr-auto me-5 pa-0">
			<v-icon
				v-show="!isFullscreen"
				class=""
				icon="mdi mdi-arrow-expand-all"
				color="white"
				size="27"
				@click="toggleScreen(isFullscreen)"
			></v-icon>
			<v-icon
				v-show="isFullscreen"
				icon="mdi mdi-arrow-collapse-all"
				color="white"
				size="27"
				@click="toggleScreen(isFullscreen)"
			></v-icon>
		</v-card-text>-->
	</v-app-bar>
	
</template>

<style scoped>

</style>

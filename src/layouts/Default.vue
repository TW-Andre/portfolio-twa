<script setup>
import DesktopSidebar from "@/layouts/desktopSidebar/LeftSidebar.vue";
import MobileSidebar from "@/layouts/mobileSideBar/LeftSideBar.vue";
import Header from "@/layouts/Header/Header.vue";
import {useDisplay} from "vuetify";

const { mobile } = useDisplay();

</script>

<template>
	
	<v-layout
		class="main-layout-wrapper justify-center position-relative"
		id="layout-wrapper"
	>
		<DesktopSidebar v-if="!mobile"/>
		<MobileSidebar v-if="mobile" />
		<Header />
		
		<v-main app>
			
			<v-container
			class="main-container"
			>
				<router-view />
			</v-container>
		
		</v-main>
	</v-layout>

</template>

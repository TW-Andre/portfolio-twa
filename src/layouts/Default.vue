<script setup>
import LeftSideBar from "@/layouts/verticalSideBar/LeftSideBar.vue";
import Header from "@/layouts/verticalHeader/Header.vue";

/*const resizeWindow = computed(()=>{
	if (window.screen.width > 600) {
		console.log('Beleza')
	}
})

if (window.screen.width > 600) {
	console.log('Beleza')
}*/
</script>

<template>
	
	<v-layout
		class="main-layout-wrapper justify-center position-relative"
		id="layout-wrapper"
	>
		<LeftSideBar />
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

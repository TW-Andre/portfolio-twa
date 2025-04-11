<script setup>
import ProjectsPreview from "@/components/projectsPreview/ProjectsPreview.vue";
import AboutMe from "@/views/homePage/AboutMe.vue";

</script>

<template>

	<v-card class="main-card-homePage px-lg-15 px-3">
		
		<AboutMe />
		
		<v-divider class="my-15"></v-divider>
		
		<ProjectsPreview />
		
		<v-divider class="my-15"></v-divider>
		
	</v-card>
</template>


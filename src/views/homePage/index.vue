<script setup>
import ProjectsPreview from "@/components/projectsPreview/ProjectsPreview.vue";
import AboutMe from "@/views/homePage/AboutMe.vue";
import ToolsUsaded from "@/views/homePage/Contact.vue";

</script>

<template>

	<v-card class="main-card-homePage px-0">
		
		<AboutMe />
		
		<v-divider class="my-15"></v-divider>
		
		<ProjectsPreview />
		
		<v-divider class="my-15"></v-divider>
		
		<ToolsUsaded class="mb-15"/>
		
	</v-card>
</template>


<script setup>


import Maintenance from "@/views/maintenance/Maintenance.vue";

const breadcrumb = [
  {
    title: 'Projetos',
    disabled: true,
  },
  {
    title: 'Em Desenvolvimento',
    disabled: false,
  },
];
</script>

<template>

	<v-card class="mt-3 px-lg-10 px-3">
	
		<v-breadcrumbs title="Home" :items="breadcrumb"></v-breadcrumbs>
		
		<v-card-title class="text-start">
		  Em Desenvolvimento
		</v-card-title>
		
		<Maintenance />
	</v-card>
	

</template>

<style scoped>

</style>

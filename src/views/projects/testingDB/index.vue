<script setup>
import appConfigs from "@/app/api/configurations.ts";
import TableComponent from "@/views/projects/testingDB/parts/TableComponent.vue";

const breadcrumb = [
	{
		title: 'Projetos',
		disabled: true,
	},
	{
		title: 'Teste Banco de Dados',
		disabled: false,
	},
];

</script>

<template>
	
	<v-card class="mt-3 px-lg-15 px-3">
		
		<v-breadcrumbs title="" :items="breadcrumb"></v-breadcrumbs>
		
		<v-card-title class="text-start">
			Em Desenvolvimento
		</v-card-title>
		
	</v-card>

	<TableComponent />

</template>

<style scoped>

</style>

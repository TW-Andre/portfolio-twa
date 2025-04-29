<script setup>
import Tools from "@/views/curiosities/tools/parts/Tools.vue";

const breadcrumb = [
	{
		title: 'Projetos',
		disabled: true,
	},
	{
		title: 'Ferramentas',
		disabled: false,
	},
];


</script>

<template>
	<v-card class="mt-3 px-lg-15 px-3" flat>
		
		<v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
		<v-card-title class="text-start">
			Ferramentas
		</v-card-title>
		
		<Tools />
		
	</v-card>
</template>

<style scoped>

</style>

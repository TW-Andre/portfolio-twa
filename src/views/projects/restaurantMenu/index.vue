<script setup>
import RestaurantMenu from "@/views/projects/restaurantMenu/parts/RestaurantMenu.vue"

const breadcrumb = [
  {
    title: 'Projetos',
    disabled: true,
  },
  {
    title: 'Menu de Restaurante',
    disabled: false,
  },
];
</script>

<template>

    <v-card class="mt-3 px-lg-15 px-3">

    	<v-breadcrumbs title="Home" :items="breadcrumb"></v-breadcrumbs>
		<v-card-title class="text-start">
			Menu de Restaurante
		</v-card-title>
		<RestaurantMenu />

    </v-card>

</template>

<style scoped>

</style>

<script setup>
import RestaurantMenu from "@/views/restaurantMenu/parts/RestaurantMenu.vue"

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

    <v-breadcrumbs title="Home" :items="breadcrumb"></v-breadcrumbs>

    <v-card>
      <v-card-title class="text-start">
        Menu de Restaurante
      </v-card-title>
    </v-card>

    <RestaurantMenu />

</template>

<style scoped>

</style>

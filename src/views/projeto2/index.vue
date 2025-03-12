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

  <v-breadcrumbs title="Home" :items="breadcrumb"></v-breadcrumbs>

  <v-card>
    <v-card-title class="text-start">
      Em Desenvolvimento
    </v-card-title>
  </v-card>

  <Maintenance />

</template>

<style scoped>

</style>

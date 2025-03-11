<script setup>

import LeftSideBar from "@/layouts/leftSideBar/leftSideBar.vue";
</script>

<template>

  <v-layout
    class="main-layout-wrapper justify-center position-relative"
    id="layout-wrapper"
  >
    <LeftSideBar />
    <v-main app>
      <v-container
        class="main-container"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-layout>

</template>

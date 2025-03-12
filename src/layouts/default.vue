<script setup>

import LeftSideBar from "@/layouts/leftSideBar/leftSideBar.vue";

let rail = ref(true);
</script>

<template>

  <v-layout

    class="main-layout-wrapper justify-center position-relative"
    id="layout-wrapper"
  >
    <LeftSideBar :rail="rail"/>

    <v-main app>
      <v-toolbar
        class="position-absolute"
        color="transparent"
        style="width: 48px"
      >
        <template v-slot:prepend>
          <v-btn icon="$menu" @click="rail = !rail"></v-btn>
        </template>

        <template v-slot:append>
          <v-btn v-if="rail" icon="mdi-menu"></v-btn>
          <v-btn v-if="!rail" icon="mdi-close"></v-btn>
        </template>
      </v-toolbar>

      <v-container
        class="main-container"
      >
        <router-view />
      </v-container>

    </v-main>
  </v-layout>

</template>

<script setup>
import {RouterLink} from "vue-router";

let drawer = ref(true);
let rail   = ref(true);

</script>

<template>
    <v-navigation-drawer
      v-model="drawer"
      class="border-opacity-25"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        class="cursor-pointer"
        prepend-icon="mdi-account"
        title="André dos Santos"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <RouterLink to="/" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
        </RouterLink>
        <RouterLink to="/projeto1" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-file-code-outline" title="Projeto 1" value="projeto1"></v-list-item>
        </RouterLink>
        <RouterLink to="/projeto2" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-file-document-check-outline" title="Projeto 2" value="projeto2"></v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

<!--      <v-main app>
        <v-container class="page-wrapper pa-0">
          <router-view/>
        </v-container>
      </v-main>-->

</template>

<style scoped>

</style>

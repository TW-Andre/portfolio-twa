<script setup>
import {RouterLink} from "vue-router";

let {rail} = defineProps(['rail'])

let drawer = ref(true);

</script>

<template>
    <v-navigation-drawer
      v-model="drawer"
      class="border-opacity-0"
      image="https://img.freepik.com/fotos-gratis/fundo-hexadecimal-para-redes_52683-137877.jpg?t=st=1741788750~exp=1741792350~hmac=6ce1637034d09e28034165e892dae1b55197f18d41991be60ec75b9691d5b5e9&w=740"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        class="cursor-pointer py-4"
        prepend-icon="mdi-account"
        title="André dos Santos"
        nav
      >

      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <RouterLink to="/" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
        </RouterLink>
        <RouterLink to="/menurestaurante" style="text-decoration: none">
          <v-list-item prepend-icon="mdi-silverware" title="Menu de Restaurante" value="restaurantmenu"></v-list-item>
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

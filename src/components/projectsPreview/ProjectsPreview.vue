<script setup>
import previewMenu from "@/assets/previewImages/PreviewMenuRestaurant.png";
import {RouterLink} from "vue-router";

const jsonProjects = [
  {
    id: 1,
    title: "Menu de Restaurante",
    src: previewMenu,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex explicabo fuga natus nostrum officia.",
    link: '/projetos/menurestaurante'
  },
  {
    id: 2,
    title: "Projeto em Desenvolvimento 1",
    src: "https://img.freepik.com/fotos-gratis/em-breve-palavra-em-estilo-de-texto-metalico_53876-124845.jpg?t=st=1741733119~exp=1741736719~hmac=78c8e6c6c57830f43700c78bf3d29b8ee4f7d060a5fdcfc11c3d946ad4ea0f5f&w=996",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex explicabo fuga natus nostrum officia.",
    link: '/'
  },
  {
    id: 3,
    title: "Projeto em Desenvolvimento 2",
    src: "https://img.freepik.com/fotos-gratis/em-breve-palavra-em-estilo-de-texto-metalico_53876-124845.jpg?t=st=1741733119~exp=1741736719~hmac=78c8e6c6c57830f43700c78bf3d29b8ee4f7d060a5fdcfc11c3d946ad4ea0f5f&w=996",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex explicabo fuga natus nostrum officia.",
    link: '/'
  },
  {
    id: 4,
    title: "Projeto em Desenvolvimento 3",
    src: "https://img.freepik.com/fotos-gratis/em-breve-palavra-em-estilo-de-texto-metalico_53876-124845.jpg?t=st=1741733119~exp=1741736719~hmac=78c8e6c6c57830f43700c78bf3d29b8ee4f7d060a5fdcfc11c3d946ad4ea0f5f&w=996",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex explicabo fuga natus nostrum officia.",
    link: '/'
  },
]

</script>

<template>

  <v-container>
    <v-row>

      <template v-for="(item, index) in jsonProjects">
        <v-col
          cols="12"
          lg="4">
          <v-card class="mx-auto my-2 card-hover" max-width="450">
            <RouterLink :to="item.link" style="text-decoration: none">
              <v-img
                color="surface-variant"
                height="200"
                :src="item.src"
                cover
              ></v-img>
            </RouterLink>

            <v-card-text>
              <div class="font-weight-bold mb-2">{{ item.title }}</div>
              <div class="ms-1 mb-2">{{ item.description }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </template>

    </v-row>
  </v-container>

</template>

<style scoped>

</style>

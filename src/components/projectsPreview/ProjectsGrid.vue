<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const projects = [
  {
    title: 'Menu de Restaurante',
    description: 'Sistema de menu interativo para restaurante com visualização em mobile e desktop',
    path: '/projetos/menurestaurante',
    technologies: ['Vue.js', 'Vuetify'],
    icon: 'mdi-silverware-fork-knife',
    color: 'orange'
  },
  {
    title: 'Gerenciamento de Usuários',
    description: 'CRUD completo de usuários com validação, API backend em PHP e banco de dados',
    path: '/projetos/gerenciamento-usuarios',
    technologies: ['Vue.js', 'PHP', 'PostgreSQL'],
    icon: 'mdi-account-multiple',
    color: 'blue'
  },
  {
    title: 'API de Notícias',
    description: 'Filtro de categorias e exibição de notícias em cards com consumo de API backend',
    path: '/projetos/news',
    technologies: ['Vue.js', 'Python', 'API REST'],
    icon: 'mdi-newspaper',
    color: 'red'
  },
  {
    title: 'Cartão de Visitas Digital',
    description: 'Aplicação em React com QR Code para compartilhamento de perfil profissional',
    path: '/projetos/cartao-visitas',
    technologies: ['React', 'QR Code', 'TypeScript'],
    icon: 'mdi-card-account-details',
    color: 'purple'
  },
  {
    title: 'Loja Virtual E-commerce',
    description: 'Plataforma completa com autenticação, gerenciamento de permissões e painel admin',
    path: '/projetos/loja-virtual',
    technologies: ['React', 'Full-Stack', 'Admin Dashboard'],
    icon: 'mdi-store',
    color: 'green'
  },
];

const navigateToProject = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="projects-grid">
    <v-row>
      <v-col v-for="project in projects" :key="project.path" cols="12" md="6" lg="4">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              class="cursor-pointer transition-all h-100"
              @click="navigateToProject(project.path)"
            >
              <!-- Header com ícone -->
              <v-card-item class="pb-0">
                <template v-slot:prepend>
                  <v-avatar
                    :color="project.color"
                    variant="outlined"
                    size="x-large"
                  >
                    <v-icon :icon="project.icon" size="large"></v-icon>
                  </v-avatar>
                </template>
              </v-card-item>

              <!-- Conteúdo -->
              <v-card-title class="text-subtitle-1 mt-2">
                {{ project.title }}
              </v-card-title>

              <v-card-text class="text-body-2">
                {{ project.description }}
              </v-card-text>

              <!-- Tecnologias -->
              <v-card-text class="pt-0">
                <div class="d-flex flex-wrap gap-1">
                  <v-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    size="small"
                    :color="project.color"
                    variant="outlined"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </v-card-text>

              <!-- Botão -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  variant="tonal"
                  append-icon="mdi-arrow-right"
                  text="Ver Detalhes"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.projects-grid {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cursor-pointer {
  cursor: pointer;
}

.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>

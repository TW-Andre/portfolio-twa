<script setup>
defineProps({
  projectData: {
    type: Object,
    required: true,
    validator: (obj) => {
      return obj.title && obj.description && obj.technologies && obj.features;
    }
  }
});

const openWindow = (url) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="project-detail">
    <!-- Header com titulo e botões de ação -->
    <div class="d-flex flex-column flex-sm-row align-center justify-space-between mb-6">
      <v-card-title class="text-h5 text-start ps-0">
        {{ projectData.title }}
      </v-card-title>
      
      <div class="d-flex gap-2 mt-4 mt-sm-0">
        <v-btn
          v-if="projectData.link"
          variant="flat"
          color="primary"
          prepend-icon="mdi-open-in-new"
          text="Visitar Projeto"
          class="me-2"
          @click="openWindow(projectData.link)"
        ></v-btn>
        <v-btn
          v-if="projectData.github"
          variant="flat"
          color="blue-darken-4"
          prepend-icon="mdi-github"
          text="GitHub"
          @click="openWindow(projectData.github)"
        ></v-btn>
      </div>
    </div>

   
    <v-card class="mb-6" variant="outlined">
      <v-card-text class="text-body-1">
        {{ projectData.description }}
      </v-card-text>
    </v-card>

   
    <!-- <v-row class="mb-6">
      
      <v-col cols="12" sm="6" md="3">
        <v-card class="h-100" variant="outlined">
          <v-card-text>
            <div class="text-caption text-medium-emphasis mb-2">
              <v-icon icon="mdi-calendar" size="small"></v-icon> Período
            </div>
            <div class="text-subtitle-2 font-weight-bold">
              {{ projectData.period }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      
      <v-col cols="12" sm="6" md="3">
        <v-card class="h-100" variant="outlined">
          <v-card-text>
            <div class="text-caption text-medium-emphasis mb-2">
              <v-icon icon="mdi-flag" size="small"></v-icon> Status
            </div>
            <v-chip
              :label="projectData.status"
              :color="projectData.statusColor || 'primary'"
              size="small"
            ></v-chip>
          </v-card-text>
        </v-card>
      </v-col>

      
      <v-col cols="12" sm="6" md="3">
        <v-card class="h-100" variant="outlined">
          <v-card-text>
            <div class="text-caption text-medium-emphasis mb-2">
              <v-icon icon="mdi-briefcase" size="small"></v-icon> Tipo
            </div>
            <div class="text-subtitle-2 font-weight-bold">
              {{ projectData.type }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>

     
      <v-col cols="12" sm="6" md="3">
        <v-card class="h-100" variant="outlined">
          <v-card-text>
            <div class="text-caption text-medium-emphasis mb-2">
              <v-icon icon="mdi-layers" size="small"></v-icon> Complexidade
            </div>
            <v-rating
              :model-value="projectData.complexity"
              color="amber"
              readonly
              size="x-small"
            ></v-rating>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->

    <!-- Entregas do projeto -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-star" size="small" class="me-2"></v-icon>
        O que o projeto oferece
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(feature, index) in projectData.features"
            :key="index"
            prepend-icon="mdi-check-circle"
            class="px-0"
          >
            <v-list-item-title class="text-body-2">
              {{ feature }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Resultados -->
    <v-card v-if="projectData.results" class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-chart-line" size="small" class="me-2"></v-icon>
        Resultados e Impacto
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(result, index) in projectData.results"
            :key="index"
            prepend-icon="mdi-check"
            class="px-0"
          >
            <v-list-item-title class="text-body-2">
              {{ result }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Stack Tecnológico -->
    <v-card v-if="projectData.technologies" class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-code-braces" size="small" class="me-2"></v-icon>
        Tecnologias utilizadas
      </v-card-title>
      <v-card-text>
        <div class="d-flex flex-wrap gap-2">
          <v-chip
            v-for="tech in projectData.technologies"
            :key="tech"
            variant="outlined"
            :text="tech"
          ></v-chip>
        </div>
      </v-card-text>
    </v-card>

    <!-- Desafios e aprendizados -->
    <v-card v-if="projectData.challenges" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-lightbulb" size="small" class="me-2"></v-icon>
        Desafios e Aprendizados
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(challenge, index) in projectData.challenges"
            :key="index"
            prepend-icon="mdi-arrow-right"
            class="px-0"
          >
            <v-list-item-title class="text-body-2">
              {{ challenge }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.project-detail {
  animation: slideIn 0.3s ease-in-out;
}

.project-detail :deep(.v-list-item-title) {
  white-space: normal;
  overflow-wrap: anywhere;
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
</style>

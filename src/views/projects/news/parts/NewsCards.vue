<script setup>
defineProps({
  news: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <v-row>
    <v-col v-if="loading" cols="12" class="text-center py-10">
      <v-progress-circular indeterminate color="primary" size="42" />
    </v-col>

    <v-col v-else-if="errorMessage" cols="12">
      <v-alert type="error" variant="tonal">
        {{ errorMessage }}
      </v-alert>
    </v-col>

    <v-col v-else-if="!news.length" cols="12">
      <v-alert type="info" variant="tonal">
        Nenhuma noticia encontrada para este genero.
      </v-alert>
    </v-col>

    <v-col
      v-for="(item, index) in news"
      :key="`${item.link || item.title}-${index}`"
      cols="12"
      sm="6"
      lg="4"
    >
      <v-card height="100%" border>
        <v-img
          :src="item.image || item.image_url"
          :alt="item.title"
          height="180"
          cover
        >
          <template #placeholder>
            <div class="d-flex align-center justify-center fill-height bg-grey-lighten-3">
              <v-icon icon="mdi-newspaper-variant-outline" size="42" color="grey-darken-1" />
            </div>
          </template>
          <template #error>
            <div class="d-flex align-center justify-center fill-height bg-grey-lighten-3">
              <v-icon icon="mdi-image-off-outline" size="42" color="grey-darken-1" />
            </div>
          </template>
        </v-img>

        <v-card-item>
          <v-card-title class="text-wrap">
            {{ item.title || "Sem titulo" }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.source?.name || "Fonte nao informada" }}
          </v-card-subtitle>
        </v-card-item>

        <v-card-text class="text-body-2">
          {{ item.description || "Sem descricao disponivel." }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            color="primary"
            prepend-icon="mdi-open-in-new"
          >
            Ler noticia
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

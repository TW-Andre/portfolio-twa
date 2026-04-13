<script setup>
defineProps({
  genres: {
    type: Array,
    required: true,
  },
  selectedGenre: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:selectedGenre"]);

const setGenre = (genre) => {
  emit("update:selectedGenre", genre);
};
</script>

<template>
  <v-card flat border class="mb-4">
    <v-card-text class="py-4">
      <v-toolbar density="comfortable" color="transparent" class="px-0">
        <v-toolbar-title class="text-subtitle-1 font-weight-bold">
          Filtrar por genero
        </v-toolbar-title>
      </v-toolbar>

      <div class="d-flex flex-wrap ga-2 mt-2">
        <v-chip
          v-for="genre in genres"
          :key="genre"
          :color="selectedGenre === genre ? 'primary' : 'default'"
          :variant="selectedGenre === genre ? 'flat' : 'outlined'"
          rounded="pill"
          @click="setGenre(genre)"
        >
          {{ genre }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

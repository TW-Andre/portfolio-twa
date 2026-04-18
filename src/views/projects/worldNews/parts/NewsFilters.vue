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
      <div class="d-flex flex-wrap ga-2">
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

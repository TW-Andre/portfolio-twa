<script setup>
import { computed, onMounted, ref } from "vue";
import NewsFilters from "@/views/projects/news/parts/NewsFilters.vue";
import NewsCards from "@/views/projects/news/parts/NewsCards.vue";

const breadcrumb = [
  {
    title: "Projetos",
    disabled: true,
  },
  {
    title: "Noticias",
    disabled: false,
  },
];

const ALL_GENRES = "Todos";

const news = ref([]);
const selectedGenre = ref(ALL_GENRES);
const isLoading = ref(false);
const errorMessage = ref("");

const genreRules = [
  { genre: "Tecnologia", keywords: ["tecnologia", "ia", "inteligencia artificial", "software", "app", "digital"] },
  { genre: "Esportes", keywords: ["futebol", "esporte", "campeonato", "copa", "atleta", "time"] },
  { genre: "Negocios", keywords: ["mercado", "empresa", "negocio", "economia", "financas", "investimento"] },
  { genre: "Saude", keywords: ["saude", "hospital", "medicina", "vacina", "virus", "doenca"] },
  { genre: "Politica", keywords: ["politica", "governo", "senado", "camara", "eleicao", "presidente"] },
  { genre: "Entretenimento", keywords: ["filme", "serie", "musica", "show", "celebridade", "cinema"] },
];

const normalizeText = (value = "") =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const classifyGenre = (article) => {
  const fallbackCategory = article.category || article.genre;

  if (fallbackCategory) {
    return fallbackCategory;
  }

  const text = normalizeText(`${article.title || ""} ${article.description || ""}`);
  const matched = genreRules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(keyword)),
  );

  return matched?.genre || "Geral";
};

const newsWithGenre = computed(() =>
  news.value.map((item) => ({
    ...item,
    genre: classifyGenre(item),
  })),
);

const genres = computed(() => {
  const dynamicGenres = [...new Set(newsWithGenre.value.map((item) => item.genre))];
  return [ALL_GENRES, ...dynamicGenres];
});

const filteredNews = computed(() => {
  if (selectedGenre.value === ALL_GENRES) {
    return newsWithGenre.value;
  }

  return newsWithGenre.value.filter((item) => item.genre === selectedGenre.value);
});

onMounted(async () => {
  try {
    isLoading.value = true;
    errorMessage.value = "";

    const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/news.php?q=portfolio&lang=pt&max=8`,
    );
    const data = await res.json();
    news.value = data.articles || [];
  } catch (err) {
    console.error("Erro ao buscar noticias", err);
    errorMessage.value = "Nao foi possivel carregar as noticias no momento.";
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <v-card flat class="mt-3 px-lg-5 px-3 pb-5">
    <v-breadcrumbs class="pb-0" :items="breadcrumb"></v-breadcrumbs>

    <v-card class="ma-0 my-3 pa-0" flat>
      <v-card-text class="d-flex align-center justify-space-between flex-wrap ga-2">
        <v-card-title class="text-start pa-0">
          Noticias
        </v-card-title>
        <v-chip color="primary" variant="tonal" prepend-icon="mdi-newspaper-variant-outline">
          API de noticias
        </v-chip>
      </v-card-text>
    </v-card>

    <NewsFilters
      :genres="genres"
      :selected-genre="selectedGenre"
      @update:selected-genre="selectedGenre = $event"
    />

    <NewsCards
      :news="filteredNews"
      :loading="isLoading"
      :error-message="errorMessage"
    />
  </v-card>
</template>

<style scoped>
</style>

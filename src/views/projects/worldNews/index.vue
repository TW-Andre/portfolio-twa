<script setup>
import { computed, onMounted, ref } from "vue";
import NewsFilters from "@/views/projects/worldNews/parts/NewsFilters.vue";
import NewsCards from "@/views/projects/worldNews/parts/NewsCards.vue";

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
const BASE_GENRES = [
  "Atualidades",
  "Negocios",
  "Automotivo",
  "Tecnologia",
  "Esportes",
  "Saude",
  "Politica",
  "Entretenimento",
];

const news = ref([]);
const selectedGenre = ref(ALL_GENRES);
const isLoading = ref(false);
const errorMessage = ref("");

const genreRules = [
  {
    genre: "Negocios",
    keywords: [
      "mercado",
      "empresa",
      "empresas",
      "negocio",
      "negocios",
      "economia",
      "economico",
      "economica",
      "financas",
      "financeiro",
      "financeira",
      "investimento",
      "investimentos",
      "inflacao",
      "juros",
      "ibovespa",
      "bolsa",
      "dolar",
      "receita",
      "lucro",
      "faturamento",
    ],
  },
  {
    genre: "Automotivo",
    keywords: [
      "automotivo",
      "automovel",
      "automoveis",
      "carro",
      "carros",
      "veiculo",
      "veiculos",
      "moto",
      "motos",
      "montadora",
      "eletrico",
      "hibrido",
    ],
  },
  { genre: "Tecnologia", keywords: ["tecnologia", "ia", "inteligencia artificial", "software", "app"] },
  { genre: "Esportes", keywords: ["futebol", "esporte", "campeonato", "copa", "atleta", "time"] },
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
    const normalizedCategory = normalizeText(fallbackCategory);
    if (normalizedCategory === "geral" || normalizedCategory === "general") {
      return "Atualidades";
    }
    return fallbackCategory;
  }

  const text = normalizeText(`${article.title || ""} ${article.description || ""}`);
  const scoreByGenre = {};

  genreRules.forEach((rule) => {
    const score = rule.keywords.reduce((total, keyword) => {
      return total + (text.includes(keyword) ? 1 : 0);
    }, 0);
    scoreByGenre[rule.genre] = score;
  });

  let selected = "Atualidades";
  let maxScore = 0;

  Object.entries(scoreByGenre).forEach(([genre, score]) => {
    if (score > maxScore) {
      maxScore = score;
      selected = genre;
    }
  });

  return selected;
};

const newsWithGenre = computed(() =>
  news.value.map((item) => ({
    ...item,
    genre: classifyGenre(item),
  })),
);

const genres = computed(() => {
  const dynamicGenres = [...new Set(newsWithGenre.value.map((item) => item.genre))];
  return [ALL_GENRES, ...new Set([...BASE_GENRES, ...dynamicGenres])];
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

    <v-footer class="mt-6 pa-0 bg-transparent" elevation="0">
      <v-card class="w-100 border rounded-lg" variant="outlined">
        <v-card-title class="text-h6 font-weight-bold">
          Resumo do projeto
        </v-card-title>
        <v-card-text class="text-subtitle-1">
          <ul class="ml-5">
            <li>
              Consumo de API para buscar notícias em tempo real.
            </li>
            <li>
              Exibição dos resultados em cards com imagem, titulo, fonte e descrição.
            </li>
            <li>
              Filtro por gênero no topo para facilitar a navegação dos conteúdos.
            </li>
            <li>
              Separação em componentes para manter o código organizado e de fácil manutenção.
            </li>
            <li>
              Quando a API não envia categoria, o sistema usa palavras-chave do título e da descrição para definir o filtro mais adequado.
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<style scoped>
</style>

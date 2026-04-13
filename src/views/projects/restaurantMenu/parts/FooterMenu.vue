<script setup>
</script>

<template>
  <v-card class="mt-4 mb-6 p-0" variant="flat" border>
    <v-card-title class="text-subtitle-1 font-weight-medium">
      Como este menu foi montado (visão rápida)
    </v-card-title>

    <v-card-text class="text-body-2 text-medium-emphasis">
      <p class="mb-3">
        Abaixo estão os principais hábitos de código que o componente
        <strong>RestaurantMenu.vue</strong> aplica — em linguagem simples, com alguns nomes que você
        costuma ver em projetos Vue 3.
      </p>

      <v-list density="compact" class="bg-transparent pa-0">
        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-code-tags</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Composition API com <code>&lt;script setup&gt;</code></strong> — a lógica (estado,
            funções e ciclo de vida) fica no topo do arquivo, sem precisar declarar um objeto
            <code>export default</code>. O Vue “monta” tudo automaticamente no componente.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-database-sync</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Estado reativo com <code>ref</code></strong> — variáveis como carregamento
            (<code>isLoading</code>), filtro ativo (<code>categorySelected</code>) e lista de pratos
            (<code>optionsMenu</code>) são “refs”. Quando o <code>.value</code> muda, o template
            atualiza sozinho (reatividade).
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-download-outline</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Busca de dados assíncrona</strong> — a função <code>fetchPage</code> simula (ou no
            futuro substitui por) uma chamada à API. O fluxo típico é: ligar o loading, buscar dados,
            tratar erro no <code>try/catch</code> e, no <code>finally</code>, desligar o loading para a
            interface nunca “ficar presa”.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-calendar-start</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong><code>onMounted</code> (ciclo de vida)</strong> — assim que o componente aparece na
            tela, o menu chama <code>fetchPage()</code>. É o lugar certo para carregar dados que dependem
            do DOM ou da navegação já ter acontecido.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-filter-variant</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Filtro por categoria</strong> — os botões só atualizam
            <code>categorySelected</code>. No template, o <code>v-for</code> percorre todos os itens e o
            <code>v-show</code> usa <code>item.category.includes(categorySelected)</code>: cada prato pode
            pertencer a várias categorias (ex.: <code>"all"</code> + <code>"meal"</code>), e o filtro
            decide se o card fica visível — sem remover itens da lista na memória.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-view-grid-outline</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Layout com Vuetify (<code>v-row</code> / <code>v-col</code>)</strong> — a grade
            responsiva organiza botões e cards. Classes como <code>cols="12"</code> e
            <code>lg="6"</code> fazem os cartões empilharem no celular e ficarem em duas colunas em
            telas grandes.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-loading</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Feedback de carregamento (<code>v-overlay</code>)</strong> — enquanto
            <code>isLoading</code> é verdadeiro, um overlay com spinner cobre a área relevante. A
            imagem do prato só renderiza quando <code>!isLoading</code>, evitando “piscar” conteúdo
            incompleto.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-image-multiple</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Imagens locais e remotas</strong> — fotos importadas de
            <code>@/assets/...</code> viram URLs estáveis no build (Vite resolve o caminho). URLs
            externas continuam como string; o <code>v-img</code> usa o mesmo atributo
            <code>:src</code> nos dois casos.
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="px-0 align-start">
          <template #prepend>
            <v-icon size="small" class="me-2 mt-1" color="primary">mdi-cloud-outline</v-icon>
          </template>
          <v-list-item-title class="text-wrap text-body-2">
            <strong>Evolução para backend</strong> — há trecho comentado com Firebase/Firestore
            (<code>getDocs</code> / <code>collection</code>). A ideia é trocar o array fixo por
            documentos reais no banco, mantendo a mesma estrutura de lista no front.
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>
code {
  font-size: 0.9em;
}
</style>

<script setup>

const header = ref({
	title: "Bem-vindo(a) ao Projet's Menu.",
	introduction: "Neste espaço, apresento um projeto desenvolvido utilizando a poderosa tecnologia Vue.js, que permite criar interfaces de usuário interativas e reativas de forma eficiente. Com uma arquitetura baseada em componentes, o Vue ajuda a manter o código organizado e fácil de manter.\n" +
	"Nesta página, você encontrará uma seleção de cards de preview, que oferecem uma amostra do que está por vir. Também exibe as ferramentas utilizadas. Cada card destacará diferentes recursos e funcionalidades que estou explorando, refletindo o meu conhecimento e habilidades no desenvolvimento front-end.\n" +
	"No final de cada página de projeto, haverá uma breve explicação dos conceitos utilizados no desenvolvimento.",
	emphase: "Este é um projeto em desenvolvimento, então haverá melhorias constantes ao decorrer do tempo."
})

</script>

<template>
	
	<v-card-title class="text-center my-7">
		<h2>{{ header.title }}</h2>
	</v-card-title>
	
	<v-card-text class="text-start">
		<v-row>
<!--			<v-col cols="6">
				<v-img
					height="250"
					src="https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-173524.jpg?t=st=1744083909~exp=1744087509~hmac=7d8f03af133a67f7c00f3ac2adf32ad20c46040da6fb928358329a98cf9b4618&w=740"
				></v-img>
			</v-col>-->
			<v-col cols="12" sm="6" class="text-uppercase">
				<strong>Imagina um conteúdo aqui, tipo uma imagem</strong>
			</v-col>
			
			<v-col cols="12" md="6" style="font-size: 1.1rem;">
				<p>{{ header.introduction }}</p>
				<span style="font-weight: 600">{{ header.emphase }}</span>
			</v-col>
		</v-row>
	</v-card-text>

</template>

<style scoped>

</style>

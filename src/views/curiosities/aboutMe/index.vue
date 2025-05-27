<script setup>
import { userStore } from "@/stores/authStore";
import SkillsAndExperience from "@/views/curiosities/aboutMe/parts/SkillsAndExperience.vue";

const user = userStore();

const breadcrumb = [
	{
		title: 'Curiosidades',
		disabled: true,
	},
	{
		title: 'Sobre mim',
		disabled: false,
	},
];

const aboutMeContent = {
	title: "Sobre mim",
	introduction: "Olá! Eu sou o André, um desenvolvedor web especializado em front-end com Vue.js.",
	experience: "Experiência em 3 projetos, estando 2 deles atualmente em desenvolvimento. Abaixo, há um pouco mais de informações.",
	// Estou cursando Análise e Desenvolvimento de Sistemas há 2 anos, pela Universidade do Vale do Rio dos Sinos (UNISINOS).
	professionalExperience: [
		{
			company: "Projeto para: Geoblue - Soluções Ambientais",
			role: "Desenvolvedor Front-End - Vue.js",
			period: "2024 - Presente"
		},
		{
			company: "Projeto para: Prodata - Gestão de Empresas",
			role: "Desenvolvedor Front-End - Vue.js",
			period: "2024"
		}
	],
	lifeAcademic: {
		university: 'Universidade do Vale do Rio dos Sinos (UNISINOS)',
		time: '2023 - 2026',
		course: 'Análise e Desenvolvimento de Sistemas',
	},
	skills: [
		"Interface de usuário responsiva",
		"Gerenciamento de estado com Pinia",
		"Roteamento com Vue Router",
		"Implementação de autenticação e autorização",
		"Consumo de API's",
		"Versionamento de código com Git",
		"Trabalho em equipe com metodologias ágeis",
		"Proatividade e autonomia"
	],
};

const buttonActios = [
	{
		title: 'Currículo',
		link: 'https://drive.google.com/file/d/1E7jqgkXU59lCGVXd6_ljx7BY4m1BCLGG/view?usp=drive_link',
		color: 'black',
		icon: 'mdi-open-in-new'
	},
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/andredossantosjp/',
		color: 'blue',
		icon: 'mdi-linkedin'
	},
	{
		title: 'Github',
		link: 'https://github.com/TW-Andre',
		color: 'blue-darken-4',
		icon: 'mdi-github'
	},
];

const openWindow = (url)=>{
	window.open(url, '_blank')
}

</script>

<template>
	<v-card class="mt-3 px-lg-15 px-3" flat>
		<v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
		
		<div class="d-block d-sm-flex align-center justify-center justify-sm-start">
			<v-card-title class="text-start text-h5">
				{{ aboutMeContent.title }}
			</v-card-title>
			
			<v-btn-group
				v-for="(item, index) in buttonActios"
			>
				
				<v-hover class="d-flex">
					<template v-slot:default="{isHovering, props}">
						<v-btn
							:variant="!isHovering ? 'flat' : 'outlined'"
							v-bind="props"
							class="border-none text-subtitle-2 text-sm-subtitle-1"
							:class="[index === 1 ? 'mx-3' : '']"
							:color="item.color"
							:prepend-icon="item.icon"
							:text="item.title"
							@click="openWindow(item.link)"
						></v-btn>
					</template>
				</v-hover>
			</v-btn-group>
			<a class="" download=""></a>
		</div>
		
		<v-card class="mt-3 mb-10">
			<v-card-text class="text-body-1">
				<p class="text-h6 mb-4">{{ aboutMeContent.introduction }}</p>
				<p class="mb-4">{{ aboutMeContent.experience }}</p>
				
				<SkillsAndExperience :aboutMeContent="aboutMeContent" />
			</v-card-text>
		</v-card>
	</v-card>
</template>

<style scoped>
.v-card {
	border-radius: 8px;
}

.v-list-item {
	min-height: 40px;
}
</style>

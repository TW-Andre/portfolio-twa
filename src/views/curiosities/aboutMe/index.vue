<script setup>
import { userStore } from "@/stores/authStore";

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
	experience: "Experiência em 3 projetos, estando 2 deles atualmente em desenvolvimento. Estou cursando Análise e Desenvolvimento de Sistemas há 2 anos, pela Universidade do Vale do Rio dos Sinos (UNISINOS).",
	skills: [
		"Vue.js",
		"Interface de usuário responsiva",
		"Gerenciamento de estado com Pinia",
		"Roteamento com Vue Router",
		"Implementação de autenticação e autorização",
		"Consumo de API's",
		"Versionamento de código com Git",
		"Trabalho em equipe com metodologias ágeis",
		"Proatividade e autonomia"
	],
	professionalExperience: [
		{
			company: "Geoblue - Soluções Ambientais",
			role: "Desenvolvedor Front-End - Vue.js",
			period: "2024 - Presente"
		},
		{
			company: "Prodata - Gestão de Empresas",
			role: "Desenvolvedor Front-End - Vue.js",
			period: "2024"
		}
	]
};
</script>

<template>
	<v-card class="mt-3 px-lg-15 px-3" flat>
		<v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
		
		<v-card-title class="text-start text-h4 mb-6">
			{{ aboutMeContent.title }}
		</v-card-title>
		
		<v-card-text class="text-body-1 mb-6">
			<p class="text-h6 mb-4">{{ aboutMeContent.introduction }}</p>
			<p class="mb-4">{{ aboutMeContent.experience }}</p>
			
			<v-card class="pa-4 mb-6" variant="outlined">
				<v-card-title class="text-h6 mb-2">Habilidades</v-card-title>
				<v-list>
					<v-list-item
						v-for="(skill, index) in aboutMeContent.skills"
						:key="index"
						prepend-icon="mdi-check-circle"
						class="text-body-1"
					>
					<p class="text-body-1">
						{{ skill }}
					</p>
				</v-list-item>
				</v-list>
			</v-card>
			
			<v-card class="pa-4" variant="outlined">
				<v-card-title class="text-h6 mb-2">Experiência Profissional</v-card-title>
				<v-card-text>
					<v-list>
						<v-list-item
							v-for="(exp, index) in aboutMeContent.professionalExperience"
							:key="index"
							class="px-0"
						>
							<template v-slot:prepend>
								<v-icon icon="mdi-briefcase" color="primary" class="me-2"></v-icon>
							</template>
							<v-list-item-title class="text-subtitle-1 font-weight-bold">
								{{ exp.company }}
							</v-list-item-title>
							<v-list-item-subtitle class="text-body-2">
								{{ exp.role }}
							</v-list-item-subtitle>
							<v-list-item-subtitle class="text-caption text-medium-emphasis">
								{{ exp.period }}
							</v-list-item-subtitle>
						</v-list-item>
					</v-list>
				</v-card-text>
			</v-card>
		</v-card-text>
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

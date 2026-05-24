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
   introduction: "Olá! Sou o André, um Desenvolvedor Web Full-Stack com forte base em Front-End (Vue.js e React) e experiência em Back-End (PHP, Python) e Bancos de Dados. Especializado em entregar aplicações web completas, seguras e responsivas, com foco em qualidade e performance.",
   experience: "Possuo experiência no desenvolvimento ponta a ponta de aplicações, desde a modelagem de dados e criação de APIs até o deploy e monitoramento em produção. Trabalho com análise crítica de projetos, debuggen em ambientes de produção e otimização de performance.",
   professionalExperience: [
      {
         company: "Projeto Autônomo: Cartão de Visitas Digital (Em Produção)",
         role: "Desenvolvedor Full-Stack (React, QR Code, Deploy, Integração)",
         period: "2024 - Presente"
      },
      {
         company: "Projeto Autônomo: Loja Virtual E-commerce",
         role: "Desenvolvedor Full-Stack (React, Autenticação, Gerenciamento de Permissões, Painel Admin)",
         period: "2024"
      },
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
   academicLife: {
      university: 'Universidade do Vale do Rio dos Sinos (UNISINOS)',
      time: '2023 - 2026',
      course: 'Análise e Desenvolvimento de Sistemas',
   },
   skills: [
      "Front-End: Vue.js (Pinia, Router) e React com TypeScript",
      "Back-End: PHP e Python - criação e consumo de APIs RESTful",
      "Banco de Dados: Modelagem, PostgreSQL, criação e configuração segura",
      "Autenticação: Implementação de sistemas de login e controle de acesso (Admin/Usuário)",
      "DevOps: Deploy, hospedagem de domínio, debugging em produção e monitoramento",
      "Análise Crítica: Avaliação de erros em produção, otimização e resolução de problemas",
      "Ferramentas: Git/Bitbucket, Npm, Node.js, Jira e versionamento",
      "Metodologias: Trabalho Ágil (Kanban), proatividade e arquitetura de sistemas"
   ],
   technicalFocus: [
      {
         area: "Frontend",
         description: "Desenvolvimento de interfaces responsivas com Vue.js e React, componentização eficiente e gerenciamento de estado"
      },
      {
         area: "Backend",
         description: "Criação de APIs RESTful robustas, validação de dados, autenticação segura e lógica de negócio"
      },
      {
         area: "Banco de Dados",
         description: "Modelagem relacional, otimização de queries, implementação de constraints e segurança"
      },
      {
         area: "Full-Stack",
         description: "Desenvolvimento completo de aplicações, da especificação ao deploy e manutenção em produção"
      }
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
	<v-card class="mt-3 px-lg-10 px-3" flat>
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
		
		<!-- Introdução -->
		<v-card class="mt-3 mb-6" variant="outlined">
			<v-card-text class="text-body-1">
				<p class="text-h6 mb-4">{{ aboutMeContent.introduction }}</p>
				<p class="mb-0">{{ aboutMeContent.experience }}</p>
			</v-card-text>
		</v-card>

		<!-- Áreas de Foco -->
		<v-card class="mb-6" variant="outlined">
			<v-card-title class="text-subtitle-1">
				<v-icon icon="mdi-target" size="small" class="me-2"></v-icon>
				Áreas de Foco
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col v-for="focus in aboutMeContent.technicalFocus" :key="focus.area" cols="12" md="6">
						<v-card variant="flat" class="h-100">
							<v-card-text>
								<div class="text-subtitle-2 font-weight-bold mb-2">{{ focus.area }}</div>
								<p class="text-body-2 mb-0">{{ focus.description }}</p>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		
		<!-- Experiência Profissional -->
		<v-card class="mb-6" variant="outlined">
			<v-card-title class="text-subtitle-1">
				<v-icon icon="mdi-briefcase" size="small" class="me-2"></v-icon>
				Experiência Profissional
			</v-card-title>
			<v-card-text>
				<v-timeline
					side="start"
					layout="compact"
				>
					<v-timeline-item
						v-for="(exp, index) in aboutMeContent.professionalExperience"
						:key="index"
						:dot-color="index % 2 === 0 ? 'primary' : 'success'"
					>
						<div>
							<div class="text-subtitle-2 font-weight-bold">{{ exp.company }}</div>
							<div class="text-body-2 text-medium-emphasis">{{ exp.role }}</div>
							<div class="text-caption text-disabled">{{ exp.period }}</div>
						</div>
					</v-timeline-item>
				</v-timeline>
			</v-card-text>
		</v-card>
		
		<!-- Skills e Stack Tecnológico -->
		<SkillsAndExperience :aboutMeContent="aboutMeContent" />
		
		<!-- Formação Acadêmica -->
		<v-card class="my-6">
			<v-card-title class="text-subtitle-1">
				<v-icon icon="mdi-school" size="small" class="me-2"></v-icon>
				Formação Acadêmica
			</v-card-title>
			<v-card-text>
				<v-list-item>
					<v-list-item-title class="text-subtitle-2 font-weight-bold">
						{{ aboutMeContent.academicLife.course }}
					</v-list-item-title>
					<v-list-item-subtitle class="text-body-2">
						{{ aboutMeContent.academicLife.university }}
					</v-list-item-subtitle>
					<v-list-item-subtitle class="text-caption">
						{{ aboutMeContent.academicLife.time }}
					</v-list-item-subtitle>
				</v-list-item>
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

<script setup>
import previewMenu from "@/assets/previewImages/PreviewMenuRestaurant.png";
import previewPet from '@/assets/previewImages/PreviewMissaoMeuPet.png';
import previewNews from '@/assets/previewImages/PreviewNews.png';
import previewDBUsers from '@/assets/previewImages/PreviewDBUsers.png';
import previewNexus from '@/assets/previewImages/PreviewNexus.png';
import previewDriver from '@/assets/previewImages/PreviewDriver.png';
import ComingSoonGreen from "@/assets/previewImages/ComingSoonGreen.jpg";
import {RouterLink} from "vue-router";
import {useDisplay} from "vuetify/framework";
import CarouselComponent from "@/components/projectsPreview/Carousel/CarouselComponent.vue";
import MobileCardsComponent from "@/components/projectsPreview/MobileCards/MobileCardsComponent.vue";

const { mobile } = useDisplay();
const jsonProjects = [
	{
		id: 1,
		title: "Motorista Particular",
		src: previewDriver,
		description: "Cartão de visita digital para um motorista particular, com informações de contato e serviços oferecidos.",
		link: 'https://andreprado.vercel.app/'
	},
	{
		id: 2,
		title: "Projeto Nexus",
		src: previewNexus,
		description: "Projeto de loja virtual, com catálogo de produtos, gerenciamento de permissões usuários / admin.",
		link: 'https://nexus-store-mocha.vercel.app/'
	},
	{
		id: 3,
		title: "Notícias do Mundo",
		src: previewNews,
		description: "Consumo de API para buscar notícias em tempo real.",
		link: '/projetos/news'
	},
	{
		id: 4,
		title: "Gerenciamento de Usuários",
		src: previewDBUsers,
		description: "Listagem e cadastro de usuários em banco de dados.",
		link: '/projetos/gerenciamento-usuarios'
	},
	{
		id: 5,
		title: "Missao Meu Pet",
		src: previewPet,
		description: "Atividade acadêmica com intuito de auxiliar o resgate de pets durante e após enchente no RS em 2024.",
		link: '',
		href: 'https://missao-pet.vercel.app/'
	},
	{
		id: 6,
		title: "Menu de Restaurante",
		src: previewMenu,
		description: "Um simples menu, com filtro para as opções.",
		link: '/projetos/menurestaurante'
	},
]

</script>

<template>
	
	<v-container class="previewCards_container">
		<v-card-text
			v-show="mobile"
			class="text-center pt-0"
		>
			<p>Seção de cards com <span class="font-italic font-weight-bold">preview</span> de mini-projetos desenvolvidos dentro da aplicação.</p>
			<p>Cada um deles explora diferentes conceitos, expondo alguns conhecimentos.</p>
		</v-card-text>
		
		<CarouselComponent v-if="!mobile" :jsonProjects="jsonProjects"/>
		
		<MobileCardsComponent v-if="mobile" :jsonProjects="jsonProjects" />
		
		<v-card-text
			v-show="!mobile"
			class="text-center mt-3 pb-0"
		>
			<p>Esse <span class="font-italic font-weight-bold">carrossel</span> de cards representa um <span class="font-italic font-weight-bold">preview</span> de mini-projetos desenvolvidos dentro da aplicação.</p>
			<p>Cada um deles explora diferentes conceitos, expondo alguns conhecimentos.</p>
		</v-card-text>
	</v-container>
	
</template>

<style scoped lang="scss">

</style>

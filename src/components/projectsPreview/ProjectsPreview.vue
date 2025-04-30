<script setup>
import previewMenu from "@/assets/previewImages/PreviewMenuRestaurant.png";
import previewPet from '@/assets/previewImages/PreviewMissaoMeuPet.png';
import ComingSoonGreen from "@/assets/previewImages/ComingSoonGreen.jpg";
import {RouterLink} from "vue-router";
import {useDisplay} from "vuetify/framework";
import CarouselComponent from "@/components/projectsPreview/Carousel/CarouselComponent.vue";
import MobileCardsComponent from "@/components/projectsPreview/MobileCards/MobileCardsComponent.vue";

const { mobile } = useDisplay();
const jsonProjects = [
	{
		id: 1,
		title: "Menu de Restaurante",
		src: previewMenu,
		description: "Um simples menu, com filtro para as opções.",
		link: '/projetos/menurestaurante'
	},
	{
		id: 2,
		title: "Missao Meu Pet",
		src: previewPet,
		description: "Atividade acadêmica com intuito de auxiliar o resgate de pets durante e após enchente no RS em 2024.",
		link: '',
		href: 'https://missao-pet.vercel.app/'
	},
	{
		id: 3,
		title: "Projeto em Desenvolvimento 2",
		src: ComingSoonGreen,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		link: '/'
	},
	{
		id: 4,
		title: "Projeto em Desenvolvimento 3",
		src: ComingSoonGreen,
		description: "Neste projeto, será trabalhado requisição com banco de dados.",
		link: '/'
	},
	{
		id: 5,
		title: "Projeto em Desenvolvimento 4",
		src: ComingSoonGreen,
		description: "Lorem ipsum dolor sit amet, consectetur elit.",
		link: '/'
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

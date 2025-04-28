<script setup >
import {RouterLink} from "vue-router";
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

let { jsonProjects } = defineProps(['jsonProjects']);

const carouselConfig = {
	itemsToShow: 3,
	wrapAround: true,
	autoplay: 2500,
	pauseAutoplayOnHover: true,
	transition: 500,
	gap: 1
}
</script>

<template>
	
	<v-card-title
		class="text-h5 text-decoration-underline text-capitalize pt-0"
		style="width: 80%; margin-left: 11%"
	>
		Desenvolvimentos em Destaque
	</v-card-title>
	
	<Carousel v-bind="carouselConfig" class="mx-auto">
		<Slide v-for="item in jsonProjects" :key="item.id">
			<div class="carousel__item">
				<v-card class="mx-auto">
					<v-img class="carousel__card_img" :src="item.src" height="200" cover></v-img>
					<div class="carousel__card_div">
						<v-card-title>{{ item.title }}</v-card-title>
						<v-card-text>{{ item.description }}</v-card-text>
						<v-card-actions>
							<v-btn
								color="success"
								variant="outlined"
								:to="item.link"
								:disabled="item.link === '/'"
								style=""
							>Ver Projeto</v-btn>
						</v-card-actions>
					</div>
				</v-card>
			</div>
		</Slide>
		
		<template class="w-100">
			<Navigation class="w-100"/>
		</template>
	</Carousel>
</template>

<style scoped>

</style>

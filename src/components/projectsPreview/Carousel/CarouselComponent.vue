<script setup >
import {RouterLink} from "vue-router";
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

let { jsonProjects } = defineProps(['jsonProjects']);

const carouselConfig = {
	itemsToShow: 3.5,
	wrapAround: true,
	autoplay: 4000,
	pauseAutoplayOnHover: true,
}
</script>

<template>
	<Carousel v-bind="carouselConfig">
		<Slide v-for="item in jsonProjects" :key="item.id">
			<div class="carousel__item">
				<v-card class="w-100 mx-auto">
					<v-img class="carousel__card_img" :src="item.src" height="200" cover></v-img>
					<div class="carousel__card_div">
						<v-card-title>{{ item.title }}</v-card-title>
						<v-card-text>{{ item.description }}</v-card-text>
						<v-card-actions>
							<v-btn
								color="success"
								variant="outlined"
								:to="item.link"
								style=""
							>Ver Projeto</v-btn>
						</v-card-actions>
					</div>
				</v-card>
			</div>
		</Slide>
		
		<!--			<Navigation class="w-100"/>-->
	</Carousel>
</template>

<style scoped>

</style>

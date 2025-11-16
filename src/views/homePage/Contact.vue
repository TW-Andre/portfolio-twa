<script setup>

const linkedinUrl = "https://www.linkedin.com/in/andredossantosjp/";
const githubUrl   = "https://github.com/TW-Andre/";

let loadStyles1 = ref(false);
let loadStyles2 = ref(false);

const openSocialMedia = (item) => {
	window.open(item, 'blank');
}
</script>

<template>
	<v-container class="text-center px-md-10 pt-0" fluid>
		<v-card-title class="text-h5 text-capitalize pt-0">
			<h3>Contato</h3>
		</v-card-title>
		
		<v-card-text  class="">
			Se quiser entrar em contato ou ver o projeto, pode me chamar no LinkedIn ou acompanhar no GitHub.
		</v-card-text>
		
		<v-card-text class="pa-0">
			<v-icon
				icon="mdi mdi-linkedin"
				:color="loadStyles1 ? 'teal-accent-4' : 'black'"
				size="80"
				@mouseover="loadStyles1 = !loadStyles1"
				@mouseout="loadStyles1 = !loadStyles1"
				@click="openSocialMedia(linkedinUrl)"
			></v-icon>
			<v-icon
				icon="mdi mdi-github"
				:color="loadStyles2 ? 'teal-accent-4' : 'black'"
				size="80"
				@mouseover="loadStyles2 = !loadStyles2"
				@mouseout="loadStyles2 = !loadStyles2"
				@click="openSocialMedia(githubUrl)"
			></v-icon>
		</v-card-text>
	
	</v-container>
</template>

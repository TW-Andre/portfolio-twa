<script setup>
import {userStore} from "@/stores/authStore";

// const linkedinUrl = "https://www.linkedin.com/in/andredossantosjp/";

let user    = userStore();
let loadStyles1 = ref(false);
let loadStyles2 = ref(false);
/*const iconStyles  = {
	classes: [''],
	color: 'teal-accent-4'
};*/

const header = ref({
	title: "Bem-vindo(a)",
	// introduction: "Eu sou o André! Um desenvolvedor web especializado em front-end com Vue.Js. Próximo de 1 ano de experiência, com participação em 3 projetos. Destes, 2 atualmente em desenvolvimento, para a ",
	introduction: "Eu sou o André! Desenvolvedor web especializado em front-end com Vue.Js.",
	company: "Geoblue - Soluções Ambientais",
	briefing: "Sinta-se a vontade para explorar esta aplicação e conhecer um pouco de minhas habilidades.",
	emphase: "Este é um projeto em desenvolvimento, então haverá melhorias constantes ao decorrer do tempo."
	/*introduction: "Este projeto foi desenvolvido utilizando a tecnologia Vue.js, que permite criar interfaces de usuário interativas e reativas de forma eficiente. Com uma arquitetura baseada em componentes, o Vue ajuda a manter o código organizado e fácil de manter.\n" +
	"Sinta-se livre para explorar! Logo abaixo há cards que destacaram diferentes recursos e funcionalidades que estou combinando, refletindo o meu conhecimento e habilidades no desenvolvimento front-end.\n",*/
})

/*const openSocialMedia = () => {
	window.open(linkedinUrl, 'blank');
}*/
</script>

<template>
	
	<div class="image-mask-about-me">
		<v-container class="container_about-me px-sm-15" fluid>
			
			<v-card
				class="top-0 mt-5" color="transparent"
				flat
			>
				<v-card-title
					class="text-center text-uppercase text-white pt-0"
				>
					<v-card-text class="text-lg-h1 text-md-h2 text-h5 ma-0 pa-0 pt-5">{{ header.title }}, {{ user.user }}!</v-card-text>
				</v-card-title>
				
				<v-card flat class="mt-14" color="transparent">
					<v-row>
						<v-col cols="12" md="8" lg="7" style="font-size: 1.2rem;">
							<v-card class="text-white pa-sm-10 pa-4 text-md-h5" flat>
								<p>{{ header.introduction }}</p>
<!--									<span class="font-weight-bold">{{ header.company }}</span>.-->
								<p>{{ header.briefing }}</p>
								<span class="font-italic" style="font-weight: 600">{{ header.emphase }}</span>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
				
			</v-card>
			
	<!--		<v-card-text class="mt-4 pa-0">
				<v-icon
					icon="mdi mdi-linkedin"
					:color="loadStyles1 ? 'teal-accent-4' : 'white'"
					size="45"
					@mouseover="loadStyles1 = !loadStyles1"
					@mouseout="loadStyles1 = !loadStyles1"
					@click="openSocialMedia"
				></v-icon>
				<v-icon
					icon="mdi mdi-github"
					:color="loadStyles2 ? 'teal-accent-4' : 'white'"
					size="45"
					@mouseover="loadStyles2 = !loadStyles2"
					@mouseout="loadStyles2 = !loadStyles2"
					@click="openSocialMedia"
				></v-icon>
			</v-card-text>-->
		
		</v-container>
	</div>
</template>

<style scoped>

</style>

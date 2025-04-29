<script setup>
import {userStore} from "@/stores/authStore";

let user    = userStore();

const header = ref({
	title: "Bem-vindo(a)",
	introduction: "André dos Santos",
	company: "Geoblue - Soluções Ambientais",
	briefing: "Desenvolvedor Front-End",
	emphase: "Este é meu portfólio. Sinta-se à vontade para explorar"
});

/*
const header = ref({
	title: "Bem-vindo(a)",
	// introduction: "Eu sou o André! Um desenvolvedor web especializado em front-end com Vue.Js. Próximo de 1 ano de experiência, com participação em 3 projetos. Destes, 2 atualmente em desenvolvimento, para a ",
	introduction: "Eu sou o André! Desenvolvedor web especializado em front-end com Vue.Js.",
	company: "Geoblue - Soluções Ambientais",
	briefing: "Sinta-se a vontade para explorar esta aplicação e conhecer um pouco de minhas habilidades.",
	emphase: "Este é um projeto em desenvolvimento, então haverá melhorias constantes ao decorrer do tempo."
	/!*introduction: "Este projeto foi desenvolvido utilizando a tecnologia Vue.js, que permite criar interfaces de usuário interativas e reativas de forma eficiente. Com uma arquitetura baseada em componentes, o Vue ajuda a manter o código organizado e fácil de manter.\n" +
	"Sinta-se livre para explorar! Logo abaixo há cards que destacaram diferentes recursos e funcionalidades que estou combinando, refletindo o meu conhecimento e habilidades no desenvolvimento front-end.\n",*!/
})
*/

</script>

<template>
	
	<div class="image-mask-about-me">
		<v-container class="container_about-me align-content-center px-sm-15" fluid>
			
			<v-card
				class="top-0 mt-5" color="transparent"
				flat
			>
<!--				<v-card-title
					class="text-center text-uppercase text-white text-md-h1 text-sm-h2 text-h4 ma-0 pa-0 pt-5"
				>
					{{ header.title }}, {{ user.user }}!
				</v-card-title>-->
				
				<v-card flat class="" color="transparent">
					<v-row>
						<v-col cols="12" md="8" lg="7" style="font-size: 1.2rem;">
							<v-card class="text-white pa-sm-10 pa-4 text-md-h5" flat>
								<p class="text-introduction font-italic text-h5 text-sm-h4 text-md-h3">{{ header.introduction }}</p>
<!--									<span class="font-weight-bold">{{ header.company }}</span>.-->
								<p class="text-md-h6">{{ header.briefing }}</p>
								<span class="text-subtitle-1 font-italic" style="font-weight: 600">{{ header.emphase }}</span>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
				
			</v-card>
			
<!--			<v-card
				class="top-0 mt-5" color="transparent"
				flat
			>
				<v-card-title
					class="text-center text-uppercase text-white pt-0"
				>
					<v-card-text class="text-lg-h2 text-md-h2 text-h5 ma-0 pa-0 pt-5">{{ header.title }}, {{ user.user }}!</v-card-text>
				</v-card-title>
				
				<v-card flat class="mt-14" color="transparent">
					<v-row>
						<v-col cols="12" md="8" lg="7" style="font-size: 1.2rem;">
							<v-card class="text-white pa-sm-10 pa-4 text-md-h5" flat>
								<p>{{ header.introduction }}</p>
&lt;!&ndash;									<span class="font-weight-bold">{{ header.company }}</span>.&ndash;&gt;
								<p>{{ header.briefing }}</p>
								<span class="font-italic" style="font-weight: 600">{{ header.emphase }}</span>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
				
			</v-card>-->
		
		</v-container>
	</div>
</template>

<style scoped>

</style>

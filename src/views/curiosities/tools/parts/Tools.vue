<script setup>
import vue_icon from "@/assets/tools/vue-logo.svg";
import pinia_icon from "@/assets/tools/pinia-icon.svg";
import security_icon from "@/assets/tools/security-icon.svg";
import devices_icon from "@/assets/tools/devices-icon.svg";
import menu_icon from "@/assets/tools/menu-icon.svg";

const toolsUsaded = [
	{ id: 1, title: "Vue Router", src: vue_icon,
		text: "Gerenciamento de rotas para navegação dinâmico entre páginas."
	},
	{ id: 2, title: "Pinia", src: pinia_icon,
		text: "Gerenciamento de estado da aplicação de forma reativa."
	},
	{ id: 3, title: "Segurança", src: security_icon,
		text: "Implementação de autenticação e autorização de usuários."
	},
	{ id: 4, title: "Dispositivos", src: devices_icon,
		text: "Design adaptável para diferentes tamanhos de tela."
	},
	{ id: 5, title: "Menu de Navegação", src: menu_icon,
		text: "Interface para navegação fácil entre seções do site."
	}
];
</script>

<template>
	<v-card class="mt-3 mb-12 px-6 py-15">
		
		<v-row>
			<v-col cols="12" lg="6">
				<v-card-text class="font-italic text-h6">
					Aqui, apresento algumas das técnicas e ferramentas utilizadas no meu projeto.
					Elas foram escolhidas para criar uma experiência de usuário fluida, segura e responsiva.
					Explore as curiosidades e descubra mais sobre como cada elemento contribui para a funcionalidade da aplicação!
				</v-card-text>
				<v-card-text class="font-italic font-weight-black">
					O sistema de login e segurança ainda não estão utilizando o banco de dados, apenas gerenciador de estados. Logo será implementado com o DB.
				</v-card-text>
			</v-col>
			
			<v-col cols="12" lg="6">
				<v-expansion-panels	variant="accordion">
					
					<v-expansion-panel
						v-for="item in toolsUsaded"
						:key="item.id"
						:title="item.title"
						class="align-content-center"
					>
						<v-expansion-panel-text>
							<v-img
								class="position-absolute ma-0 pa-0"
								:src="item.src"
								width="40"
								height="25"
							></v-img>
							<v-card-text class="ms-10 pa-0 pt-1">{{ item.text }}</v-card-text>
						</v-expansion-panel-text>
					</v-expansion-panel>
				
				</v-expansion-panels>
			</v-col>
		</v-row>
	
	
	</v-card>
</template>

<style scoped>

</style>

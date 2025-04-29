<script setup>
import { userStore } from "@/stores/authStore.ts";

const user 	 	= userStore();
let userName 	= ref('');
let wrongFormat = ref(false)

watch(user, (newVal)=>{

})

const submitLogin = async () => {
	try {
		if (userName.value.length >= 3) {
			await user.login(userName.value)
			wrongFormat.value = false;
		} else {
			wrongFormat.value = true;
			alert('Faz direito')
			// INSTALAR TOAST
		}
	} catch (error) {
	
	}
}
</script>

<template>
	<div id="login-page" class="d-flex justify-center align-center">
	
		<v-card class="py-sm-15 pa-6" flat>
			<v-card-item class="pa-0">
				<v-card-title class="text-center pb-5">
				Login
				</v-card-title>
				
				<v-form method="post" type="submit" @submit.prevent="submitLogin">
					<v-container class="pa-0">
						<v-row class="mx-auto px-4">
						
							<v-col cols="12" class="justify-end pa-0">
								<v-text-field
								v-model="userName"
								:class="[wrongFormat ? 'text-error' : '']"
								:color="wrongFormat ? '' : 'teal'"
								clearable
								hint="Serve para demonstrar a ferramenta Pinia."
								variant="underlined"
								label="Nome de Usuário"
								placeholder="Preencha com seu nome"
								></v-text-field>
							</v-col>
							
							<v-col cols="12" class="text-center pa-0 pb-4">
								<v-btn
								class="w-100"
								type="submit"
								color="teal"
								variant="outlined"
								text="Confirmar"
								></v-btn>
							</v-col>
							
						</v-row>
					</v-container>
				</v-form>
			</v-card-item>
		</v-card>
	</div>
</template>

<style scoped>

</style>

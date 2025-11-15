<script setup>
import { ref, onMounted } from 'vue'

import {toast} from "vuetify-sonner";
import {UserService} from "@/app/api/apiService.ts";

let isLoading 	= ref(false);
const submitted = ref(false);

let table 		= ref({
	items: []
});

const headers = [
	{ title: 'ID', key: 'id', align: 'center', width: '75px' },
	{ title: 'Nome', key: 'name', align: 'start' },
	{ title: 'Profissão', key: 'role', align: 'start' },
	{ title: 'Idade', key: 'age', align: 'end' },
	// { title: 'Data', key: 'created_at', align: 'start' },
]

const fetchItems = async () => {
	try {
		isLoading.value = true;
		
		const response = await UserService.getAll();
		
		console.log(response);
		table.value.items = response;

	} catch (error) {
		console.log(error);
		toast.error(error.message);
	} finally {
		isLoading.value = false;
	}
}

/*const newUser = async () => {
	try {

		name.value.trim();

		let response = await appConfigs.post('http://localhost/api.php', {
			name: name.value
		});

		await fetchItems();
		submitted.value = true;
		toast.success('Usuário cadastrado com sucesso!');
	} catch (error) {
		console.log(error)
		toast.error(error);
	}
}*/

onMounted(async ()=>{
	// await fetchItems();
})
</script>

<template>
	
	<v-overlay
		v-model="isLoading"
		contained
		persistent
		opacity="0.1"
		class="align-center justify-center"
	>
	</v-overlay>
	
	<v-card flat>
		<v-container fluid class="bg-gradient-primary">
<!--			<v-row justify="center" align="center">
				<v-col cols="12" sm="8" md="6" lg="4">
					<v-card class="pa-8" elevation="8" rounded="lg">
						<v-card-title class="text-center text-h4 mb-6">
							Cadastrar Pessoa
						</v-card-title>

						<v-form @submit.prevent="newUser">
							<v-text-field
								v-model="name"
								label="Nome"
								placeholder="Digite seu nome"
								variant="outlined"
								required
								maxlength="45"
								counter
								rounded
								class="mb-6"
								prepend-inner-icon="mdi-account"
								color="primary"
							/>

							<v-row class="mt-4">
								<v-col cols="6">
									<v-btn
										type="submit"
										color="info"
										size="large"
										variant="elevated"
										block
										class="text-body-1 font-weight-medium"
									>
										<v-icon start>mdi-content-save</v-icon>
										Cadastrar
									</v-btn>
								</v-col>

								<v-col cols="6">
									<v-btn
										@click="()=>{name = ''}"
										variant="outlined"
										color="secondary"
										size="large"
										block
										class="text-body-1 font-weight-medium"
									>
										<v-icon start>mdi-refresh</v-icon>
										Limpar
									</v-btn>
								</v-col>
							</v-row>
						</v-form>

					</v-card>
				</v-col>
			</v-row>-->

			<v-data-table-virtual
				:headers="headers"
				:items="table.items"
				:loading="isLoading"
				loading-text="Carregando... Por favor aguarde alguns instantes."
				no-data-text="Nenhum registro encontrado"
				disable-sort
				@update:options="fetchItems"
			></v-data-table-virtual>
		</v-container>
	</v-card>
</template>

<style scoped>

</style>


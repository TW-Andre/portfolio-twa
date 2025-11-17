<script setup>

import {ref} from "vue";
import {toast} from "vue-sonner";
import {UserService} from "@/app/api/apiService.ts";
import { vMaska } from "maska/vue"
import Swal from "sweetalert2";

const props = defineProps({
	dialog: {
		type: Object,
		default: () => ({
			show: false,
			id: null,
			item: {
				type: Object,
				default: () => ({
					name: '',
					age: null,
					role: '',
					created_at: '',
					id: null,
					identifier: ''
				})
			}
		})
	}
})
let emit = defineEmits(['update']);

let isLoading = ref(false);

const user = ref({
	name: '',
	age: '',
	role: ''
});

const saveUser = async () => {
	if (isLoading.value) return
	isLoading.value = true;
	
	try {
		
		if (!user.value.name || !user.value.role || !user.value.age) {
			await Swal.fire({
				title: 'Todos os Campos Precisam ser Preenchidos!',
				text: `Campos vazios: ${!user.value.name ? 'Nome; ' : ''}${!user.value.age ? 'Idade; ' : ''}${!user.value.role ? 'Ocupação.' : ''}`,
				icon: 'warning',
				showCancelButton: false,
			}).then(() => {
			
			});
			return
		}
		
		let response =
			props.dialog.id ? await UserService.update(props.dialog.id, user.value) : await UserService.createUser(user.value);
		
		console.log(response);
		user.value.name = '';
		user.value.role = '';
		user.value.age  = null;
		props.dialog.show = false;
		emit('update');
		
		toast.success('Usuário cadastrado com sucesso!');
	} catch (error) {
		console.log(error)
		toast.error(error.message);
	} finally {
		isLoading.value = false;
	}
}

onMounted(() => {
	user.value = {
		name: props.dialog?.id ? props.dialog.item.name : '',
		age: props.dialog?.id ? props.dialog.item.age : null,
		role: props.dialog?.id ? props.dialog.item.role : ''
	};
})
</script>
<template>
	
	
	<v-dialog
		v-model="props.dialog.show"
		max-width="1000"
		style="z-index: 1050"
	>
		<v-card
			flat
			class="pa-5"
		>
			<v-row justify="center" align="center" dense>
				<v-col cols="12" sm="8" md="6" lg="4">
						<v-card-title class="text-center">
							{{ props.dialog?.id ? "Editar Usuário" : "Novo Usuário" }}
						</v-card-title>
					
					<v-form class="mt-3" @submit.prevent="saveUser">
						<v-text-field
							v-model="user.name"
							label="Nome"
							placeholder="Ex.: Alberto"
							variant="outlined"
							required
							maxlength="45"
							counter
							rounded="md"
							color="primary"
						/>
						
						<v-text-field
							v-model="user.age"
							v-maska="`###`"
							label="Idade"
							placeholder="Ex.: 30"
							variant="outlined"
							required
							rounded="md"
							color="primary"
						/>
						
						<v-text-field
							v-model="user.role"
							label="Ocupação"
							placeholder="Ex.: Assistente de RH"
							variant="outlined"
							required
							maxlength="60"
							counter
							rounded="md"
							color="primary"
						/>
						
						<v-row>
							<v-col cols="6">
								<v-btn
									@click="props.dialog.show = false"
									variant="outlined"
									color="cancel"
									size="large"
									block
									class="w-100 text-body-1 font-weight-medium"
								>
									<v-icon start>mdi-close</v-icon>
									Cancelar
								</v-btn>
							</v-col>
							<v-col cols="6">
								<v-btn
									type="submit"
									color="primary"
									size="large"
									variant="elevated"
									class="w-100 text-body-1 font-weight-medium"
									:loading="isLoading"
								>
									<v-icon start>mdi-content-save</v-icon>
									Salvar
								</v-btn>
							</v-col>
							
						</v-row>
					</v-form>
				
				
				</v-col>
			</v-row>
		</v-card>
	</v-dialog>


</template>
<style scoped>

</style>

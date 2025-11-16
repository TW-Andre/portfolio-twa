<script setup>
import ManageDialogComponent from "@/views/projects/userManagement/components/ManageDialogComponent.vue";
import {toast} from "vuetify-sonner";
import {UserService} from "@/app/api/apiService.ts";


const breadcrumb = [
	{
		title: 'Projetos',
		disabled: true,
	},
	{
		title: 'Gerenciamento de Usuários',
		disabled: false,
	},
];

const dialog = ref({
	show: false,
	id: null
});

let isLoading 	= ref(false);

let table 		= ref({
	items: []
});

const headers = [
	{ title: 'Ações', key: 'actions', align: 'center', width: '75px' },
	{ title: 'ID', key: 'id', align: 'center', width: '50px' },
	{ title: 'Nome', key: 'name', align: 'start' },
	{ title: 'Profissão', key: 'role', align: 'start' },
	{ title: 'Idade', key: 'age', align: 'end' },
	// { title: 'Data', key: 'created_at', align: 'start' },
]

const fetchItems = async () => {
	try {
		isLoading.value = true;
		
		const response = await UserService.getAll();
		
		table.value.items = response.data;
		
	} catch (error) {
		console.log(error);
		toast.error(error.message);
	} finally {
		isLoading.value = false;
	}
}
const dialogShow = (id = null) => {
	dialog.value = {
		show: true,
		id: id
	}
}
</script>

<template>
	
	<ManageDialogComponent v-if="dialog.show" :dialog="dialog" @update="fetchItems"/>
	
	<v-overlay
		:model-value="isLoading"
		persistent
		class="align-center justify-center"
	>
		<v-progress-circular
			color="primary"
			size="64"
			indeterminate
		></v-progress-circular>
	</v-overlay>
	
	<v-card flat class="mt-3 px-lg-5 px-3">
		
		<v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
		
		<v-card-text class="d-flex align-center justify-space-between">
			<v-card-title class="text-start pa-0">
				Listagem de Usuários
			</v-card-title>
			
			<v-btn
				color="primary"
				density="default"
				rounded="md"
				@click="dialogShow"
				prepend-icon="mdi-plus"
				
			>
				Novo Usuário
			</v-btn>
		</v-card-text>
		
		<v-card flat border class="mb-3">
			<v-container fluid class="bg-gradient-primary">
				
				<v-data-table-virtual
					:headers="headers"
					:items="table.items"
					:loading="isLoading"
					loading-text="Carregando... Por favor aguarde alguns instantes."
					no-data-text="Nenhum registro encontrado"
					disable-sort
					@update:options="fetchItems"
				>
					<template v-slot:item.actions="{ item }">
						
						<v-menu>
							<template v-slot:activator="{ props }">
								<v-btn
									class="dropdown-btn"
									color="info"
									density="compact"
									icon="mdi-dots-vertical"
									rounded
									v-bind="props"
									variant="flat"
								/>
							</template>
							<v-list>
								<v-list-item class="my-n1" @click="dialogShow(item.id)" disabled>
									<v-list-item class="pa-0"><i class="mdi mdi-account-edit"></i> Editar</v-list-item>
								</v-list-item>
								
								<v-list-item class="my-n1" @click="dialogShow(item.id)" disabled>
									<v-list-item class="pa-0"><i class="mdi mdi-close"></i> Deletar</v-list-item>
								</v-list-item>
							</v-list>
						</v-menu>
					
					</template>
				</v-data-table-virtual>
			</v-container>
		</v-card>
		
		<v-card flat class="px-3">
			<v-card-title class="text-h5 mb-3 pa-0">
				Explicação:
			</v-card-title>
			
			<v-card-text class="text-subtitle-1 pa-0">
				<ul class="ml-4 mb-2" style="line-height: 1.6;">
					<li>
						<strong>Como os dados aparecem:</strong> A tabela mostra informações reais, vindas de um banco de dados na nuvem.
					</li>
					<li>
						<strong>O papel da API:</strong> Um código em PHP (no servidor) funciona como ponte: o site pede os dados, o PHP busca no banco e devolve tudo organizado.
					</li>
					<li>
						<strong>A tabela:</strong> É um componente moderno do Vuetify que carrega todos os usuários de uma vez, sem precisar de botões de "próxima página".
					</li>
					<li>
						<strong>Adicionar:</strong> Ao clicar em “Novo Usuário”, abre uma janela. Você preenche os dados, clica em salvar...
					</li>
					<li>
						<strong>Magia do resultado:</strong> ...e pronto! A tabela se atualiza <strong>sozinha</strong>, sem recarregar a página inteira — tudo acontece em tempo real.
					</li>
				</ul>
			</v-card-text>
		</v-card>
		
	</v-card>
	
	<!-- Footer fixo -->
	<v-footer
		app
		fixed
		class="d-flex justify-center py-5 bg-grey-lighten-4 border-t"
		elevation="2"
	>
		<span class="text-caption font-weight-medium text-capitalize">
			Por favor, tenha ética ao interagir nessa tela.
		</span>
	</v-footer>
	
</template>

<style scoped>

</style>

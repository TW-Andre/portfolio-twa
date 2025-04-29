<script setup>

let { jsonProjects } = defineProps(['jsonProjects']);
</script>

<template>
	<v-card-title
		class="flex-wrap text-sm-h5 text-h6 text-decoration-underline text-capitalize text-center pt-0 pb-sm-10"
	>
		Projetos em Destaque
	</v-card-title>
	<v-row>
		
		<template v-for="(item, index) in jsonProjects">
			<v-col cols="12" md="6">
				<v-card class="mx-auto my-2 card-hover" min-width="250" max-width="450">
					<RouterLink :to="item.link" style="text-decoration: none">
						<v-img
							color="surface-variant"
							height="200"
							:src="item.src"
							cover
						></v-img>
					</RouterLink>
					
					<v-card-text>
						<div class="font-weight-bold mb-2">{{ item.title }}</div>
						<div class="ms-1 mb-2">{{ item.description }}</div>
					</v-card-text>
				</v-card>
			</v-col>
		</template>
	</v-row>
</template>

<style scoped>

</style>

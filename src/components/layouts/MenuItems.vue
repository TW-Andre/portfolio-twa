<script setup>
import {myRoutes} from "@/router/routes";
import {onMounted} from "vue";
import {RouterLink} from "vue-router";
import {userStore} from "@/stores/authStore";

const user    	= userStore();
const menuItems = myRoutes;

onMounted(()=>{
	console.log(menuItems)
})
</script>

<template>

	<v-list>
		<v-list-group>
			<template v-slot:activator="{props}">
				<RouterLink to="/" style="text-decoration: none">
					<v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
				</RouterLink>
				
				<v-list-item
					prepend-icon="mdi-file"
					title="Projetos"
					v-bind="props"
					class=""
				>
					<template #append="{isActive}">
						<i
							:class="isActive ? 'ph ph-caret-up' : 'ph ph-caret-down'"
							class="ms-2"
						></i>
					</template>
				</v-list-item>
				<v-list-group>
					<template #activator="{props}">
						<RouterLink to="/projetos/projeto2" style="text-decoration: none">
							<v-list-item prepend-icon="mdi-wrench-clock" title="Projeto 2" value="projeto2"></v-list-item>
						</RouterLink>
					</template>
				</v-list-group>
				<RouterLink to="/login" style="text-decoration: none">
					<v-list-item prepend-icon="mdi-login" title="Logout" value="logout" @click="user.logout()"></v-list-item>
				</RouterLink>
			</template>
		</v-list-group>
	</v-list>
	
</template>

<style scoped>

</style>

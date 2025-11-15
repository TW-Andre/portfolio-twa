<script lang="ts" setup>
import {useRoute} from "vue-router";
import { Toaster, toast } from 'vue-sonner'

const route = useRoute();

</script>

<template>
	<Toaster
		richColors position="top-right"
		:toastOptions="{
            class: 'pe-2 ps-2 pt-5 pb-5',
          }"
	/>
	<v-app>
		<component v-if="route.meta.layout" :is="route.meta.layout"> <!-- Use route.meta -->
			<router-view />
		</component>
		
		<router-view v-else />
	</v-app>
</template>

<style>

</style>


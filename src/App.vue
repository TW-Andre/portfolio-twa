<script lang="ts" setup>
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<template>
	<v-app>
		<component v-if="route.meta.layout" :is="route.meta.layout"> <!-- Use route.meta -->
			<router-view />
		</component>
		
		<router-view v-else />
	</v-app>
</template>

<style>

</style>


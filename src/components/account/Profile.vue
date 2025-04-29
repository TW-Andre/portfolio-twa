<script setup >
import user_icon from '@/assets/user-icon.svg'
import {userStore} from "@/stores/authStore";
import {useDisplay} from "vuetify";
import { useDateFormat, useNow } from '@vueuse/core'

const user    	 = userStore();
const { mobile } = useDisplay();
const dateFormat = useDateFormat(useNow(), 'HH:mm:ss')

const periodsOfDay = [
	{ id: 1, message: "Bom Dia!" },
	{ id: 2, message: "Boa Tarde!" },
	{ id: 3, message: "Boa Noite!" }
]
let presentMoment = ref(0);

onMounted(()=>{
	if (parseInt(dateFormat.value) >= 4 && parseInt(dateFormat.value) < 12 ) {
		presentMoment.value = 0;
	}
	if (parseInt(dateFormat.value) >= 12 && parseInt(dateFormat.value) < 18) {
		presentMoment.value = 1;
	}
	if (parseInt(dateFormat.value) >= 18 && parseInt(dateFormat.value) < 4) {
		presentMoment.value = 2;
	}
})
</script>

<template>
	<div class="d-flex ml-auto mr-1">
		<v-menu :close-on-content-click="false">
			<template v-slot:activator="{ props }">
				<v-btn class="" variant="text" v-bind="props" icon>
					<v-avatar size="35">
						<v-img :src="user_icon" />
					</v-avatar>
				</v-btn>
			</template>
			<v-sheet class="sheet-user-settings" rounded="md" elevation="10">
				<div class="px-8 pt-2">
					<div class="d-flex align-center mt-4 pb-6">
						<v-avatar size="80">
							<v-img :src="user_icon" width="80" />
						</v-avatar>
						<div class="ml-3">
							<h6 class="text-h5 mb-n1">{{ user.user }}</h6>
							<span class="text-subtitle-1 font-weight-light">Visitante</span>
							<div class="d-flex align-center mt-1">
								<!--								<MailIcon size="18" stroke-width="1.5" />-->
<!--								<span class="text-subtitle-1 font-weight-regular textSecondary ml-2">EMAIL</span>-->
							</div>
						</div>
					</div>
					<v-divider />
				</div>
				
				<div class="pt-4 pb-6 px-8 text-center">
					<v-btn color="success" variant="outlined" block @click="user.logout()">Deslogar</v-btn>
				</div>
			</v-sheet>
		</v-menu>
		
		<v-card-text v-if="!mobile" class="ma-0 ps-0">
			{{ user.user }}
		</v-card-text>
	</div>
</template>

<style scoped>

</style>

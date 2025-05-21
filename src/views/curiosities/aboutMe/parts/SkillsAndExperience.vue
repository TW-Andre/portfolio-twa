<script setup>
import vueIcon from '@/assets/aboutMe/vue-icon.png';
import jsIcon from '@/assets/aboutMe/js.png';
import gitIcon from '@/assets/aboutMe/git.png';
import htmlIcon from '@/assets/aboutMe/html.png';
import cssIcon from '@/assets/aboutMe/css-3.png';
import bitIcon from '@/assets/aboutMe/bitbucket.png';
import npmIcon from '@/assets/aboutMe/programing.png';
import nodeIcon from '@/assets/aboutMe/node-js.png';
import bootstrapIcon from '@/assets/aboutMe/bootstrap-icon.png';

let { aboutMeContent } = defineProps(['aboutMeContent'])

const iconArray = [
	{id: 1, title: 'Vue.Js', icon: vueIcon},
	{id: 2, title: 'Vuetify', icon: '$vuetify'},
	{id: 3, title: 'JavaScript', icon: jsIcon},
	{id: 4, title: 'HTML5', icon: htmlIcon},
	{id: 5, title: 'CSS3', icon: cssIcon},
	{id: 6, title: 'Git', icon: gitIcon},
	{id: 7, title: 'Bitbucket', icon: bitIcon},
	{id: 8, title: 'Npm', icon: npmIcon},
	{id: 9, title: 'Node.Js', icon: nodeIcon},
	{id: 10, title: 'Bootstrap', icon: bootstrapIcon},
	]
</script>

<template>

<!--
	<v-container class="ma-0 pa-0">
		
		<v-row>
			<v-col cols="12" lg="6">
				<v-card class="pa-4 mb-6" variant="outlined">
					<v-card-title class="text-h6 mb-2">Experiência Profissional</v-card-title>
					<v-card-text>
						<v-list>
							<v-list-item
								v-for="(exp, index) in aboutMeContent.professionalExperience"
								:key="index"
								class="px-0"
							>
								<template v-slot:prepend>
									<v-icon icon="mdi-briefcase" color="primary" class="me-2"></v-icon>
								</template>
								<v-list-item-title class="text-subtitle-1 font-weight-bold">
									{{ exp.company }}
								</v-list-item-title>
								<v-list-item-subtitle class="text-body-2">
									{{ exp.role }}
								</v-list-item-subtitle>
								<v-list-item-subtitle class="text-caption text-medium-emphasis">
									{{ exp.period }}
								</v-list-item-subtitle>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-col>
			
			<v-col cols="12" lg="6">
				<v-card class="pa-4 mb-2" variant="outlined">
					<v-card-title class="text-h6 mb-2">Skills</v-card-title>
					<v-list>
						<v-list-item
							v-for="(skill, index) in aboutMeContent.skills"
							:key="index"
							prepend-icon="mdi-check-circle"
							class="text-body-1"
						>
							<p class="text-body-1">
								{{ skill }}
							</p>
						</v-list-item>
					</v-list>
				</v-card>
			</v-col>
		</v-row>
		
		<v-row>
			<v-col cols="12" lg="6">
				<v-card-item>
					<v-icon class="fi-brands-js"></v-icon>
				</v-card-item>
				
				<v-card-item>
					<v-icon icon="fi-rr-html-file"></v-icon>
				</v-card-item>
			</v-col>
		</v-row>
	</v-container>
	-->
	
	<v-card class="border-thin pa-4 mb-2" variant="outlined">
		<v-card-title class="mb-2 px-1">Experiência Profissional</v-card-title>
		<v-card-text>
			<v-list>
				<v-list-item
					v-for="(exp, index) in aboutMeContent.professionalExperience"
					:key="index"
					class="px-0"
				>
					<template v-slot:prepend>
						<v-icon icon="mdi-briefcase" color="primary" class="me-2"></v-icon>
					</template>
					<v-list-item-title class="text-subtitle-1 font-weight-bold">
						{{ exp.company }}
					</v-list-item-title>
					<v-list-item-subtitle class="text-body-2">
						{{ exp.role }}
					</v-list-item-subtitle>
					<v-list-item-subtitle class="text-caption text-medium-emphasis">
						{{ exp.period }}
					</v-list-item-subtitle>
				</v-list-item>
			</v-list>
		</v-card-text>
	</v-card>
	
	<v-card class="border-thin pa-4 mb-2" variant="outlined">
		<v-card-title class="mb-2 px-1">Formação Acadêmica</v-card-title>
		<v-card class="pa-0 ma-0" flat>
			
			<v-card-item class="px-0 px-sm-4" prepend-icon="mdi-circle-medium">
				<v-card-text class="font-weight-bold text-h6 pa-0">
					{{ aboutMeContent.lifeAcademic.course }} | {{ aboutMeContent.lifeAcademic.university }} - {{ aboutMeContent.lifeAcademic.time }}
					<span class="font-weight-light font-italic">(Cursando)</span>
				</v-card-text>
				
			</v-card-item>
			
			<p class="px-3 ms-sm-15">
				Curso de graduação em <span class="font-weight-bold"> {{ aboutMeContent.lifeAcademic.course }}</span> pela
				<span class="font-weight-bold">{{ aboutMeContent.lifeAcademic.university }},</span>
				pelo período de {{ aboutMeContent.lifeAcademic.time }}.
			</p>
			
		</v-card>
	</v-card>
	
	<v-card class="border-thin pa-4" variant="outlined">
		
		<v-row>
			<v-col cols="12" lg="6">
				<v-card-title class="mb-2 px-1">Skills</v-card-title>
				<v-list>
					<v-list-item
						v-for="(skill, index) in aboutMeContent.skills"
						:key="index"
						prepend-icon="mdi-check-circle"
						class="text-blue-lighten-1"
					>
						<p class="text-body-1 text-black">
							{{ skill }}
						</p>
					</v-list-item>
				</v-list>
			</v-col>
			
			<v-col class="d-flex pa-15" cols="12" lg="6">
				<v-row>
					<v-col
						v-for="item in iconArray"
						class="align-content-center text-center"
						cols="6"
						md="4"
					>
						<v-tooltip :text="item.title" location="top">
							<template v-slot:activator="{ props }">
								<v-img v-if="item.icon !== '$vuetify'" v-bind="props" :src="item.icon" height="64"></v-img>
								<v-icon v-else color="info"  v-bind="props" icon="$vuetify" size="64"></v-icon>
							</template>
						</v-tooltip>
						
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		
	</v-card>
</template>

<style scoped>

</style>

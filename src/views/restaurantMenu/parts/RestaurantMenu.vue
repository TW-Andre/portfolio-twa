<script setup>
/*import cerealImg from "@/assets/restaurantMenuImages/Cereal.jpg";
import orangeJuice from "@/assets/restaurantMenuImages/OrangeJuice.jpg";
import carneBovina from "@/assets/restaurantMenuImages/CarneBovina.jpg";
import hamburguer from "@/assets/restaurantMenuImages/Hamburguer.jpg";*/
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/index';

let isLoading        = ref(false);
let categorySelected = ref("all");

let optionsMenu = ref([]);

const fetchPage = async ()=>{
	try {
		isLoading.value = true;
		
		let response = await getDocs(collection(db, "RestaurantMenu"));
		response.forEach(doc => {
			optionsMenu.value.push(doc.data())
		})
		
		// console.log(optionsMenu.value)
	
		/*optionsMenu.value = [
			{
				id: 1,
				name: "Panquecas",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 17.50,
				category: ["all", "breakfast"],
				src: "https://img.freepik.com/fotos-gratis/panquecas-com-morangos-e-chocolate-decorado-com-folhas-de-hortela_2829-14003.jpg?t=st=1741748248~exp=1741751848~hmac=4f8806b0d9d0030443b7683432cf0c041232fad80c68dfbd15fd4b312e4d04a6&w=996"
			},
			{
				id: 2,
				name: "À La Minuta",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 20.00,
				category: ["all", "meal"],
				src: "https://img.freepik.com/fotos-premium/carne-arroz-feijao-e-batata-frita-prato-tipico-brasileiro_92534-1179.jpg?w=996"
			},
			{
				id: 3,
				name: "Milkshake",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 15.00,
				category: ["all", "drink"],
				src: "https://img.freepik.com/fotos-gratis/milk-shake-em-cima-da-mesa_140725-9239.jpg?t=st=1741786211~exp=1741789811~hmac=0f4d39b7773f90396c52cd68e937de38f836b513b2df889fbe9982b3481ef852&w=740"
			},
			{
				id: 4,
				name: "Carne de Bovino",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 35.00,
				category: ["all", "meal"],
				src: carneBovina,
			},
			{
				id: 5,
				name: "Hamburguer",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 15.00,
				category: ["all", "meal"],
				src: hamburguer,
			},
			{
				id: 6,
				name: "Omelete",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 10.00,
				category: ["all", "breakfast"],
				src: "https://img.freepik.com/fotos-gratis/omelete-de-cogumelos-colocada-na-alface-e-enrolada-em-fatias-de-tomate_140725-8337.jpg?t=st=1741788340~exp=1741791940~hmac=eefffa03feed2a2a0a4331f925bc491f77f286869ab6ba8908007712fc27ec0f&w=740"
			},
			{
				id: 7,
				name: "Suco de Laranja",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 5.00,
				category: ["all", "drink"],
				src: orangeJuice,
			},
			{
				id: 8,
				name: "Cereal",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eaque esse est facere minima quia veniam. Deserunt, expedita, voluptatibus?",
				price: 7.00,
				category: ["all", "breakfast"],
				src: cerealImg,
			},
		];*/
	
	} catch (error) {
		alert(error.data);
	} finally {
		isLoading.value = false;
	}
}

const filterItem = value => {
  categorySelected.value = value;
};

onMounted(async()=>{
  await fetchPage();
})

</script>

<template>

  <v-card class="mt-3 pa-6">
    <v-row class="justify-center">
      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="all" @click="filterItem('all')">
          Tudo
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="breakfast" @click="filterItem('breakfast')">
          Café da Manhã
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="meal" @click="filterItem('meal')">
          Refeições
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="drink" @click="filterItem('drink')">
          Bebidas
        </v-btn>
      </v-col>

    </v-row>

    <v-row>
      <v-col
        v-for="(item, index) in optionsMenu"
        v-show="item.category.includes(categorySelected)"
        cols="12"
        lg="6"
        style="transition-delay: 1s"
      >
        <v-card class="d-flex justify-start" style="width: 100%">
          <v-overlay
            :model-value="isLoading"
            class="align-center justify-center"
            persistent>
            <v-progress-circular
              color="primary"
              size="64"
              indeterminate
            ></v-progress-circular>
          </v-overlay>

          <v-img
            v-if="!isLoading"
            height="200"
            cover
            :src="item.src"
            style="min-width: 360px ;max-width: 360px"
          ></v-img>

          <v-card-item class="align-content-start flex-fill">
            <v-card-title class="d-flex justify-space-between">
              <div>{{ item.name }}</div>

              <span class="text-primary">R$ {{ item.price }}</span>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="px-0">
              {{ item.description }}
            </v-card-text>
          </v-card-item>

        </v-card>
      </v-col>
    </v-row>

  </v-card>
</template>

<style scoped>

</style>

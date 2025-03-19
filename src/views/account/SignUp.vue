<script setup>
import { userStore } from "@/stores/authStore.ts";

const user 	 = userStore();
let userName = ref('');

watch(user, (newVal)=>{

})
</script>

<template>
  <div class="container d-flex justify-center align-center">
    <v-card class="" flat style="min-width: 35rem">
      <v-card-item>
        <v-card-title class="text-center">
          Login
        </v-card-title>

        <v-form method="post" type="submit" @submit.prevent="e => {}">
          <v-container>

            <v-row class="mx-auto px-7">

              <v-col cols="12" class="justify-end">
                <v-text-field
					v-model="userName"
					class=""
					clearable
					hide-details
					variant="solo"
					label="Nome de Usuário"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="text-center">
                <v-btn
					class="w-100"
					color="primary"
					text="Confirmar"
					@click="user.login(userName)"
                ></v-btn>
              </v-col>


            </v-row>

          </v-container>
        </v-form>
      </v-card-item>
    </v-card>
  </div>
</template>

<style scoped>
.container {
	height: calc(100vh);
	background-image: linear-gradient(30deg, #00599f, #000322);
}
.container .v-card {
	background-color: #fafafa;
	background-image: url("https://img.freepik.com/vetores-gratis/desenho-de-fundo-minimalista-de-linhas-brilhantes-abstratas-brancas-e-cinzentas_84443-2817.jpg?t=st=1742331461~exp=1742335061~hmac=be597a1e0fd77c59f3d27d82a3dbde8391f6fc96d157ca8d943dc4b6a8d2b87e&w=1380");
	background-size: cover;
	background-repeat: no-repeat;
}
</style>

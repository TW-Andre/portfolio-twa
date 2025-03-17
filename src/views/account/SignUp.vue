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
	background-image: url("https://img.freepik.com/vetores-gratis/fundo-branco-monocromatico-de-estilo-de-papel_52683-66443.jpg?t=st=1741980728~exp=1741984328~hmac=6d0a7bd1ea9a6b7245d2c3f0a1d1df55955bc4ddbdd3339ea85d37116c9dc122&w=996");
	background-size: cover;
}
.container .v-card {
	background-color: #fafafa;
}
</style>

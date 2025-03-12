<script setup>

const optionsMenu = [
  {
    id: 1,
    name: "Panquecas",
    description: "Massa com cobertura de chocolate e morangos",
    price: 13.50,
    category: ["breakfast"],
    src: "https://img.freepik.com/fotos-gratis/panquecas-com-morangos-e-chocolate-decorado-com-folhas-de-hortela_2829-14003.jpg?t=st=1741748248~exp=1741751848~hmac=4f8806b0d9d0030443b7683432cf0c041232fad80c68dfbd15fd4b312e4d04a6&w=996"
  },
  {
    id: 2,
    name: "Ala Minuta",
    description: "Prato pronto. Arroz, bife, feijão, batata frita e salada",
    price: 20.00,
    category: ["lunch", "dinner"],
    src: "https://img.freepik.com/fotos-premium/carne-arroz-feijao-e-batata-frita-prato-tipico-brasileiro_92534-1179.jpg?w=996"
  }
]

</script>

<template>

  <v-card class="mt-3 pa-6">
    <v-row class="justify-center">
      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="all">
          Tudo
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="breakfast">
          Café da Manhã
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="lunch">
          Almoço
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="drink">
          Bebidas
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn class="" color="primary" density="comfortable" variant="outlined" value="dinner">
          Jantar
        </v-btn>
      </v-col>

    </v-row>

    <v-row>
      <v-col
        v-for="(item, index) in optionsMenu"
        cols="12"
        lg="6"
      >
        <v-card class="d-flex justify-start" style="width: 100%">
          <v-img
            height="200"
            cover
            :src="item.src"
            style="max-width: 360px"
          ></v-img>


          <v-card-item class="align-content-start">
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

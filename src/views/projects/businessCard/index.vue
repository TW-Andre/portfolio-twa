<script setup>
import ProjectDetailCard from "@/components/projectsPreview/ProjectDetailCard.vue";

const breadcrumb = [
  {
    title: 'Projetos',
    disabled: true,
  },
  {
    title: 'Cartão de Visitas Digital',
    disabled: false,
  },
];

const businessCardData = {
  title: 'Cartão de Visitas Digital',
  description: 'Um cartão de visitas pessoal que apresenta meus serviços e permite que visitantes entrem em contato comigo. O QR Code está disponível no meu carro, facilitando o acesso rápido ao site e à minha apresentação profissional.',
  period: '2026',
  status: 'Em Produção',
  statusColor: 'success',
  type: 'Autônomo / Produção',
  complexity: 4,
  link: 'https://andreprado.vercel.app/', // Adicione o link real quando estiver disponível
  github: 'https://github.com/TW-Andre/business-card', // Adicione o GitHub quando disponível
  technologies: [
    'React',
    'TypeScript',
    'React Router',
    'Tailwind CSS',
    'QR Code Generator',
    'API REST',
    'Responsive Design'
  ],
  features: [
    'Apresenta meus serviços de forma clara e profissional',
    'Permite contato rápido comigo a partir do site',
    'QR Code fixado no carro para acesso via smartphone',
    'Design simples e direto para clientes e interessados',
    'Integração de informações de contato e redes sociais',
    'Navegação rápida entre serviços oferecidos',
    'Experiência responsiva em mobile e desktop',
    'Foco em conversão de contatos e oportunidades'
  ],
  challenges: [
    'Implementação de QR Code dinamicamente gerado com dados do usuário',
    'Design responsivo que funcione perfeitamente em todos os dispositivos',
    'Otimização de performance para carregamento rápido',
    'Integração segura de APIs de redes sociais',
    'Armazenamento e sincronização de dados em tempo real'
  ],
  results: [
    'Aplicação totalmente funcional e em produção',
    'QR Code integrado com sucesso para compartilhamento rápido',
    'Design moderno e profissional que representa bem o usuário',
    'Facilita a criação de conexões profissionais para motoristas particulares',
    'Experiência de usuário fluida e intuitiva'
  ]
};
</script>

<template>
  <v-card class="mt-3 px-lg-10 px-3" flat>
    <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
    
    <ProjectDetailCard :projectData="businessCardData" />
    
    <!-- Seção de mais informações (opcional) -->
    <v-card class="mt-8 pt-6" variant="flat" elevation="0" border>
      <v-card-text class="text-center text-body-2 text-medium-emphasis">
        <p>
          Tem interesse em saber mais sobre este projeto? 
          <v-btn
            variant="text"
            color="primary"
            text="Entre em contato"
            size="small"
          ></v-btn>
        </p>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style scoped>
</style>

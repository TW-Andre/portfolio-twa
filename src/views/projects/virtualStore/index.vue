<script setup>
import ProjectDetailCard from "@/components/projectsPreview/ProjectDetailCard.vue";

const breadcrumb = [
  {
    title: 'Projetos',
    disabled: true,
  },
  {
    title: 'Loja Virtual',
    disabled: false,
  },
];

const virtualStoreData = {
  title: 'Loja Virtual - Plataforma E-commerce',
  description: 'Uma plataforma de e-commerce desenvolvida em React onde o catálogo fica público e disponível mesmo para visitantes. Apenas usuários cadastrados podem comprar ou anunciar produtos, enquanto visitantes podem navegar nos itens carregados do banco de dados.',
  period: '2026',
  status: 'Projeto Educacional',
  statusColor: 'success',
  type: 'Full-Stack / Fictício',
  complexity: 5,
  link: 'https://nexus-store-mocha.vercel.app/', // Adicione o link real quando estiver disponível
  github: 'https://github.com/TW-Andre/Nexus-Store', // Adicione o GitHub quando disponível
  technologies: [
    'React',
    'TypeScript',
    'State Management',
    'React Router',
    'Tailwind CSS / Bootstrap',
    'API REST',
    'Autenticação',
    'Database Design'
  ],
  features: [
    'Catálogo público carregado a partir do banco de dados',
    'Visitantes podem ver produtos sem precisar se cadastrar',
    'Somente usuários cadastrados podem comprar ou anunciar produtos',
    'Autenticação de login com email e senha',
    'Validação de credenciais contra banco de dados',
    'Carrinho de compras funcional para usuários autenticados',
    'Sistema de checkout e pedidos',
    'Painel Admin com dashboard informativo',
    'Aprovação/Recusa de pedidos (Admin)',
    'Sistema de crédito para compras',
    'Histórico de pedidos por usuário',
    'Anúncio de produtos apenas para usuários autenticados'
  ],
  challenges: [
    'Implementação de múltiplos tipos de usuários com permissões diferentes',
    'Design da estrutura de banco de dados para suportar complexidade',
    'Gerenciamento de estado complexo para carrinho e pedidos',
    'Interface intuitiva para diferentes perfis de usuário',
    'Sistema de validação de autenticação seguro',
    'Dashboard Admin com múltiplas visualizações de dados',
    'Lógica de aprovação de pedidos e gerenciamento de crédito'
  ],
  results: [
    'Plataforma e-commerce totalmente funcional com todas as features principais',
    'Sistema de autenticação seguro implementado com sucesso',
    'Perfis distintos para visitante, usuário autenticado e admin',
    'Painel Admin completo para gerenciamento de pedidos',
    'Interface responsiva que funciona em desktop e mobile',
    'Demonstração prática de conhecimentos Full-Stack',
    'Base sólida para futuro desenvolvimento de plataforma comercial real'
  ]
};

// Dados adicionais sobre tipos de usuário
const userTypes = [
  {
    role: 'Visitante',
    icon: 'mdi-eye-outline',
    permissions: ['Ver catálogo público', 'Navegar produtos', 'Visualizar ofertas']
  },
  {
    role: 'Usuário',
    icon: 'mdi-account',
    permissions: ['Ver catálogo', 'Comprar produtos', 'Anunciar produtos', 'Solicitar crédito', 'Visualizar pedidos']
  },
  {
    role: 'Admin',
    icon: 'mdi-shield-account',
    permissions: ['Gerenciar pedidos', 'Aprovar/Recusar pedidos', 'Visualizar relatórios', 'Gerenciar créditos', 'Todas as permissões']
  }
];
</script>

<template>
  <v-card class="mt-3 px-lg-10 px-3" flat>
    <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
    
    <ProjectDetailCard :projectData="virtualStoreData" />
    
    <!-- Seção de tipos de usuário -->
    <v-card class="mt-8 mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-account-multiple" size="small" class="me-2"></v-icon>
        Tipos de Usuários e Permissões
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="userType in userTypes" :key="userType.role" cols="12" md="4">
            <v-card variant="outlined" class="h-100">
              <v-card-text>
                <div class="d-flex align-center mb-4">
                  <v-icon :icon="userType.icon" color="primary" class="me-2"></v-icon>
                  <span class="text-subtitle-2 font-weight-bold">{{ userType.role }}</span>
                </div>
                <v-list dense>
                  <v-list-item
                    v-for="permission in userType.permissions"
                    :key="permission"
                    prepend-icon="mdi-check-small"
                    class="px-0"
                  >
                    <v-list-item-title class="text-body-2">
                      {{ permission }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Seção de mais informações -->
    <v-card class="pt-6" variant="flat" elevation="0" border>
      <v-card-text class="text-center text-body-2 text-medium-emphasis">
        <p>
          Este projeto demonstra compreensão profunda de e-commerce, autenticação, gerenciamento de permissões e design de sistemas complexos.
        </p>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style scoped>
</style>

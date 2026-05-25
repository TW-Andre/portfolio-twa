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
  title: 'Loja Virtual - Marketplace de Segunda Mão',
  description: 'Loja Virtual é um marketplace de segunda mão para produtos de tecnologia, com autenticação, aprovação de anúncios, transações de compra/venda, painel administrativo e suporte PWA.',
  period: '2026',
  status: 'Projeto Educacional',
  statusColor: 'success',
  type: 'Full-Stack / Marketplace',
  complexity: 5,
  link: 'https://loja-virtual.pages.dev/',
  github: 'https://github.com/TW-Andre/Nexus-Store',
  technologies: [
    'React',
    'TypeScript',
    'Supabase',
    'Zod',
    'Vite',
    'PWA',
    'React Query',
    'React Hook Form'
  ],
  features: [
    'Login/Signup com email e senha via Supabase Auth',
    'Marketplace com filtros por categoria, preço e ordenação',
    'Criação de anúncios pendentes de aprovação admin',
    'Sistema transacional de compra/venda com saldo',
    'Solicitação de crédito (R$ 10 a R$ 5.000) com aprovação',
    'Painel administrativo para aprovação de produtos e créditos',
    'Notificações em tempo real e feedback com toasts',
    'Aplicação PWA offline e instalável'
  ],
  challenges: [
    'Gerenciamento de usuários com papéis distintos e permissões',
    'Validação de produtos e formulários com regras de negócio',
    'Implementação de transações seguras de saldo entre usuários',
    'Desenvolvimento de painel admin para moderação e métricas',
    'Integração com Supabase Auth, banco de dados e RPCs'
  ],
  results: [
    'Marketplace de tecnologia de segunda mão funcional e moderno',
    'Sistema completo de autenticação, anúncios e transações',
    'Painel admin para aprovação de produtos e créditos',
    'Interface responsiva com boa experiência mobile/desktop',
    'Base técnica sólida para evolução do produto'
  ]
};

// Dados adicionais sobre tipos de usuário
const userTypes = [
  {
    role: 'Visitante',
    icon: 'mdi-eye-outline',
    permissions: ['Ver catálogo público', 'Navegar produtos', 'Filtrar por categoria/preço', 'Visualizar ofertas']
  },
  {
    role: 'Usuário',
    icon: 'mdi-account',
    permissions: ['Comprar produtos', 'Anunciar itens', 'Solicitar crédito', 'Ver meus produtos', 'Acessar área autenticada']
  },
  {
    role: 'Admin',
    icon: 'mdi-shield-account',
    permissions: ['Aprovar/Recusar produtos', 'Aprovar/Recusar créditos', 'Gerenciar painel administrativo', 'Visualizar métricas', 'Moderação e relatórios']
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

    <!-- Seção de integração Supabase -->
    <v-card class="mt-8 mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-database" size="small" class="me-2"></v-icon>
        Integração Supabase
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Autenticação com Supabase Auth para login/signup</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>CRUD de produtos com validação de status e aprovação</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Transferência de saldo comprador → vendedor</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Solicitação e aprovação de créditos via fluxo admin</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Listeners de auth e carregamento de perfil ao login</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Seção de validações e restrições -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-shield-check" size="small" class="me-2"></v-icon>
        Validações e Restrições
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="mb-4 pa-4">
              <v-card-title class="text-subtitle-2">Validações</v-card-title>
              <v-list dense>
                <v-list-item prepend-icon="mdi-check" class="px-0">
                  <v-list-item-title>Título do produto: mínimo 5 caracteres</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-check" class="px-0">
                  <v-list-item-title>Descrição: mínimo 15 caracteres</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-check" class="px-0">
                  <v-list-item-title>Preço: valor positivo maior que zero</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-check" class="px-0">
                  <v-list-item-title>Condição: 'new' ou 'used'</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-check" class="px-0">
                  <v-list-item-title>Crédito: R$ 10 a R$ 5.000</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="mb-4 pa-4">
              <v-card-title class="text-subtitle-2">Restrições de Negócio</v-card-title>
              <v-list dense>
                <v-list-item prepend-icon="mdi-alert-circle" class="px-0">
                  <v-list-item-title>Não autenticado não acessa compras nem anúncios</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-alert-circle" class="px-0">
                  <v-list-item-title>Usuário comum não acessa painel admin</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-alert-circle" class="px-0">
                  <v-list-item-title>Saldo insuficiente bloqueia transação</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-alert-circle" class="px-0">
                  <v-list-item-title>Usuário não pode comprar seu próprio produto</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-alert-circle" class="px-0">
                  <v-list-item-title>Produtos não aprovados não aparecem na vitrine</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="pt-6" variant="flat" elevation="0" border>
      <v-card-text class="text-center text-body-2 text-medium-emphasis">
        <p>
          Este projeto demonstra compreensão profunda de marketplace P2P, autenticação, gerenciamento de permissões, validação e operações transacionais em um produto moderno de segunda mão.
        </p>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style scoped>
</style>

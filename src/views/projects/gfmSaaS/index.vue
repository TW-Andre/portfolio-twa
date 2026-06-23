<script setup>
import ProjectDetailCard from "@/components/projectsPreview/ProjectDetailCard.vue";

const breadcrumb = [
  {
    title: 'Projetos',
    disabled: true,
  },
  {
    title: 'Gestão de Frotas e Manutenções',
    disabled: false,
  },
];

const gfmSaaSData = {
  title: 'Gestão de Frotas e Manutenções — SaaS',
  description: 'Plataforma de gestão de frotas e manutenções automotivas, focada em controle de custos, status de veículos em tempo real e níveis de acesso hierárquicos. Desenvolvida com React, TypeScript e Supabase, combina arquitetura limpa no front-end com regras de negócio automatizadas no banco de dados.',
  period: '2026',
  status: 'Projeto Educacional',
  statusColor: 'success',
  type: 'Full-Stack / SaaS',
  complexity: 5,
  link: 'https://saas-gfm.pages.dev/',
  technologies: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'React Router DOM',
    'Context API',
    'Supabase',
    'PostgreSQL',
    'Row Level Security',
    'Lucide React',
    'React Hot Toast'
  ],
  features: [
    'Cadastro e acompanhamento de veículos com status em tempo real',
    'Registro de manutenções e serviços automotivos com histórico',
    'Controle de custos e visão consolidada da frota',
    'Autenticação e perfis de acesso via Supabase Auth',
    'Rotas protegidas com redirecionamento por perfil logado',
    'Filtros avançados: busca textual, status e intervalo de datas',
    'Paginação server-side com .range() e count exato do PostgREST',
    'Breadcrumbs dinâmicos para navegação contextual',
    'Interface responsiva mobile-first com menu lateral adaptativo'
  ],
  challenges: [
    'Separar lógica de dados dos componentes visuais com Service Pattern',
    'Implementar RBAC no front-end e no banco com Row Level Security',
    'Delegar sincronização de status de veículos a triggers PostgreSQL',
    'Otimizar buscas relacionais com joins nativos (!inner) do Supabase',
    'Reduzir requisições substituindo debounce onChange por busca onSubmit',
    'Garantir tabelas legíveis em mobile com scroll horizontal controlado'
  ],
  results: [
    'SaaS funcional para gestão de frotas e manutenções automotivas',
    'Arquitetura escalável com services dedicados e código testável',
    'Segurança em camadas: UI reativa ao perfil + RLS no PostgreSQL',
    'Performance otimizada com paginação real e buscas controladas',
    'Experiência responsiva consistente em mobile e desktop'
  ]
};

const userRoles = [
  {
    role: 'Admin (Gestor)',
    icon: 'mdi-shield-account',
    color: 'primary',
    permissions: [
      'Cadastrar, editar e excluir veículos',
      'Registrar e gerenciar manutenções',
      'Acessar painéis e páginas administrativas',
      'Visualizar custos e métricas da frota',
      'Gerenciar perfis e dados sensíveis'
    ]
  },
  {
    role: 'Driver (Motorista)',
    icon: 'mdi-steering',
    color: 'teal',
    permissions: [
      'Visualizar veículos atribuídos',
      'Consultar histórico de manutenções',
      'Acompanhar status dos veículos',
      'Interface simplificada sem ações destrutivas',
      'Acesso restrito a páginas sensíveis'
    ]
  }
];

const architectureHighlights = [
  {
    title: 'Service Pattern',
    icon: 'mdi-layers-triple',
    description: 'Lógica de comunicação com o banco isolada em arquivos dedicados (ex: vehiclesService.ts, profileService.ts), mantendo componentes visuais limpos, testáveis e fáceis de manter.'
  },
  {
    title: 'RBAC — Controle por Cargos',
    icon: 'mdi-account-key',
    description: 'Perfis Admin e Driver com reação dinâmica no front-end (ocultação de botões e rotas) e garantia de segurança no banco via Row Level Security.'
  },
  {
    title: 'Triggers PostgreSQL',
    icon: 'mdi-database-cog',
    description: 'Regras de negócio delegadas ao banco: ao registrar um novo serviço, uma trigger altera automaticamente o status do veículo para "Em Manutenção", sem múltiplas requisições do front-end.'
  }
];

const performanceItems = [
  'Busca controlada via submissão de formulário (onSubmit) em vez de debounce onChange, reduzindo leituras no banco',
  'Paginação server-side com .range() e count(\'exact\') — apenas as linhas visíveis são transferidas',
  'Buscas relacionais otimizadas com joins nativos (!inner) para filtrar por tipo de serviço ou placa do veículo na mesma barra de pesquisa'
];

const uiUxItems = [
  {
    title: 'Mobile-First',
    icon: 'mdi-cellphone',
    items: [
      'Menu lateral vira overlay total ativado pelo header no mobile',
      'No desktop, barra lateral expansível ao passar o mouse (hover)',
      'Área de trabalho limpa em qualquer dispositivo'
    ]
  },
  {
    title: 'Tabelas Responsivas',
    icon: 'mdi-table',
    items: [
      'Contêineres com overflow-x-auto e min-w para evitar quebra de layout',
      'Rolagem horizontal suave em telas pequenas',
      'Dados tabulares sempre acessíveis'
    ]
  },
  {
    title: 'Filtros e Navegação',
    icon: 'mdi-filter-variant',
    items: [
      'Painéis compostos: busca + select de status + date pickers de intervalo',
      'Breadcrumbs dinâmicos que traduzem a URL em caminhos legíveis (ex: Home > Manutenções)',
      'Notificações com React Hot Toast para feedback imediato'
    ]
  }
];
</script>

<template>
  <v-card class="mt-3 px-lg-10 px-3" flat>
    <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>

    <ProjectDetailCard :projectData="gfmSaaSData" />

    <!-- Perfis de acesso -->
    <v-card class="mt-8 mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-account-multiple" size="small" class="me-2"></v-icon>
        Perfis de Acesso (RBAC)
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="userRole in userRoles" :key="userRole.role" cols="12" md="6">
            <v-card variant="outlined" class="h-100">
              <v-card-text>
                <div class="d-flex align-center mb-4">
                  <v-icon :icon="userRole.icon" :color="userRole.color" class="me-2"></v-icon>
                  <span class="text-subtitle-2 font-weight-bold">{{ userRole.role }}</span>
                </div>
                <v-list dense>
                  <v-list-item
                    v-for="permission in userRole.permissions"
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

    <!-- Arquitetura e boas práticas -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-sitemap" size="small" class="me-2"></v-icon>
        Arquitetura e Boas Práticas
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="highlight in architectureHighlights"
            :key="highlight.title"
            cols="12"
            md="4"
          >
            <v-card variant="outlined" class="h-100 pa-2">
              <v-card-text>
                <div class="d-flex align-center mb-3">
                  <v-icon :icon="highlight.icon" color="primary" class="me-2"></v-icon>
                  <span class="text-subtitle-2 font-weight-bold">{{ highlight.title }}</span>
                </div>
                <p class="text-body-2 text-medium-emphasis mb-0">
                  {{ highlight.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Performance -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-speedometer" size="small" class="me-2"></v-icon>
        Performance e Economia de Recursos
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item
            v-for="(item, index) in performanceItems"
            :key="index"
            prepend-icon="mdi-lightning-bolt"
            class="px-0"
          >
            <v-list-item-title class="text-body-2">
              {{ item }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- UI/UX -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-palette" size="small" class="me-2"></v-icon>
        UI/UX e Design Responsivo
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="section in uiUxItems"
            :key="section.title"
            cols="12"
            md="4"
          >
            <v-card variant="outlined" class="h-100 pa-2">
              <v-card-text>
                <div class="d-flex align-center mb-3">
                  <v-icon :icon="section.icon" color="primary" class="me-2"></v-icon>
                  <span class="text-subtitle-2 font-weight-bold">{{ section.title }}</span>
                </div>
                <v-list dense>
                  <v-list-item
                    v-for="item in section.items"
                    :key="item"
                    prepend-icon="mdi-check"
                    class="px-0"
                  >
                    <v-list-item-title class="text-body-2">
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Integração Supabase -->
    <v-card class="mb-6" variant="outlined">
      <v-card-title class="text-subtitle-1">
        <v-icon icon="mdi-database" size="small" class="me-2"></v-icon>
        Integração Supabase
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Autenticação com Supabase Auth e Context API (AuthContext)</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>PostgreSQL com Row Level Security por perfil de usuário</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Triggers para automação de status de veículos ao registrar serviços</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>PostgREST com paginação .range() e contagem exata de registros</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-check" class="px-0">
            <v-list-item-title>Joins relacionais (!inner) para buscas combinadas em múltiplas tabelas</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

  </v-card>
</template>

<style scoped>
</style>

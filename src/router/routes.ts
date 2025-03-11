import LeftSideBar from "@/layouts/leftSideBar/leftSideBar.vue";

const projetos = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/dashboard/index.vue")
  },
  {
    path: '/projeto1',
    name: 'Projeto 1',
    component: () => import("@/views/projeto1/index.vue")
  },
  {
    path: '/projeto2',
    name: 'Projeto 2',
    component: () => import("@/views/projeto2/index.vue"),
  },
]

export const myRoutes = [
  ...projetos
]

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ProjectsView from '../views/ProjectView.vue'
import ResoucesView from '../views/ResoucesView.vue'
import CostsView from '../views/CostsView.vue'
import ReportsView from '../views/ReportsView.vue'
import TasksView from '../views/TasksView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  //page for not found links
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
  //Nav-bar elements
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/resources',
    name: 'resources',
    component: ResoucesView
  },
  {
    path: '/costs',
    name: 'costs',
    component: CostsView
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

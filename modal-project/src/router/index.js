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
import PortfolioDetails from '../views/PortfolioDetails.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import { projectAuth } from '../firebase/config'

//auth guard
const requireAuth =  (to, from, next) =>{
  let user = projectAuth.currentUser
  if (!user) {
    next( { name: 'login' })
  }else{
    next()
  }
}

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
  {
    path: '/projects/:id',
    name: 'projectDetails',
    component: ProjectDetails
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
    component: DashboardView,
    beforeEnter: requireAuth
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    beforeEnter: requireAuth
  },
  {
    path: '/portfolio/:id',
    name: 'portfolioDetails',
    component: PortfolioDetails,
    beforeEnter: requireAuth,
    props:true
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    beforeEnter: requireAuth
  },
  {
    path: '/resources',
    name: 'resources',
    component: ResoucesView,
    beforeEnter: requireAuth
  },
  {
    path: '/costs',
    name: 'costs',
    component: CostsView,
    beforeEnter: requireAuth
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView,
    beforeEnter: requireAuth
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView,
    beforeEnter: requireAuth
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

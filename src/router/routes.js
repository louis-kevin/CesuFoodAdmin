import Login from '@/components/Auth/Login'
import DashBoard from '@/components/Dashboard'
import Produtos from '@/components/Produtos'
import Funcionarios from '@/components/Funcionarios'
import BasePage from '@/components/BasePage'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/',
    name: 'base-page',
    component: BasePage,
    children: [
      {
        path: 'dashboard',
        component: DashBoard,
        name: 'dashboard'
      },
      {
        path: 'produtos',
        component: Produtos,
        name: 'produtos'
      },
      {
        path: 'funcionarios',
        component: Funcionarios,
        name: 'funcionarios'
      }
    ],
    meta: {
      auth: true
    }
  }
]

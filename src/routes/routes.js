import { endPoints } from 'services/helpers/config'
import {
  AdminDashboardPage,
  CustomerDashboard,
  Holds,
  Invoices,
  LoginPage,
  Reports,
  SupplierDashboard
} from '../pages'

const { login } = endPoints.auth

export const loginFlowRoutes = [
  {
    path: '/admin/login',
    PageComponent: LoginPage,
    layout: login
  },
  {
    path: '/customer/login',
    PageComponent: LoginPage,
    layout: login
  },
  {
    path: '/supplier/login',
    PageComponent: LoginPage,
    layout: login
  }
]

export const adminFlowRoutes = [
  {
    path: '/dashboard',
    PageComponent: AdminDashboardPage
  },
  {
    path: '/reports',
    PageComponent: Reports
  }
]

export const customerFlowRoutes = [
  {
    path: '/dashboard',
    PageComponent: CustomerDashboard
  },
  {
    path: '/invoices',
    PageComponent: Invoices
  },
  {
    path: '/list',
    PageComponent: Invoices
  }
]

export const supplierFlowRoutes = [
  {
    path: '/dashboard',
    PageComponent: SupplierDashboard
  },
  {
    path: '/holds',
    PageComponent: Holds
  }
]

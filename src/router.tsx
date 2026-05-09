import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import AppLayout from './AppLayout'
import Booking from './Booking'
import { HouseRulesPage, PrivacyPolicyPage, TermsOfUsePage, WorkingHoursPage } from './InfoPages'

const rootRoute = createRootRoute({
  component: AppLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/booking',
  component: Booking,
})

const bookingPackageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/booking/$bookingPackage',
  component: Booking,
})

const workingHoursRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/working-hours',
  component: WorkingHoursPage,
})

const houseRulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/house-rules',
  component: HouseRulesPage,
})

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
})

const termsOfUseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-of-use',
  component: TermsOfUsePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  bookingRoute,
  bookingPackageRoute,
  workingHoursRoute,
  houseRulesRoute,
  privacyPolicyRoute,
  termsOfUseRoute,
])

export const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
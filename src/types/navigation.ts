import { createStackNavigator } from '@react-navigation/stack'
import { ChartKey } from '@terra-money/use-native-station'

/* Root */
export type RootStackParams = {
  Tabs: undefined
  AuthMenu: undefined
  Select: undefined
  New: undefined
  Add: undefined
}

export const RootStack = createStackNavigator<RootStackParams>()

/* Tabs */
export type TabsStackParams = {
  Dashboard: undefined
  Market: undefined
}

export const TabsStack = createStackNavigator<TabsStackParams>()

/* Dashboard */
export type DashboardRouteParams = {
  Dashboard: undefined
  Chart: { chartKey: ChartKey }
}

/* Staking */
export type StakingRouteParams = {
  Validator: { address: string }
}

/* Staking */
export type GovernanceRouteParams = {
  Governance: undefined
  Proposal: { id: string }
}

import React from 'react'
import { useMenu, useMarket } from '@terra-money/use-native-station'
import { StatusBar } from 'react-native'
import Page from '../../components/Page'
import Price from './Price'
import RateList from './RateList'
// import Swap from '../../post/Swap'

const Market = () => {
  const { Market: title } = useMenu()
  const { ui, ...api } = useMarket()

  return (
    <Page {...api} title={title}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      {ui && <Price actives={ui.actives} />}
      {ui && <RateList denoms={ui.actives} />}
    </Page>
  )
}

export default Market

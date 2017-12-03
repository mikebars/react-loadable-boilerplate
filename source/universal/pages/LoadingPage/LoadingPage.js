/* @flow */

import React from 'react'
import { Helmet } from 'react-helmet'

import Page from 'universal/components/Page'
import Center from 'universal/components/Center'
import Text from 'universal/components/Text'

export const LoadingPage = () => (
  <Page backgroundColor={'#4CAF50'}>
    <Helmet>
      <title>Loading...</title>
    </Helmet>
    <Center>
      <Text fontSize={'10vw'}>Loading...</Text>
    </Center>
  </Page>
)

export default LoadingPage

/* @flow */

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Page from 'universal/components/Page'
import Center from 'universal/components/Center'
import Text from 'universal/components/Text'

export const IndexPage = () => (
  <Page backgroundColor={'#03A9F4'}>
    <Helmet>
      <title>Index Page</title>
    </Helmet>
    <Center>
      <Text fontSize={'10vw'}>Index Page</Text>
    </Center>
    <Center>
      <Link to={'/not-found'}>
        <Text fontSize={'5vw'}>Go to Not Found Page</Text>
      </Link>
    </Center>
  </Page>
)

export default IndexPage

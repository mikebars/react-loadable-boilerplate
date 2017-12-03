/* @flow */

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Page from 'universal/components/Page'
import Center from 'universal/components/Center'
import Text from 'universal/components/Text'

export const NotFoundPage = () => (
  <Page backgroundColor={'#FFEB3B'}>
    <Helmet>
      <title>Not Found Page</title>
    </Helmet>
    <Center>
      <Text fontSize={'10vw'}>Not Found Page</Text>
    </Center>
    <Center>
      <Link to={'/'}>
        <Text fontSize={'5vw'}>Go to Index Page</Text>
      </Link>
    </Center>
  </Page>
)

export default NotFoundPage

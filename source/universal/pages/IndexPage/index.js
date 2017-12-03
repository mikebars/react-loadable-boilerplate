/* @flow */

import Loadable from 'react-loadable'

import { LoadingPage } from 'universal/pages/LoadingPage/LoadingPage'

export default Loadable({
  loader: () => import('./IndexPage'),
  loading: LoadingPage,
})

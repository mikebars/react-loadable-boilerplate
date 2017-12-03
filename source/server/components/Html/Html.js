/* @flow */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import { normalize } from 'polished'
import { Capture } from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'

import faviconUrl from 'server/components/Html/images/favicon.ico'

export const Html = ({ children, clientStats, reactLoadableStats }: Object) => {
  try {
    injectGlobal`${normalize()}`

    injectGlobal`
      html, body, #${process.env.REACT_CONTAINER_ID} {
        height: 100%;
  
        margin: 0;
  
        padding: 0;
  
        width: 100%;
      }
    `

    const modules = []

    const styleSheet = new ServerStyleSheet()

    styleSheet.collectStyles(
      renderToString(
        <Capture report={moduleName => modules.push(moduleName)}>
          {children}
        </Capture>,
      ),
    )

    const helmet = Helmet.renderStatic()

    const htmlAttributes = helmet.htmlAttributes.toComponent()
    const bodyAttributes = helmet.bodyAttributes.toComponent()

    const base = helmet.base.toComponent()
    const link = helmet.link.toComponent()
    const meta = helmet.meta.toComponent()
    const noscript = helmet.noscript.toComponent()
    const script = helmet.script.toComponent()
    const style = helmet.style.toComponent()
    const title = helmet.title.toComponent()

    /* webpack bundles */

    const { bootstrap, vendor, main } = clientStats.assetsByChunkName

    const bootstrapFile = Array.isArray(bootstrap) ? bootstrap[0] : bootstrap
    const vendorFile = Array.isArray(vendor) ? vendor[0] : vendor
    const mainFile = Array.isArray(main) ? main[0] : main

    /* react-loadable bundles */

    const bundles = getBundles(reactLoadableStats, modules)

    const styles = bundles.filter(bundle => bundle.file.endsWith('.css'))
    const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'))

    return (
      <html {...htmlAttributes}>
        <head>
          {base}
          {link}
          {meta}
          {noscript}
          {script}
          {style}
          {title}
          <link rel={'shortcut icon'} href={faviconUrl} />
          {styleSheet.getStyleElement()}
          {styles.map(({ file }) => (
            <link key={file} href={`/${file}`} rel={'stylesheet'} />
          ))}
        </head>
        <body {...bodyAttributes}>
          <div id={process.env.REACT_CONTAINER_ID}>{children}</div>
          <script src={`/${bootstrapFile}`} />
          <script src={`/${vendorFile}`} />
          {scripts.map(({ file }) => <script key={file} src={`/${file}`} />)}
          <script src={`/${mainFile}`} />
        </body>
      </html>
    )
  } catch (error) {
    return null
  }
}

export default Html

import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'

import theme from '../components/theme'
import Meta from '../components/meta'

class Root extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          <Global styles={(theme) => ({ body: theme.styles.root })} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default Root

import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import theme from '../components/theme'

const name = 'React Weather Next'
const desc = 'The weather, in React and Next.js'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>{name}</title>
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@dennisforthewin" />
          <meta property="twitter:description" content={desc} />
          <meta property="og:title" content={name} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://react-weather-next.now.sh/" />
          <meta property="description" content={desc} />
        </Head>
        <ThemeProvider theme={theme}>
          <Global styles={(theme) => ({ body: theme.styles.root })} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

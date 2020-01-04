import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
    } = this.props

    return (
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp

import Head from 'next/head'
import type { AppProps } from 'next/app'
import globalStyles from '../styles/globalStyles'
import { ThemeProvider } from 'next-themes'
import { darkTheme, lightTheme } from '../styles'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <Head>
        <title>Cryptocons.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

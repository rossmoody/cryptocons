import type { AppProps } from 'next/app'
import globalStyles from '../styles/globalStyles'
import { ThemeProvider } from 'next-themes'
import { darkTheme, lightTheme } from '@styles'
import { Meta } from '@layout/Meta'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="text-slate-800 dark:text-slate-50 dark:bg-slate-900 h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

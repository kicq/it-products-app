import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }:AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My top Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

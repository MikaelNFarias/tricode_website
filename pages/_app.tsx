import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Mikael</title>
        <meta name="description" content="Mikael - Portfolio" />
        <link rel="icon" href="/m-solid.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

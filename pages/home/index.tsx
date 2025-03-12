'use client';
import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as G from '../../styles/homeStyles';

const Home: NextPage = () => {
  return (
    <G.HomeBackground>
      <Head>
        <title>Home - TriCode</title>
      </Head>
      <G.Container>
        <G.Logo src="/logo.png" alt="Logo" />
        <G.Message>Em desenvolvimento...</G.Message>
      </G.Container>
    </G.HomeBackground>
  );
};

export default Home;

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
      INICIO
    </G.HomeBackground>
  );
};

export default Home;

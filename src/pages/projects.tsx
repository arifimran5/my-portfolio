import Navbar from '@/components/Layout/Header';
import ProjectList from '@/components/Project';
import Head from 'next/head';
import React from 'react';

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name='description' content='Porject page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <h1 className='text-4xl font-extrabold'>Projects</h1>
      <ProjectList />
    </>
  );
};

export default projects;

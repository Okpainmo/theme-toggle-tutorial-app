import React from 'react';
import Navbar from '@/components/Navbar';

function AboutPage() {
  return (
    <main className='min-h-screen text--colors_default bg--default'>
      <Navbar />
      <h1 className='text-3xl font-bold underline text--colors_primary px-20 py-12'>
        This is the about page.
      </h1>
    </main>
  );
}

export default AboutPage;

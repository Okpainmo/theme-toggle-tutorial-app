import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false,
});

function Navbar() {
  return (
    <nav className='navbar w-full px-20 py-3 shadow-lg'>
      <div className='flex items-center'>
        <section className='nav-left font-bold mr-auto text-xl'>TTTP</section>
        <ul className='nav-links flex  gap-16 items-center'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/about'>
            <li>About</li>
          </Link>
          <Link href='/contacts'>
            <li>Contacts</li>
          </Link>
        </ul>
        <DynamicThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;

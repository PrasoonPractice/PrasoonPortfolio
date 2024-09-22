import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <>
      <header className='bg-zinc-900 sticky top-0 text-neutral-300 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-2 flex-wrap pb-0'>
        <Logo/>
        <NavLinks/>
      </header>
    </>
  )
}

export default Navbar

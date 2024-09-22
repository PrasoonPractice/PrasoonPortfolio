import React from 'react';
import Hero from './Hero';
import Goto from './Goto'

function Home() {
  return (
    <>
        <div className='w-full flex flex-col items-center justify-between'>
            <Hero/>
            <Goto/>
        </div>
    </>
  )
}

export default Home

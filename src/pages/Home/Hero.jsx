import img from '../../assets/Design uten navn.png';
import htmlBlack from '../../assets/tech/html-black.svg';
import htmlColor from '../../assets/tech/html-color.svg';
import cssBlack from '../../assets/tech/css-black.svg';
import cssColor from '../../assets/tech/css-color.svg';
import jsBlack from '../../assets/tech/js-black.svg';
import jsColor from '../../assets/tech/js-color.svg';
import reactBlack from '../../assets/tech/react-black.svg';
import reactColor from '../../assets/tech/react-color.svg';
import tailwindBlack from '../../assets/tech/tailwind-black.svg';
import tailwindColor from '../../assets/tech/tailwind-color.svg';

function Hero() {
  return (
    <>
      <section className='w-full flex items-center justify-center' >
        <div className='font-mono w-1/3 flex flex-col justify-center'>
          <h1 className='text-8xl font-medium'>Prasoon Srivastava</h1>
          <h3 className='text-4xl'>Frontend Developer</h3>
          <br/><br/>
          <div className='technologies flex justify-evenly items-center relative right-[65px] h-[55px]'>
            {/* HTML Icon */}
            <div className='relative w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] transition-all duration-200'>
              <img className='absolute inset-0 block w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-0' src={htmlBlack} alt='html'/>
              <img className='absolute inset-0 block w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100' src={htmlColor} alt='html'/>
            </div>
            {/* CSS Icon */}
            <div className='relative w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] transition-all duration-200'>
              <img className='absolute inset-0 block w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-0' src={cssBlack} alt='css'/>
              <img className='absolute inset-0 block w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100' src={cssColor} alt='css'/>
            </div>
            {/* JavaScript Icon */}
            <div className='relative w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] transition-all duration-200'>
              <img className='absolute inset-0 block w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-0' src={jsBlack} alt='js'/>
              <img className='absolute inset-0 block w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100' src={jsColor} alt='js'/>
            </div>
            {/* React Icon */}
            <div className='relative w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] transition-all duration-200'>
              <img className='absolute inset-0 block w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-0' src={reactBlack} alt='react'/>
              <img className='absolute inset-0 block w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100' src={reactColor} alt='react'/>
            </div>
            {/* Tailwind Icon */}
            <div className='relative w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] transition-all duration-200'>
              <img className='absolute inset-0 block w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-0' src={tailwindBlack} alt='tailwind'/>
              <img className='absolute inset-0 block w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100' src={tailwindColor} alt='tailwind'/>
            </div>
          </div>
        </div>
        <div className='mainImage w-[400px] h-[400px]'>
          <img src={img} alt='Profile Picture'/>
        </div>
      </section>
    </>
  )
}

export default Hero;

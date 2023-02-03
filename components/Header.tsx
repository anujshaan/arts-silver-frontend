import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'


const Header = () => {
  return (
    <div className='w-full absolute z-20'>
      <div className='max-w-7xl mx-auto py-8 flex items-center justify-between px-8 lg:px-0 '>
        <Link href='/'>
          <h2 className='text-lg font-bold sm:text-xl md:text-3xl lg:text-4xl lg:font-extrabold '>Arts and Silvers</h2>
        </Link>
        <div>
          <div className='w-8 h-8 lg:hidden cursor-pointer'><Bars3Icon className='w-full h-full'/></div>
          <div className='hidden lg:flex justify-around items-center'>
            <ul className='flex items-center space-x-16 text-xl font-light'>
              <li className='cursor-pointer hover:border-b-2 transition-all delay-75 py-1'>Explore</li>
              <li className='cursor-pointer hover:border-b-2 transition-all delay-75 py-1'>Blog</li>
              <li className='cursor-pointer hover:border-b-2 transition-all delay-75 py-1'>Subscribe</li>
            </ul>
            <Link href='/signin' className='mx-12 space-x-6'>
              <button className='border rounded-sm border-black p-3 px-12 hover:bg-black hover:text-white font-semibold hover:scale-110 transition-all ease-linear delay-0'>Sign In</button>
              {/* <button className='border-2 bg-black text-white hover:scale-110 transition-all ease-linear delay-75 p-3 px-8 rounded-full font-semibold'>Sign Up</button> */}
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
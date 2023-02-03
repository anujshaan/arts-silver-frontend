

const Carousel = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute w-full md:w-[60%] top-[60%] translate-y-[-60%]'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-center font-semibold'>"EVERY CANVAS IS JOURNEY ALL ITS OWN"</h2>
        <div className=' mt-20 flex-col flex md:flex-row items-center justify-center space-x-4'>
          <h4 className='text-lg md:text-2xl lg:text-4xl font-extralight'>Join the adventure with us</h4>
          <button className='py-2 md:py-3 font-extralight hover:bg-black rounded-sm hover:text-white transition-all ease-linear border border-black px-8 '>Get Started</button>
        </div>
      </div>
      <div className='h-full w-full'>
        <img src="/assets/heroImg2.png" alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Carousel
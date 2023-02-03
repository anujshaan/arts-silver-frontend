import Link from 'next/link'

const Signup = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className=' w-[70%] h-[70vh] mt-24 flex'>
        <div className='flex-1 hidden lg:block'>
          <img src="/assets/deer.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className='flex-1 flex md:border border-l-0 border-black items-center justify-center'>
          <form className='space-y-6 w-[80%]'>
            <div className="sm:flex space-x-0.5 w-full space-y-2 sm:space-y-0 ">
              <div className='flex flex-col w-full'>
                <label htmlFor="" className='font-semibold'>First name</label>
                <input type="text" className='border rounded-sm border-black p-2 w-full' />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor="" className='font-semibold'>Last name</label>
                <input type="text" className='border rounded-sm border-black p-2 w-full' />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="" className='font-semibold'>Username</label>
              <input type="text" className='border rounded-sm border-black p-2' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="" className='font-semibold'>Email address</label>
              <input type="email" className='border rounded-sm border-black p-2' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="" className='font-semibold'>Password</label>
              <input type="password" className='border rounded-sm border-black p-2' />
            </div>
            <div className='space-y-2'>
              <button className='p-3 rounded-sm bg-black text-white w-full'>Sign Up</button>
              <div className='w-full text-right space-x-2'>
                <small className=''>Already have an account?</small>
                <Link href='/signin'><small className="font-semibold">Sign in here</small></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
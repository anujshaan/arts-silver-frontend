import Link from "next/link"

const UserSelection = () => {
  return (
    <div className="w-full border-t-2 border-gray-400 h-48 bg-white flex items-center justify-center">
      <div className="w-[40%] h-full flex items-center justify-center">
        <Link href="/explore" className="text-2xl sm:text-4xl font-bold hover:text-5xl transition-all ease-linear">Explore</Link>
      </div>
      <div className="w-[40%] h-full flex items-center justify-center ">
        <Link href="/why-us" className="text-2xl sm:text-4xl font-bold hover:text-5xl transition-all ease-linear">Join Us</Link>
      </div>
    </div>
  )
}

export default UserSelection
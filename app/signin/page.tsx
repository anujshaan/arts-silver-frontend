import Link from "next/link";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" w-[70%] h-[70vh] mt-24 flex">
        <div className="w-[50%] flex md:border border-black items-center justify-center">
          <form className="space-y-6 w-full md:w-[80%]">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Username
              </label>
              <input
                type="text"
                className="border rounded-sm border-black p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                className="border rounded-sm border-black p-2"
              />
            </div>
            <div className="space-y-2">
              <button className="p-3 rounded-sm bg-black text-white w-full">
                Sign In
              </button>
              <div className="w-full text-right space-x-2">
                <small className="">Don't have an account?</small>
                <Link href="/signup">
                  <>
                    <small className="font-semibold">Sign up here</small>
                  </>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:block lg:w-[50%] bg-red-600 overflow-hidden">
          <img src="/assets/deer.jpg" alt="" className="w-full h-full object-cover" />
          {/* <Image
            src="/assets/deer.jpg"
            alt="deer Image"
            fill
            style={}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;

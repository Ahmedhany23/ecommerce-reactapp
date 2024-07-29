export default function Login() {
  return (
    <div className="  2xl:container 2xl:mx-auto pt-[3.75rem] pb-[8.75rem] w-full">
      <div className="flex justify-center xl:justify-normal xl:gap-20 2xl:gap-[8.063rem]">
        <img
          src="/images/Signup/image.webp"
          alt="Signup"
          className="hidden xl:block"
        />
        <div className="flex justify-center items-center font-poppins">
          <div className="w-full sm:w-[371px] flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-medium text-text-3 font-inter  ">
                Log in to Exclusive
              </h1>
              <p className="text-text-3 text-base font-normal">
                Enter your details below
              </p>
            </div>

            <form>
              <div className="flex flex-col gap-10">
                <input
                  type="Email"
                  id="Email"
                  placeholder="Email or Phone Number"
                  className="w-full py-2 border-b border-b-black/50 outline-none "
                  required
                />

                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full py-2 border-b border-b-black/50 outline-none "
                  required
                />
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center">
                <button type="submit" className=" py-4  btn-1 ">
                  Log in
                </button>
                <p className=" text-secondary-3 text-base font-normal cursor-pointer">
                  Forget Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

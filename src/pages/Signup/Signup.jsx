import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className=" container 2xl:mx-auto pt-[3.75rem] pb-[8.75rem] w-full">
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
                Create an account
              </h1>
              <p className="text-text-3 text-base font-normal">
                Enter your details below
              </p>
            </div>

            <form>
              <div className="flex flex-col gap-10">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full py-2 border-b border-b-black/50 outline-none "
                  required
                />

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
              <div className="mt-10">
                <button type="submit" className="w-full py-4  btn-1 mb-4">
                  Create Account
                </button>
                <button
                  type="button"
                  className="w-full py-4 border border-black/50 text-base font-normal flex items-center justify-center rounded  hover:opacity-50 transition mb-8"
                >
                  <img
                    src="/images/icons/Icon-Google.png"
                    alt="google icon"
                    className="mr-4"
                  />
                  Sign up with Google
                </button>
                <p className="text-center text-black/70 text-base  ">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-text-3/70 border-b border-b-text-3 font-medium text-base ml-4 "
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

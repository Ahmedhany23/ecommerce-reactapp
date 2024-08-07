import { useNavigate } from "react-router";
import { useHeaderCustomization } from "../../hooks/HeaderCustomization";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from "framer-motion";
export default function Login() {
  const { setCartIcon } = useHeaderCustomization();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setCartIcon(false);
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => setCartIcon(true);
    }
    return () => setCartIcon(true);
  }, [setCartIcon, user, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case "auth/invalid-email":
            setError("Wrong Email");
            break;

          case "auth/user-not-found":
            setError("Wrong Email");
            break;

          case "auth/wrong-password":
            setError("Wrong Password");
            break;

          case "auth/too-many-requests":
            setError("Too many requests, please try aganin later");
            break;

          default:
            setError("Please check your email & password");
            break;
        }
      });
  };

  return (
    <section className="relative pt-[3.75rem] pb-[8.75rem]">
      {user && (
        <motion.div
          initial={{ x: "-200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-text-1 absolute top-6 px-10 py-4 bg-background-2"
        >
          Account Created
        </motion.div>
      )}
      <div className=" 2xl:container 2xl:mx-auto  w-full">
        <div className="flex justify-center xl:justify-normal xl:gap-20 2xl:gap-[8.063rem]">
          <img
            src="/images/Signup/image.webp"
            alt="Signup"
            className="hidden xl:block"
            loading="eager"
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
                {error && (
                  <p className="text-secondary-3 text-base font-normal">
                    {error}
                  </p>
                )}
              </div>

              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-10">
                  <input
                    type="Email"
                    id="Email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="w-full py-2 border-b border-b-black/50 outline-none "
                    required
                  />

                  <input
                    type="password"
                    id="password"
                    name="password"
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
    </section>
  );
}

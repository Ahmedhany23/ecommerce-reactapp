import { Link, useNavigate } from "react-router-dom";
import { useHeaderCustomization } from "../../hooks/HeaderCustomization";
import { useEffect, useState } from "react";
import NotFoundPage from "../NotFound/NotFoundPage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
export default function Signup() {
  const navigate = useNavigate();
  const { setCartIcon } = useHeaderCustomization();
  const [user] = useAuthState(auth);
  const [firebaseError, setfirebaseError] = useState(false);

  useEffect(() => {
    setCartIcon(false);

    if (user) {
       setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => setCartIcon(true);
    }

    return () => setCartIcon(true);
  }, [setCartIcon, navigate, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { username, email, password } = Object.fromEntries(formData);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error.code);
            // ...
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case "auth/invalid-email":
            setfirebaseError("Wrong Email");
            break;

          case "auth/user-not-found":
            setfirebaseError("Wrong Email");
            break;

          case "auth/wrong-password":
            setfirebaseError("Wrong Password");
            break;

          case "auth/too-many-requests":
            setfirebaseError("Too many requests, please try aganin later");
            break;

          default:
            setfirebaseError("Please check your email & password");
            break;
        }
      });
  };

  return (
    <AnimatePresence mode="wait">
      <section className="relative">
        {user && (
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            exit={{ x: "-200%" }}
            transition={{ duration: 0.3 }}
            className="text-text-1 absolute top-6 px-10 py-4 bg-background-2"
          >
            Account Created
          </motion.div>
        )}
        <div className="container 2xl:mx-auto pt-[3.75rem] pb-[8.75rem] w-full">
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
                  <h1 className="text-3xl font-medium text-text-3 font-inter">
                    Create an account
                  </h1>
                  <p className="text-text-3 text-base font-normal">
                    Enter your details below
                  </p>
                  {firebaseError && (
                    <p className="text-secondary-3 text-base font-normal">
                      {firebaseError}
                    </p>
                  )}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-10">
                    <input
                      type="text"
                      id="name"
                      name="username"
                      placeholder="Name"
                      className="w-full py-2 border-b border-b-black/50 outline-none"
                      required
                    />

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email or Phone Number"
                      className="w-full py-2 border-b border-b-black/50 outline-none"
                      required
                    />

                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="w-full py-2 border-b border-b-black/50 outline-none"
                      required
                    />
                  </div>
                  <div className="mt-10">
                    <button type="submit" className="w-full py-4 btn-1 mb-4">
                      Create Account
                    </button>
                    <button
                      type="button"
                      className="w-full py-4 border border-black/50 text-base font-normal flex items-center justify-center rounded hover:opacity-50 transition mb-8"
                    >
                      <img
                        src="/images/icons/Icon-Google.png"
                        alt="google icon"
                        className="mr-4"
                      />
                      Sign up with Google
                    </button>
                    <p className="text-center text-black/70 text-base">
                      Already have an account?
                      <Link
                        to="/login"
                        className="text-text-3/70 border-b border-b-text-3 font-medium text-base ml-4"
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
      </section>
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {  signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useSelector } from "react-redux";
export default function AccountCartIcons({
  favoriteNumber = false,
  cartIcons,
  user,
}) {
  const data = useSelector((state) => state.cart.selectedProducts);
  const [hover, setHover] = useState(false);
  const [cartNumber, setCartNumber] = useState(false);
  const navigate = useNavigate();
  const handleSignout = () => {

    if (user) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {});
    }
    
  };
  useEffect(()=>{
    if(data){
     setCartNumber(data.length)
    }
  },[data])
    
  return (
    <div className="flex items-center gap-4">
      {cartIcons && (
        <>
          <button className="relative">
            {favoriteNumber && (
              <div className=" absolute -right-1 -top-1 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-secondary-3 text-text-1 ">
                {favoriteNumber}
              </div>
            )}

            <img src="/images/icons/Wishlist.png" alt="heart" />
          </button>
          <button className="relative">
            {cartNumber && (
              <div className=" absolute -right-1 -top-1 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-secondary-3  text-text-1 ">
                {cartNumber}
              </div>
            )}
            <Link to="/cart">
              <img src="/images/icons/Cart1.png" alt="cart" />
            </Link>
          </button>
        </>
      )}
      {user && (
        <div className="relative">
          <button
            onClick={() => setHover(!hover)}
            className="flex items-center justify-center font-thin text-3xl rounded-full text-text-3 hover:bg-secondary-3 hover:text-text-1 transition duration-200 "
          >
            <FiUser />
          </button>
          <AnimatePresence mode="wait">
            {hover && (
              <motion.div 
              initial={{y:100,opacity:0}} animate={{y:3,opacity:1}} exit={{y:100,opacity:0}}  className="w-[224px] rounded bg-secondary-1 flex flex-col gap-4 items-start px-4 py-5 absolute  right-0 z-30 ">
                <Link to={"/account"} className="hover:text-secondary-3 transition duration-200">My Account</Link>
                <button onClick={handleSignout} className="hover:text-secondary-3 transition duration-200">Logout</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function AccountCartIcons({
  favoriteNumber = false,
  cartNumber = false,
  cartIcons,
  user,
}) {
  const [hover, setHover] = useState(false);
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
              {" "}
              <img src="/images/icons/Cart1.png" alt="cart" />
            </Link>
          </button>
        </>
      )}
      {user && (
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex items-center justify-center font-thin text-3xl rounded-full text-text-3 hover:bg-secondary-3 hover:text-text-1 transition duration-200 "
        >
          <FiUser />
        </button>
      )}
    </div>
  );
}

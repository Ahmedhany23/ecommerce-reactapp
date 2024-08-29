import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { addToWishList, removeFromWishList } from "../../Redux/WishSlice";
import { Link } from "react-router-dom";
import { useAddToCartContext } from "../../context/AddedToCart";

export default function ProductCard({
  imgLink,
  imgAlt = "image",
  name,
  price,
  priceremoved,
  rate,
  reviews,
  id,
  type,
  cartisAdded,
}) {
  const [hidden, setHidden] = useState(false);
  const {setCartAdded } = useAddToCartContext()
  const [isAddedWishList, setIsAddedWishList] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setCartAdded(true)
    setTimeout(() => {
        setCartAdded(false)
    }, 1000);
  };

  const handleRemoveWishList = (product) => {
    dispatch(removeFromWishList({ id: product.id })); 
  };

  const handleAddToWishList = (product) => {
    dispatch(addToWishList(product));
    setIsAddedWishList(true);
  };

  useEffect(() => {
    const checkWishList =
      localStorage.getItem("wishlistProducts") !== null
        ? JSON.parse(localStorage.getItem("wishlistProducts"))
        : [];
    const isProductInWishList = checkWishList.some(
      (product) => product.id === id
    );
    setIsAddedWishList(isProductInWishList);
  }, [id]);

  const item = {
    id,
    image: imgLink,
    price,
    name,
    cartisAdded: true,
  };

  const wishlist = {
    id,
    image: imgLink,
    price,
    name,
  };

  /* Calculate Percentage */
  const discountPercentage = (
    ((priceremoved - price) / priceremoved) *
    100
  ).toFixed(0);

  return (
    <div className="max-w-[270px] w-full mx-auto sm:mx-none">
      <div
        className="relative w-full h-[250px] bg-secondary-1  flex flex-col items-center justify-center z-10 overflow-y-hidden"
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}
        onClick={()=> setHidden(!hidden)}
      >
        <img
          src={imgLink}
          alt={imgAlt}
          className=" w-[190px] object-cover hover:scale-110 transition duration-200"
        />

        {/* Watchlist and view */}
        {type === 2 ? (
          <div className="absolute top-3 right-3">
            <button
              onClick={() => handleRemoveWishList(id)}
              className="w-[34px] h-[34px] rounded-full bg-background-1 flex items-center  justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transition duration-200"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 absolute top-3 right-3">
            <button
              onClick={() => handleAddToWishList(wishlist)}
              disabled={isAddedWishList}
              className={`w-[34px] h-[34px] rounded-full ${
                isAddedWishList ? "bg-secondary-3 text-text-1" : "bg-background-1"
              }  flex items-center  justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transition duration-200`}
            >
              <IoIosHeartEmpty />
            </button>
            <Link to={`/productdetails/${id}`}>
              <button className="w-[34px] h-[34px] rounded-full bg-background-1 flex items-center justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transition duration-200">
                <IoEyeOutline />
              </button>
            </Link>
          </div>
        )}

        {/* Product sale */}
        {priceremoved && (
          <div className="absolute top-3 left-3 bg-secondary-3 py-1 px-3 ">
            <p className="text-text-1 text-xs">-{discountPercentage}%</p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {hidden && (
            <motion.button
              initial={{ bottom: -100 }}
              animate={{ bottom: 0 }}
              exit={{ bottom: -100 }}
              onClick={() => handleAddToCart(item)}
              disabled={cartisAdded}
              className="w-full bg-background-2 text-text-1 font-medium rounded-bl rounded-br  h-[41px]  absolute "
            >
              {cartisAdded ? "Added To Cart" : "Add To Cart"}
            </motion.button>
          )}
         
        </AnimatePresence>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Link to={`/productdetails/${id}`}>
          <h4 className="font-medium text-text-3 hover:text-text-2 transition duration-200">
            {name?.slice(0, 25)}...
          </h4>
        </Link>

        <div className=" flex gap-3 items-center">
          <p className=" text-secondary-3 font-medium">${price} </p>
          {priceremoved && (
            <p className="text-text-2  line-through">${priceremoved}</p>
          )}
        </div>
        {rate && (
          <div className="flex items-center gap-2 h-[20px]">
            <ReactStars
              count={5}
              value={rate}
              edit={false}
              size={24}
              activeColor="#FFAD33"
            />
            <p className="font-bold text-text-2 text-sm">({reviews})</p>
          </div>
        )}
      </div>
  
    </div>
    
  );
}

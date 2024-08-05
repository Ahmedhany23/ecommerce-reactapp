import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

export default function ProductCard({ imgLink, imgAlt = "image" , name , price , priceremoved , rate , reviews , id }) {
  const [hidden, setHidden] = useState(false);
  const [isAdded, setIsAdded] = useState(false)
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setIsAdded(true); 
  };


  useEffect(() => {
    const checkCart = localStorage.getItem("selectedProducts") !== null
      ? JSON.parse(localStorage.getItem("selectedProducts"))
      : [];

    const isProductInCart = checkCart.some((product) => product.id === id);
    setIsAdded(isProductInCart);
  }, [id]);

  const item = {
    id,
    image: imgLink,
    price,
    name
  };

  return (
    <div className="max-w-[270px] w-full mx-auto sm:mx-none">
      <div
        className="relative w-full h-[250px] bg-secondary-1  flex flex-col items-center justify-center z-10 overflow-y-hidden"
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}
      >
        <img src={imgLink} alt={imgAlt} className="w-[190px] h-[200px] object-cover" />

        <div className="flex flex-col gap-2 absolute top-3 right-3">
          <button className="w-[34px] h-[34px] rounded-full bg-background-1 flex items-center justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transition duration-200">
            <IoIosHeartEmpty />
          </button>
          <button className="w-[34px] h-[34px] rounded-full bg-background-1 flex items-center justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transition duration-200">
            <IoEyeOutline />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {hidden && (
            <motion.button
              initial={{ bottom: -100 }}
              animate={{ bottom: 0 }}
              exit={{ bottom: -100 }}
              onClick={() => handleAddToCart(item)}
              disabled={isAdded}
              className="w-full bg-background-2 text-text-1 font-medium rounded-bl rounded-br  h-[41px]  absolute "
            >
               {isAdded ? "Added To Cart" : "Add To Cart"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h4 className="font-medium text-text-3">{name?.slice(0,25)}...</h4>
        <div className=" flex gap-3 items-center">
          <p className=" text-secondary-3 font-medium">{price} </p>
          <p className="text-text-2  line-through">{priceremoved}</p>
        </div>
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
      </div>
    </div>
  );
}


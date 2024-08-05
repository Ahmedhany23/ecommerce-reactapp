import Button from "../utilites/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../../Redux/CartSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
export default function CartItems() {
  const [refresh, setRefresh] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.selectedProducts);

  const handleRefresh = (e) => {
    e.preventDefault();
    setRefresh(false);
    setTimeout(() => {
      setRefresh(true);
    }, 1500);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 0) return;
    dispatch(updateQuantity({ index, quantity: newQuantity }));
  };

  return (
    <div className="w-full flex flex-col gap-10 pt-20 ">
      {/* Cart Title */}

      <div className="w-full py-6 bg-background-1 border-black/5 border shadow-md hidden sm:grid sm:grid-cols-4 sm:place-items-center">
        <p className="font-normal">Product</p>
        <p className="font-normal">Price</p>
        <p className="font-normal">Quantity</p>
        <p className="font-normal">Subtotal</p>
      </div>

      {refresh ? (
        data?.map((item, index) => (
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.3}}
            key={index}
            className="w-full py-6 bg-background-1 border-black/5 border shadow-md flex items-center justify-between sm:grid sm:grid-cols-4 sm:place-items-center"
          >
            <div className="flex items-center gap-[15px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-[54px] h-[54px]"
              />
              <p>{item.name}</p>
            </div>
            <p>${item.price}</p>
            <div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value))
                }
                className="w-[72px] h-[44px] px-3 py-[6px] outline-none border-[1.5px] border-black/40 rounded [&::-webkit-inner-spin-button]:opacity-100 [&::-webkit-outer-spin-button]:opacity-100"
                min="0"
              />
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </motion.div>
        ))
      ) : (
        <Loading />
      )}

      <div className="w-full flex flex-col sm:flex-row justify-between">
        <Link to="/">
          {" "}
          <Button text={"Return To Shop"} type={2} />
        </Link>

        <div onClick={(e) => handleRefresh(e)}>
          <Button text={"Update Cart"} type={2} />
        </div>
      </div>
    </div>
  );
}

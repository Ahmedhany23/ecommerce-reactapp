import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Button from "../utilites/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { addToCart, updateQuantity } from "../../Redux/CartSlice";
import { HiOutlineMinus } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
export default function ProductDetailsComponent({ data, isLoading, error }) {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.selectedProducts);
  const productInCart = cart.find((item) => item.id === data.id);

  useEffect(() => {
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } else {
      setQuantity(1);
    }
  }, [data, productInCart]);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: data.id, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity < 0) return;
    dispatch(updateQuantity({ id: data.id, quantity: quantity - 1 }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="pt-[80px]">
      <div className="flex gap-[71px] flex-col items-center lg:items-stretch lg:flex-row justify-center px-1">
        {/* Product Images */}
        <div className="flex flex-col-reverse sm:flex-row gap-[30px] justify-center">
          <div className="flex justify-center sm:justify-normal sm:flex-col gap-4">
            {data.image.map((image, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="w-[170px] h-[130px] bg-secondary-1 flex items-center justify-center cursor-pointer group"
              >
                <img
                  src={image.img}
                  alt="product"
                  className="w-[121px] object-cover group-hover:scale-105 transition duration-200"
                />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[500px] h-[600px] bg-secondary-1 px-[27px] flex items-center justify-center">
            <img
              src={data.image[index]?.img}
              alt="product"
              className="w-[446px] object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h3 className="font-inter font-semibold text-2xl mb-4">
            {data.name}
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <ReactStars
              count={5}
              value={data.rate}
              edit={false}
              size={24}
              activeColor="#FFAD33"
            />
            <p className="text-text-2 text-sm">({data.reviews} Reviews)</p>
            <p className="text-text-2">|</p>
            <p
              className={`${
                data.stock ? "text-button-1" : "text-button-2"
              } text-sm`}
            >
              {data.stock ? "In Stock" : "Out Of Stock"}
            </p>
          </div>
          <p className="text-2xl font-inter mb-6">${data.price}</p>
          <p className="text-sm mb-6 max-w-[373px]">{data.description}</p>
          {/* Divider */}
          <div className="w-full border border-black opacity-50 mb-6"></div>

          <div className="flex flex-col sm:flex-row gap-[19px] mb-10">
          {productInCart ? (
              <div className="quantity-selector flex items-center justify-center gap-8  ">
                <button
                  onClick={handleDecrement}
                  className="decrement-button px-3 py-1 border border-black/20 rounded-t rounded-l hover:bg-secondary-3 hover:text-text-1 transition duration-200"
                >
                  -
                </button>
                <p className="quantity-display font-medium text-xl ">{quantity}</p>
                <button
                  onClick={handleIncrement}
                  className="increment-button px-3 py-1 border border-black/20 rounded hover:bg-secondary-3  hover:text-text-1 transition duration-200"
                >
                  +
                </button>
              </div>
            ) : (
                <Button text={"Add To Cart"} onClick={handleAddToCart}  />
              
            )}
            <Button text={"Buy Now"} />
            <div className="py-2 px-2 border border-black/20 flex items-center justify-center rounded hover:bg-secondary-3 hover:border-none transition duration-200 group">
              <IoIosHeartEmpty className="group-hover:text-text-1 transition text-3xl cursor-pointer" />
            </div>
          </div>

          <div className="max-w-[400px] w-full border border-black/20 rounded">
            <div className="flex gap-4 items-center pl-4 py-6 ">
              <img src="/images/icons/icon-delivery.png" alt="icon-delivery" />
              <div className="flex flex-col gap-2">
                <p className="font-medium">Free Delivery</p>
                <p className="font-medium text-xs underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="w-full border border-black/20"></div>

            <div className="flex gap-4 items-center pl-4 py-6">
              <img src="/images/icons/Icon-return.png" alt="Icon-return" />
              <div className="flex flex-col gap-2">
                <p className="font-medium">Return Delivery</p>
                <p className="font-medium text-xs ">Free 30 Days Delivery Returns. <span className="underline">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

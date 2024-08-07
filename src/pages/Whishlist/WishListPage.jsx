import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/utilites/Button";
import ProductCard from "../../components/Product/ProdcutCard";
import ProductGrid from "../../components/Product/ProductGrid";
import { useProducts } from "../../services/api/useProducts";
import SubTitle from "../../components/utilites/SubTitle";
import { useAddToCartContext } from "../../context/AddedToCart";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
export default function WishListPage() {
  const cartWishListData = useSelector((state) => state.wish.wishlistProducts);
  const cartData = useSelector((state) => state.cart.selectedProducts);
  const { data, isLoading } = useProducts();
  const { cartAdded } = useAddToCartContext();

  const isProductInCart = (productId) => {
    return cartData.findIndex((cartItem) => cartItem.id === productId) !== -1;
  };

  if (cartWishListData.length > 0) {
    return (
      <section className="pt-[80px] pb-[140px] container mx-auto">
        {/* WishList */}
        <div className="w-full pb-[80px]">
          <div className="flex flex-col  gap-5 sm:gap-0 sm:flex-row justify-between mb-[60px]   sm:items-center px-4 sm:px-0">
            <h4>WishList ({cartWishListData && cartWishListData.length})</h4>
            <Button text={"Move All To Bag"} type={2} />
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,minmax(0,270px))]  gap-[30px]  sm:place-content-between ">
            {cartWishListData?.map((item, index) => (
              <div key={index}>
                <ProductCard
                  id={item.id}
                  imgLink={item.image}
                  imgAlt={item.name}
                  price={item.price}
                  name={item.name}
                  type={2}
                  cartisAdded={isProductInCart(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Just For You */}
        <div>
          <div className="flex justify-between mb-[10px] flex-col  gap-5 sm:gap-0 sm:flex-row  sm:items-center px-4 sm:px-0">
            <SubTitle sectionTitle={"Just For You"} />
            <Link to="/products" className="w-full">
              <Button text={"See All"} type={2} />
            </Link>
          </div>
          <ProductGrid
            data={data}
            startIndex={8}
            EndIndex={12}
            isLoading={isLoading}
          />
        </div>
        <AnimatePresence mode="wait">
          {cartAdded && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="bg-secondary-3 text-secondary-2 text-xl px-5 py-2 left-0  fixed top-28 z-50"
            >
              Added To Cart Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  } else {
    return (
      <section className="pt-[80px] pb-[140px] container mx-auto">
        {/* WishList */}
        <div>
          <div className="flex justify-between mb-[60px] items-baseline">
            <h4>WishList ({cartWishListData && cartWishListData.length})</h4>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl sm:text-5xl text-secondary-3 font-semibold text-center sm:text-left">
              You didn't Add a Wish Product
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

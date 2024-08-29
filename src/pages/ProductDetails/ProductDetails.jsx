import React from "react";
import PathComponent from "../../components/utilites/path";
import ProductDetailsComponent from "../../components/Product/ProductDetailsComponent";

import { useParams } from "react-router-dom"; // Correct import
import { useProductById } from "../../services/api/useProductById";
import { useProducts } from "../../services/api/useProducts";
import Loading from "../../components/Loading/Loading";
import ProductGrid from "../../components/Product/ProductGrid";
import SubTitle from "../../components/utilites/SubTitle";
import { useAddToCartContext } from "../../context/AddedToCart";
import { motion, AnimatePresence } from "framer-motion";
export default function ProductDetailsPage() {
  const { id } = useParams();

  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useProducts();
  const {  setCartAdded } = useAddToCartContext();

  const {
    data: product,
    isLoading: isProductLoading,
    error: productError,
  } = useProductById(id);
  if (isProductLoading) {
    return <Loading />;
  }

  if (productError) {
    return (
      <div className="text-center py-10">
        Error loading product details. Please try again later.
      </div>
    );
  }

  if (isProductsLoading) {
    return <Loading />;
  }

  if (productsError) {
    return (
      <div className="text-center py-10">
        Error loading related products. Please try again later.
      </div>
    );
  }

  return (
    <section className="container mx-auto pt-[80px] pb-[140px] px-2 sm:px-0">
      <PathComponent prev={"Account / Gaming"} path={product.name} />
      <ProductDetailsComponent
        data={product}
        isLoading={isProductLoading}
        error={productError}
        setCartAdded={setCartAdded}
      />
      <div className="pt-[140px] px-2">
        <SubTitle sectionTitle={"Related item"} />
        <ProductGrid
          data={products}
          startIndex={0}
          EndIndex={4}
          isLoading={isProductsLoading}
        />
      </div>

    </section>
  );
}

import { useSelector } from "react-redux";
import AdvertisementBanner from "../../components/Advertisement/AdvertisementBanner";
import BestSellingProducts from "../../components/BestSellers/BestSellingProducts";
import BrowseByCategory from "../../components/Category/BrowseByCategory";
import ExploreOurProducts from "../../components/ExploreProducts/ExploreOurProducts";
import FlashSalesSection from "../../components/FlashSales/FlashSalesSection";
import NewArrivalSection from "../../components/NewArrivals/NewArrivalSection";
import FullServices from "../../components/utilites/FullServices";
import { useProducts } from "../../services/api/useProducts";
import ArrowToTop from "../../components/utilites/ArrowToTop";
import { useAddToCartContext } from "../../context/AddedToCart";
import { motion, AnimatePresence } from "framer-motion";

const deadline = "October , 23 2024";

export default function HomePage() {
  const { data, isLoading } = useProducts();
  const CartData = useSelector((state) => state.cart.selectedProducts);
  const { cartAdded } = useAddToCartContext();

  return (
    <>
      <AdvertisementBanner />
      <FlashSalesSection
        data={data}
        isLoading={isLoading}
        cartIsAdded={CartData}
      />
      <BrowseByCategory />
      <BestSellingProducts
        data={data}
        isLoading={isLoading}
        cartIsAdded={CartData}
      />
      <AdvertisementBanner type={2} deadline={deadline} />
      <ExploreOurProducts
        data={data}
        isLoading={isLoading}
        cartIsAdded={CartData}
      />
      <NewArrivalSection />
      <FullServices />
      <ArrowToTop />
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
    </>
  );
}

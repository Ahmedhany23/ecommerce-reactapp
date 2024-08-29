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
    </>
  );
}

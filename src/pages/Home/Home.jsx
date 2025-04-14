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

// Generate dynamic deadline 30 days from now
const generateDeadline = () => {
  const futureDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const month = futureDate.toLocaleString("en-US", { month: "long" });
  const day = futureDate.getDate();
  const year = futureDate.getFullYear();
  return `${month} , ${day} ${year}`;
};

export default function HomePage() {
  const { data, isLoading } = useProducts();
  const CartData = useSelector((state) => state.cart.selectedProducts);
  const deadline = generateDeadline();

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

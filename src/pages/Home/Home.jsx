import AdvertisementBanner from "../../components/Advertisement/AdvertisementBanner";
import BestSellingProducts from "../../components/BestSellers/BestSellingProducts";
import BrowseByCategory from "../../components/Category/BrowseByCategory";
import FlashSalesSection from "../../components/FlashSales/FlashSalesSection";

const deadline = "October , 23 2024"

export default function HomePage() {
  return (
    <>
      <AdvertisementBanner />
      <FlashSalesSection />
      <BrowseByCategory/>
      <BestSellingProducts/>
      <AdvertisementBanner type={2} deadline={deadline} />
    </>
  );
}

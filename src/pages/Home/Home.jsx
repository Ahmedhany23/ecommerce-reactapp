import AdvertisementBanner from "../../components/Advertisement/AdvertisementBanner";
import BestSellingProducts from "../../components/BestSellers/BestSellingProducts";
import BrowseByCategory from "../../components/Category/BrowseByCategory";
import ExploreOurProducts from "../../components/ExploreProducts/ExploreOurProducts";
import FlashSalesSection from "../../components/FlashSales/FlashSalesSection";
import NewArrivalSection from "../../components/NewArrivals/NewArrivalSection";
import FullServices from "../../components/utilites/FullServices";
import {useProducts} from '../../services/api/useProducts'

const deadline = "October , 23 2024"

export default function HomePage() {
  const {data,isLoading,error} = useProducts();
  return (
    <>
      <AdvertisementBanner />
      <FlashSalesSection  data={data} isLoading={isLoading}/>
      <BrowseByCategory/>
      <BestSellingProducts data={data} isLoading={isLoading}/>
      <AdvertisementBanner type={2} deadline={deadline} />
      <ExploreOurProducts data={data} isLoading={isLoading}/>
      <NewArrivalSection/>
      <FullServices/>
    </>
  );
}

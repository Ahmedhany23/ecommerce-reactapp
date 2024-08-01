import CategroiesList from "../Category/CategroiesList";
import Carousel from "../utilites/Carousel";


export default function AdvertisementBanner() {
  return (
    <section className="relative container mx-auto ">
      <div className="pt-[40px] pb-[140px] flex justify-between">
        <CategroiesList />
        <Carousel/>
      </div>
      <div className="divider absolute h-[384px] top-0 left-64 w-1  bg-black/302 border-l-[0.5px]"/>
    </section>
  );
}

import SubTitle from "../utilites/SubTitle";
import CountdownTimer from "../utilites/CountdownTimer";
import Carousel from "../utilites/Carousel";
import Button from "../utilites/Button";
import { Link } from "react-router-dom";
export default function FlashSalesSection() {
  const deadline = "August, 31, 2024";

  return (
    <section className="pb-[80px] overflow-hidden">
      <div className="container mx-auto relative">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-[87px] mb-10">
          <SubTitle sectionTitle={"Today's"} title={"Flash Sales"} />
          <CountdownTimer deadline={deadline} />
        </div>
        <Carousel Type={2} />
        <div className="mt-[76px] text-center">
        <Link to={'/products'}>
        <Button text={"View All Products"} />
        </Link>
         
        </div>
           {/* divider */}
      <div className="w-full border-[0.5px] border-secondary-1 mt-[60px]"/>
      </div>
   
    </section>
  );
}

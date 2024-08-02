import CategroiesList from "../Category/CategroiesList";
import Button from "../utilites/Button";
import Carousel from "../utilites/Carousel";
import CountdownTimer from "../utilites/CountdownTimer";


export default function AdvertisementBanner({type = 1 , deadline}) {

  if(type === 2){
    return(
      <section className="container mx-auto pb-[70px] px-1 sm:px-0">
        <div className="w-full bg-background-2 md:h-[500px] flex flex-col md:flex-row gap-[27px] md:px-[44px] justify-center items-center ">
          <div className="flex flex-col justify-center items-center sm:items-start sm:justify-normal gap-[32px] py-[69px]">
            <p className="text-button-1">Categories</p>
            <h4 className="text-text-1 text-3xl sm:text-4xl lg:text-5xl lg:leading-[60px] text-center sm:text-left max-w-[443px]">Enhance Your Music Experience</h4>
            <CountdownTimer type={2} deadline={deadline}/>
            <div className="mt-[7px]">
            <Button text={'Buy Now!'} type={2}/>
            </div>
            
          </div>
          <div className="max-w-[600px] w-full relative h-full flex items-center">
            <img src="/images/Home/JBLSpeaker.png" alt="Jbl Speaker"  className="w-full max-w-[568px]  sm:h-[330px] z-10"/>
            <div className="absolute top-0 left-10 right-0 bottom-0 bg-[#d9d9d9] bg-opacity-30 w-[504px] h-[500px]  rounded-full  blur-3xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative container mx-auto ">
      <div className="pt-[40px] pb-[140px] flex justify-between">
        <CategroiesList />
        <Carousel/>
      </div>
      {/* divider */}
      <div className=" hidden xl:block absolute h-[384px] top-0 left-64 w-1  bg-black/302 border-l-[0.5px]"/>
    </section>
  );
}

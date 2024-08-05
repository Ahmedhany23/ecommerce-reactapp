import { Link } from "react-router-dom";

export default function ArrivalGrid() {
  return (
    <div className="flex flex-col xl:flex-row gap-[30px] justify-center items-center px-2 sm:px-0">
      <div className="relative w-full max-w-[570px] h-[400px] sm:h-[600px] bg-background-2 rounded pt-[89px] px-[30px]">
        <img
          src="/images/Home/ps5.png"
          alt="ps5"
          className="absolute bottom-0 left-0 right-0 "
        />
        <div className="relative z-10 flex flex-col gap-4 justify-end h-full pl-6 pb-6 max-w-[255px]">
          <h4 className="font-inter font-semibold text-2xl text-text-1 whitespace-nowrap">
            PlayStation 5
          </h4>
          <p className="text-sm text-text-1">
            Black and White version of the PS5 coming out on sale.
          </p>
          <Link
            to={"/shop"}
            className="w-fit border-b border-white font-medium text-text-1"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8  items-center sm:items-stretch max-w-[570px] w-full">
        <div className="relative w-full h-[284px] bg-[#1a1717] rounded">
          <div className="relative z-10 flex flex-col gap-4 justify-end h-full pl-6 pb-6 max-w-[255px]">
            <h4 className="font-inter font-semibold text-2xl text-text-1 whitespace-nowrap">
              Women’s Collections
            </h4>
            <p className="text-sm text-text-1">
              Featured woman collections that give you another vibe.
            </p>
            <Link
              to={"/shop"}
              className="w-fit border-b border-white font-medium text-text-1"
            >
              Shop Now
            </Link>
          </div>

          <img
            src="/images/Home/woman.png"
            alt="woman"
            className="absolute bottom-0 right-0 h-full w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-[30px]">

          <div className="relative max-w-[270px] w-full h-[284px] bg-background-2 flex items-center justify-center py-[30px] pl-[24px] pr-[55px]  ">
            <img
              src="/images/Home/speakers.png"
              alt="speakers"
               className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 "
            />
            <div className="absolute top-7 left-0 bottom-0 right-0 w-[196px] h-[196px] bg-[#D9D9D9] bg-opacity-90 blur-2xl z-0" />
            <div className="relative z-20 flex flex-col gap-2 justify-end h-full  max-w-[255px] ">
              <h4 className="font-inter font-semibold text-2xl text-text-1 whitespace-nowrap">
                Speakers
              </h4>
              <p className="text-sm text-text-1">Amazon wireless speakers</p>
              <Link
                to={"/shop"}
                className="w-fit border-b border-white font-medium text-text-1"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="relative max-w-[270px] w-full h-[284px] bg-background-2 flex items-center justify-center py-[30px] pl-[24px] pr-[55px] ">
            <img src="/images/Home/perfume.png" alt="ps5" className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 " />
            <div className="absolute top-7 left-0 bottom-0 right-0 w-[196px] h-[196px] bg-[#D9D9D9] bg-opacity-90 blur-3xl" />
            <div className="relative z-20 flex flex-col gap-2 justify-end h-full  max-w-[255px]">
              <h4 className="font-inter font-semibold text-2xl text-text-1 whitespace-nowrap">
                Perfume
              </h4>
              <p className="text-sm text-text-1">GUCCI INTENSE OUD EDP</p>
              <Link
                to={"/shop"}
                className="w-fit border-b border-white font-medium text-text-1"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

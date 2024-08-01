import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProdcutCard from "../ProductCard/ProdcutCard";
export default function Carousel({ Type = 1 }) {
  if (Type === 1) {
    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        observeParents={true}
        pagination={{
          currentClass: "swiper-pagination",
          bulletClass: `swiper-pagination-bullet`,
          bulletActiveClass: `swiper-pagination-bullet-active`,
        }}
        observer={true}
        parallax={true}
        speed={1000}
        loop={true}
        autoplay={true}
        grabCursor={true}
        className=" w-full lg:max-w-[892px] lg:h-[344px] "
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black w-full px-2 md:pl-16 flex sm:gap-[38px] ">
              <div>
                {/* Title */}
                <div className="flex items-center gap-6  pt-[58px]">
                  <img src="/images/icons/apple.png" alt="apple logo" />
                  <p className="text-text-1 mt-2">iPhone 14 Series</p>
                </div>
                {/* Para */}
                <p className="mt-5 text-text-1 text-2xl lg:text-5xl max-w-[294px] font-inter font-semibold lg:leading-[60px]">
                  Up to 10% off Voucher
                </p>
                {/* Link */}
                <Link
                  to="/shop"
                  className="text-text-1 font-medium flex items-center gap-2 mt-[22px] pb-[47px]"
                >
                  <p className="border-b w-fit">Shop Now</p>
                  <GoArrowRight className="text-2xl" />
                </Link>
              </div>
              {/* Image */}
              <div className="w-[400px] sm:w-auto">
                <img src="/images/iphone.png" alt="" className="  pt-20 sm:pt-10 md:pt-4" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  if (Type === 2) {
    return (
      <>
        <div className="absolute top-10 right-0 flex gap-3">
          <div className="swiper-button-prev  w-[46px] h-[46px] bg-secondary-1 rounded-full flex items-center justify-center">
            <img
              src="/images/icons/Carousel/Arrow.png"
              alt=""
              className=" -rotate-180"
            />
          </div>

          <div className="swiper-button-next w-[46px] h-[46px] bg-secondary-1 rounded-full flex items-center justify-center">
            <img src="/images/icons/Carousel/Arrow.png" alt="" />
          </div>
        </div>

        <Swiper
          spaceBetween={0}
          breakpoints={{
            slidesPerView: 1,
            580: {
              slidesPerView: 2,
            },
            880: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
            1700: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          speed={200}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mx-auto mt-4"
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <SwiperSlide key={index}>
              <ProdcutCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}

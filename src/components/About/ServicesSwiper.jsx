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
const data = [
  {
    imgLink: "/images/About/image1.webp",
    name: "Tom Cruise",
    department: "Founder & Chairman",
  },
  {
    imgLink: "/images/About/image2.webp",
    name: "Emma Watson",
    department: "Managing Director",
  },
  {
    imgLink: "/images/About/image3.webp",
    name: "Will Smith",
    department: "Product Designer",
  },
  {
    imgLink: "/images/About/image1.webp",
    name: "Tom Cruise",
    department: "Founder & Chairman",
  },
];

export default function ServicesSwiper() {
  return (
    <section className="py-[140px] container mx-auto font-poppins">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          autoplay: {
            delay: 1000,
          },
          640: {
            slidesPerView: 1,
            autoplay: {
              enabled: true,
              delay: 1000,
            },
          },
          820: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
          1270: {
            slidesPerView: 3,
          },
        }}
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
        className="h-[600px] w-full max-w-[1170px] flex gap-52"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" h-[564px]  rounded flex flex-col justify-center items-center"
          >
            <div className="mx-auto w-full md:w-[370px] h-[340px] flex items-center justify-center bg-secondary-1">
              <img src={item.imgLink} alt={item.name} className="h-full" />
            </div>
            <div className=" text-center xl:text-left  mt-8">
              <h4 className="font-medium font-inter text-[2rem] text-text-3 mb-2">
                {item.name}
              </h4>
              <p className="text-base font-normal">{item.department}</p>
              <div className="flex gap-4 mt-4 items-center justify-center xl:justify-normal">
                <img src="/images/icons/About/Icon-Twitter.png" alt="Twitter" />
                <img
                  src="/images/icons/About/icon-instagram.png"
                  alt="Instagram"
                />
                <img
                  src="/images/icons/About/Icon-Linkedin.png"
                  alt="Linkedin"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

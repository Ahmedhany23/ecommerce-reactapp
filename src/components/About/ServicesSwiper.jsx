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
        spaceBetween={0}
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
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        observeParents={true}
        pagination={true}
        observer={true}
        parallax={true}
        speed={1000}
        loop={true}
        autoplay={true}
        grabCursor={true}
        
        style={{
          "--swiper-pagination-color": "#db4444",
          "--swiper-pagination-border": "white",
          "--swiper-pagination-bullet-inactive-color": "#7d8184",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bottom" : "-6px",
        }}
        className="h-[600px]"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" h-[564px] rounded flex flex-col justify-center items-center"
          >
            <div className="w-full md:w-[370px] flex items-center justify-center bg-secondary-1">
              <img src={item.imgLink} alt={item.name} />
            </div>
            <div className=" mt-8">
              <h4 className="font-medium font-inter text-[2rem] text-text-3 mb-2">
                {item.name}
              </h4>
              <p className="text-base font-normal">{item.department}</p>
              <div className="flex gap-4 mt-4">
                <img src="/images/icons/About/Icon-Twitter.png" alt="Twitter" />
                <img
                  src="/images/icons/About/icon-Instagram.png"
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

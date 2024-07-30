import { CiDollar, CiShop } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
const servicesCard = [
  {
    icon: (
      <CiShop className="text-text-1 text-4xl group-hover:text-text-3 transition duration-200" />
    ),
    number: "10.5k",
    title: "Sallers active our site",
  },
  {
    icon: (
      <CiDollar className="text-text-1 text-4xl group-hover:text-text-3 transition duration-200" />
    ),
    number: "33k",
    title: "Mopnthly Produduct Sale",
  },
  {
    icon: (
      <MdOutlineShoppingBag className="text-text-1 text-4xl group-hover:text-text-3 transition duration-200" />
    ),
    number: "45.5k",
    title: "Customer active in our site",
  },
  {
    icon: (
      <TbMoneybag className="text-text-1 text-4xl group-hover:text-text-3 transition duration-200" />
    ),
    number: "25k",
    title: "Anual gross sale in our site",
  },
];

export default function ServicesGrid() {
  return (
    /* Services-grid */
    <section className="container mx-auto py-[140px] font-poppins grid grid-cols-1 lg:grid-cols-[repeat(2,minmax(270px,1fr))] xl:grid-cols-[repeat(3,minmax(270px,1fr))] 2xl:grid-cols-[repeat(4,minmax(270px,1fr))] gap-[30px]">
      {/* Services-Cards */}
      {servicesCard.map((service, index) => (
        <div
          key={index}
          className="group py-[30px] px-[29px] mx-2  lg:mx-0 rounded-md border border-background-2/30 hover:border-none flex flex-col items-center bg-background-1 hover:bg-button-2 transition duration-200"
        >
          {/* icon image */}
          <div className="w-20 h-20 rounded-full  bg-[#2F2E30]/30 group-hover:bg-white/30  flex items-center justify-center mb-6 transition duration-200">
            <div className="w-[58px] h-[58px] rounded-full bg-background-2 group-hover:bg-background-1 flex items-center justify-center transition duration-200">
              {service.icon}
            </div>
          </div>
          {/* Service-details */}
          <div className="text-center ">
            <p className="font-inter font-bold text-[2rem] group-hover:text-text-1 transition duration-200">{service.number}</p>
            <p className="font-normal text-base group-hover:text-text-1 transition duration-200">{service.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

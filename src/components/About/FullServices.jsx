

const servicesCard = [
    {
      imgLink:"/images/icons/About/icon-delivery.png",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
        imgLink:"/images/icons/About/Icon-Customer service.png",
        title: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
      },
      {
        imgLink:"/images/icons/About/Icon-secure.png",
        title: "MONEY BACK GUARANTEE",
        description: "We reurn money within 30 days",
      },
  ];
export default function FullServices() {
  return (
     /* Services-grid */
     <section className="container mx-auto py-[140px] font-poppins grid grid-cols-1 lg:grid-cols-[repeat(3,minmax(256px,1fr))]  gap-[88px]">
     {/* Services-Cards */}
     {servicesCard.map((service, index) => (
       <div
         key={index}
         className=" mx-2  lg:mx-0 flex flex-col items-center bg-background-1"
       >
         {/* icon image */}
         <div className="w-20 h-20 rounded-full  bg-[#2F2E30]/30  flex items-center justify-center mb-6 transition duration-200">
           <div className="w-[58px] h-[58px] rounded-full bg-background-2  flex items-center justify-center transition duration-200">
             <img src={service.imgLink} alt={service.title} />
           </div>
         </div>
         {/* Service-details */}
         <div className="text-center ">
           <p className="font-inter font-bold text-xl whitespace-nowrap">{service.title}</p>
           <p className="font-normal text-sm">{service.description}</p>
         </div>
       </div>
     ))}
   </section>
  )
}

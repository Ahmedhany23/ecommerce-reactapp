import { motion } from "framer-motion";
export default function OurStory() {
  return (
    <section
      id="ourstory"
      className="relative flex flex-col-reverse justify-center gap-5 xl:flex-row lg:justify-between items-center pt-11 pb-[140px] "
    >
      <div className="text-center sm:text-left">
        <h1 className="font-bold font-inter text-[3.375rem] text-text-3 mb-10">
          Our Story
        </h1>
        <p className="font-normal text-base mb-6 text-text-3">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="font-normal text-base text-text-3">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4}} className=" relative xl:left-36 max-w-[837px] w-full xl:h-[609px]">
        <img
          src="/images/About/mainimage.webp"
          alt="Two african Females"
          className="w-full"
          loading="eager"
        />
      </motion.div>
    </section>
  );
}

import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
export default function ProdcutCard({ imgLink, imgAlt = "image" }) {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="max-w-[270px] w-full mx-auto sm:mx-none">
      <div
        className="relative w-full h-[250px] bg-secondary-1  flex flex-col items-center justify-center z-10 overflow-y-hidden"
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}
      >
        <img src={imgLink} alt={imgAlt} className="w-[190px] h-[190px]" />

        <div className="flex flex-col gap-2 absolute top-3 right-3">
          <button className="w-[34px] h-[34px] rounded-full bg-background-1 flex items-center justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transiton duration-200">
            <IoIosHeartEmpty />
          </button>
          <button className="w-[34px] h-[34px] rounded-full bg-background-1 flex items-center justify-center text-2xl hover:text-text-1 hover:bg-secondary-3 hover:scale-105 transiton duration-200">
            <IoEyeOutline />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {hidden && (
            <motion.button
              initial={{ bottom: -100 }}
              animate={{ bottom: 0 }}
              exit={{ bottom: -100 }}
              className="w-full bg-background-2 text-text-1 font-medium rounded-bl rounded-br  h-[41px]  absolute "
            >
              Add To card
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h4 className="font-medium text-text-3">The north coat</h4>
        <div className=" flex gap-3 items-center">
          <p className=" text-secondary-3 font-medium">$260 </p>
          <p className="text-text-2  line-through">$360</p>
        </div>
        <div className="flex items-center gap-2 h-[20px]">
          <ReactStars
            count={5}
            value={5}
            edit={false}
            size={24}
            activeColor="#FFAD33"
          />
          <p className="font-bold text-text-2 text-sm">(65)</p>
        </div>
      </div>
    </div>
  );
}

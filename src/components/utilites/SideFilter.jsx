import { AnimatePresence , delay, motion } from "framer-motion";
import { useFilterContext } from "../../context/FilteredProducts";
import { useState, useEffect } from "react";


export default function SideFilter() {
  const { setfilter } = useFilterContext();
  // State for price range
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [filterMenu, setFilterMenu] = useState(true)
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setfilter((prev) => {
      const categories = prev.categories || [];
      if (checked) {
        return {
          ...prev,
          categories: [...categories, value.toLowerCase()],
        };
      } else {
        return {
          ...prev,
          categories: categories.filter((category) => category !== value.toLowerCase()),
        };
      }
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Automatically apply the price range filter whenever the user changes the min or max values
  useEffect(() => {
    if (priceRange.min !== '' && priceRange.max !== '') {
      setfilter((prevFilters) => ({
        ...prevFilters,
        priceRange: {
          min: Number(priceRange.min),
          max: Number(priceRange.max),
        },
      }));
    }
    else{
      setfilter("")
    }
  }, [priceRange.min, priceRange.max, setfilter]);

  return (
    <>
<div className="block md:hidden mt-10">
  <button
    className="border py-2 px-4 rounded-lg shadow-sm hover:bg-secondary-3 hover:text-text-1 transition duration-150"
    onClick={() => setFilterMenu(!filterMenu)}
  >
    Filter
  </button>
  <AnimatePresence mode="wait">
    {filterMenu && (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2, stiffness: 300, damping: 20  }}
        className="border-2 w-fit pl-5 pr-20 mt-5 py-10 rounded-md"
      >
        <div className="text-text-3 flex flex-col gap-2">
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3  }}
            className="text-xl pb-3 font-semibold"
          >
            Category
          </motion.h4>
          {['phones', 'computers', 'smartWatch', 'camera', 'headPhones', 'gaming'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0}}
              animate={{ y: 0, opacity: 1 , transitionDelay: 0.5 + (index * 0.1)  }}
              exit={{ y: 20, opacity: 0 , transitionDelay: 0.5 + (index * 0.1)  }}
              transition={{
                duration: 0.4,
              }}
              className="flex gap-2"
            >
              <input
                onChange={handleCategoryChange}
                type="checkbox"
                value={category}
              />
              <p>{category[0].toUpperCase() + category.slice(1)}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-text-3 flex flex-col gap-2 py-7">
        <h4 className="text-2xl pb-3 font-semibold">Price</h4>
        <div className="flex gap-2">
          <p>From</p>
          <input
            type="text"
            className="w-20 text-text-2 border border-black"
            name="min"
            onChange={handlePriceChange}
            value={priceRange.min}
          />
        </div>
        <div className="flex gap-[26px]">
          <p>To</p>
          <input
            type="text"
            className="w-20 text-text-2 px-1 border border-black"
            name="max"
            onChange={handlePriceChange}
            value={priceRange.max}
          />
        </div>
      </div>
      </motion.div>
      
    )}
 
  </AnimatePresence>
</div>
      <div className=" md:flex-col py-10 hidden md:flex">
      <div className="category text-text-3 flex flex-col gap-2">
        <h4 className="text-2xl pb-3 font-semibold">Category</h4>
        {['phones', 'computers', 'smartWatch', 'camera', 'headPhones', 'gaming'].map((category) => (
          <div key={category} className="flex gap-2">
            <input
              onChange={handleCategoryChange}
              type="checkbox"
              value={category}
            />
            <p>{category[0].toUpperCase() + category.slice(1)}</p>
          </div>
        ))}
      </div>
      <div className="text-text-3 flex flex-col gap-2 py-7">
        <h4 className="text-2xl pb-3 font-semibold">Price</h4>
        <div className="flex gap-2">
          <p>From</p>
          <input
            type="text"
            className="w-20 text-text-2 border border-black"
            name="min"
            onChange={handlePriceChange}
            value={priceRange.min}
          />
        </div>
        <div className="flex gap-[26px]">
          <p>To</p>
          <input
            type="text"
            className="w-20 text-text-2 px-1 border border-black"
            name="max"
            onChange={handlePriceChange}
            value={priceRange.max}
          />
        </div>
      </div>
    </div>
    </>
  
  );
}

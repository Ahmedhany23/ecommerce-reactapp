import { LuSearch } from "react-icons/lu";
const SearchBar = () => {
  return (
    <div className="relative rounded-[4px] pr-3 py-2 pl-5 lg:bg-secondary-1 lg:w-[243px]">
      <input
        type="text"
        className="bg-secondary-1 outline-none w-full text-[0.75rem] font-poppins font-normal hidden lg:block"
        placeholder="What are you looking for?"
      />
      <button className=" lg:absolute right-3 top-0 bottom-0 text-text-3 text-2xl flex items-center">
      <LuSearch />
      </button>
    </div>
  );
};

export default SearchBar;

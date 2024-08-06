import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SearchBar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search?query=${inputValue}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-[4px] pr-3 py-2 pl-5 lg:bg-secondary-1 lg:w-[243px]"
    >
      <input
        onChange={handleChangeInput}
        value={inputValue}
        type="text"
        className="bg-secondary-1 outline-none w-full text-[0.75rem] font-poppins font-normal hidden lg:block"
        placeholder="What are you looking for?"
      />
      <button className=" lg:absolute right-3 top-0 bottom-0 text-text-3 text-2xl flex items-center">
        <LuSearch />
      </button>
    </form>
  );
};

export default SearchBar;

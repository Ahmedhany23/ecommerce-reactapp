import TopHeader from "./TopHeader";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import AccountCartIcons from "./AccountCartIcons";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { useHeaderCustomization } from '../../hooks/HeaderCustomization';


export default function Header() {
  const { cartIcons, user} = useHeaderCustomization();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-[0.5px] border-b-[#000000] border-opacity-30 pb-4">
      <TopHeader />
      <div className="container mx-auto">
        <div className="flex justify-between pt-10 items-center px-3 md:px-0">
          <Logo />
          <NavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="flex items-center gap-6">
            <SearchBar />
            <AccountCartIcons cartIcons={cartIcons} user={user} />
            <FaGripLines onClick={() => setIsOpen(true)}  className="block md:hidden text-4xl cursor-pointer"/>
          </div>

        </div>
      </div>
    </header>
  );
}

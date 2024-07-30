import FullServices from "../../components/About/FullServices";
import OurStory from "../../components/About/OurStory";
import ServicesGrid from "../../components/About/ServicesGrid";
import ServicesSwiper from "../../components/About/ServicesSwiper";
import PathComponent from "../../components/utilites/path";
import { useLocation } from "react-router";
export default function AboutPage() {
  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className="container mx-auto  pt-20 pb-[140px] font-poppins">
      <PathComponent prev={"Home"} path={pathname} />

      {/* Our Story */}
      <OurStory />
      {/* ServiceGrid */}
      <ServicesGrid/>
       {/* ServicesSwiper */}
       <ServicesSwiper/>
       {/* FullServices */}
       <FullServices/>

    </div>
  );
}

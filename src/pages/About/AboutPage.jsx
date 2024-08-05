import React, { Suspense } from "react";
import FullServices from '../../components/utilites/FullServices'
import OurStory from "../../components/About/OurStory";
import ServicesGrid from "../../components/About/ServicesGrid";

import PathComponent from "../../components/utilites/path";
import { useLocation } from "react-router";
import Loading from "../../components/Loading/Loading";

const ServicesSwiper = React.lazy(() =>
  import("../../components/About/ServicesSwiper")
);

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
      <ServicesGrid />
      {/* ServicesSwiper */}
      <Suspense fallback={<Loading />}>
        <ServicesSwiper />
      </Suspense>

      {/* FullServices */}
      <FullServices />
    </div>
  );
}

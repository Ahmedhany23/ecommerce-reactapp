import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Suspense, useEffect } from "react";
import Loading from "../components/Loading/Loading";


const Layout = () => {
  useEffect(()=>{
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  })
 
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="overflow-hidden">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;

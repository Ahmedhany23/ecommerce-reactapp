import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { HeaderCustomizationProvider } from "../hooks/HeaderCustomization";
import { Suspense, useEffect } from "react";
import Loading from "../components/Loading/Loading";

const Layout = () => {
  useEffect(()=>{
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  })
  return (
    <HeaderCustomizationProvider>
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
    </HeaderCustomizationProvider>
  );
};

export default Layout;

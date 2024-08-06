import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Suspense,useEffect,useState } from "react";
import Loading from "../components/Loading/Loading";
import { useHeaderCustomization } from "../hooks/HeaderCustomization";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
const Layout = () => {
  const [user] = useAuthState(auth)
  const {setUser} = useHeaderCustomization();
  useEffect(()=>{
    if(user){
      setUser(true)
    }
    else{
      setUser(false)
    }
  },[setUser,user])
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

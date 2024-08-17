import React from "react";
import { useSelector } from "react-redux";
import NotFoundPage from "../NotFound/NotFoundPage";
import PathComponent from "../../components/utilites/path";
import BillingDetails from "../../components/CheckOut/BillingDetails";
import CheckOutDetails from "../../components/CheckOut/CheckOutDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router";
import { useEffect } from "react";
export default function CheckOutPage() {
  const data = useSelector((state) => state.cart.selectedProducts);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);

  if (data.length === 0) {
    return <NotFoundPage />;
  }
  if (data.length > 0) {
    return (
      <section className="container mx-auto pt-[80px] pb-[140px]">
        <PathComponent prev={"View Cart"} path={"CheckOut"} />
        <div className=" pt-[80px]  px-3">
          <h1 className="font-inter font-medium text-4xl ">Billing Details</h1>
          <div className="flex items-center lg:items-start pt-12 flex-col gap-20 lg:flex-row lg:gap-[170px] xl:gap-[300px]">
            <BillingDetails />
            <CheckOutDetails />
          </div>
        </div>
      </section>
    );
  }
}

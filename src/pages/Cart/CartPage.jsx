import PathComponent from "../../components/utilites/path";
import CartItems from "../../components/Cart/CartItems";
import CheckOutComponent from "../../components/Cart/CheckOutComponent";
import CouponComponent from "../../components/Cart/CouponComponent";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";
export default function CartPage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);

  return (
    <section className="container mx-auto pt-[80px] pb-[140px] px-1">
      <PathComponent prev={"Home"} path={"Cart"} />
      {/* Cart */}
      <CartItems />
      <div className="flex  flex-col gap-10 justify-center items-center xl:items-start xl:flex-row xl:justify-between pt-20">
        {/* Coupon */}
        <CouponComponent />
        {/* CheckOutComponent*/}
        <CheckOutComponent />
      </div>
    </section>
  );
}

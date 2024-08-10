import { useDispatch, useSelector } from "react-redux";
import CouponComponent from "../Cart/CouponComponent";

import { useAddCartToApi } from "../../hooks/useAddCartToApi";
import { removeData } from "../../Redux/CartSlice";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
export default function CheckOutDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const data = useSelector((state) => state.cart.selectedProducts);
  const calculateTotal = () => {
    return data.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const { addCart } = useAddCartToApi();

  const handleOrder = () => {
    if (data.length === 0) {
      console.error("Cart is empty!");
      return;
    }
    if(!user)
    {
      navigate("/signup")
    }
    if(user){
        addCart({...data , user: user.displayName}, {
            onSuccess: (response) => {
              dispatch(removeData());
              navigate('/');
            },
            onError: (error) => {
              console.error("Failed to place order:", error);
            },
          });
    }
   
  };
  
    return (
        <div className="flex flex-col gap-8">
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={item.image[0].img ? item.image[0].img : item.image}
                  alt={item.name}
                  className="w-[52px] h-[52px]"
                />
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
            </div>
          ))}
          <div className="w-full flex flex-col gap-4 ">
            <div className="flex justify-between items-center ">
              <p>Subtotal:</p>
              {calculateTotal() >= 1 ? <p>${calculateTotal().toFixed(2)}</p> : 0}
            </div>
            {/* divider */}
            <div className="border border-text-2"></div>
    
            <div className="flex justify-between items-center ">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            {/* divider */}
            <div className="border border-text-2"></div>
    
            <div className="flex justify-between items-center ">
              <p>Total:</p>
              {calculateTotal() >= 1 ? <p>${calculateTotal().toFixed(2)}</p> : 0}
            </div>
          </div>
    
          <div className="flex justify-between">
            <div className="flex items-center gap-4 ">
              <input
                type="radio"
                name="bank"
                id=""
                className="accent-background-2"
                required
              />
              <label>Bank</label>
            </div>
            <img src="/images/icons/visa.png" alt="visa options" />
          </div>
          <div className="flex items-center gap-4 ">
            <input
              type="radio"
              name="bank"
              className="accent-background-2 radio"
              required
            />
            <label>Cash on delivery</label>
          </div>
          <CouponComponent />
          <button
            type="button"
            className="bg-button-2  hover:bg-hoverButton-1 text-text-1 py-4 px-12  text-base  whitespace-nowrap w-full sm:w-fit"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      );
  
  
}

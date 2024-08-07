import { useSelector } from "react-redux";
import CouponComponent from "../Cart/CouponComponent";
import Button from "../utilites/Button";
export default function CheckOutDetails() {
  const data = useSelector((state) => state.cart.selectedProducts);
  const calculateTotal = () => {
    return data.reduce((total, item) => total + item.price * item.quantity, 0);
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
          />
          <label>Bank</label>
        </div>
        <img src="/images/icons/visa.png" alt="visa options" />
      </div>
      <div className="flex items-center gap-4 ">
        <input type="radio" name="bank"  className="accent-background-2" />
        <label>Cash on delivery</label>
      </div>
      <CouponComponent />
      <Button text={'Place Order'}/>
    </div>
  );
}

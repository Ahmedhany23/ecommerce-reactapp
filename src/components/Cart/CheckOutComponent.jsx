import { Link } from "react-router-dom";
import Button from "../utilites/Button"
import { useSelector } from "react-redux";
import NotFound from "../../pages/NotFound/NotFound"

export default function CheckOutComponent() {
    const data = useSelector((state) => state.cart.selectedProducts);

  const calculateTotal = () => {
    return data.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  if(data.length > 0){
    return (
      <div className='border border-black py-8 px-6 max-w-[470px] w-full'>
          <h5 className='text-xl font-medium mb-6'>Cart Total</h5>
          <div className='w-full flex flex-col gap-4 '>
              <div className='flex justify-between items-center '>
                  <p>Subtotal:</p>
                 {calculateTotal() >= 1 ? <p>${calculateTotal().toFixed(2)}</p> : 0} 
              </div>
              {/* divider */}
              <div className='border border-text-2'></div>
  
              <div className='flex justify-between items-center '>
                  <p>Shipping:</p>
                  <p>Free</p>
              </div>
              {/* divider */}
              <div className='border border-text-2'></div>
  
              <div className='flex justify-between items-center '>
                  <p>Total:</p>
                  {calculateTotal() >= 1 ? <p>${calculateTotal().toFixed(2)}</p> : 0} 
              </div>
              <Link className="w-full" to='/checkout'>
              <Button text={"Process to checkout"}/>
              </Link>
              
          </div>
      </div>
    )
  }
  else{
    return <NotFound/>;
  }
  
}

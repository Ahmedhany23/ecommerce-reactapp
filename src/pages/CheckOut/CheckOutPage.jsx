import React from 'react'
import { useSelector } from 'react-redux'
import NotFoundPage from '../NotFound/NotFoundPage';
import PathComponent from '../../components/utilites/path';
import BillingDetails from '../../components/CheckOut/BillingDetails';

export default function CheckOutPage() {
    const data = useSelector((state)=>state.cart.selectedProducts);
    if(data.length === 0){
        return <NotFoundPage/>
    }
    if(data.length > 0) {
        return (
            <section className='container mx-auto pt-[80px] pb-[140px]'>
            <PathComponent prev={'Account / My Account / Product / View Cart'} path={'CheckOut'}/>
            <div className='flex justify-between pt-[80px]'>
                <BillingDetails/>
            </div>
            </section>
          )

    }
  
}

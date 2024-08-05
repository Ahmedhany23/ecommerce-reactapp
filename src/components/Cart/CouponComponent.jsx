import React from 'react'
import Button from '../utilites/Button'
export default function CouponComponent() {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 max-w-[527px] w-full'>
        <input type="text" name="coupon" placeholder='Coupon Code'  className='px-6 py-[14px] border border-black rounded placeholder:text-text-2 w-full  ' />
       <Button text={"Apply Coupon"}/>
    </div>
  )
}

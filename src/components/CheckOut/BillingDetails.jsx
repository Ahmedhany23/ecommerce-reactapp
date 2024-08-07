import React from 'react'

export default function BillingDetails() {
  return (
    <div>
        <h1 className='font-inter font-medium text-4xl mb-12'>Billing Details</h1>
        <form className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>First Name*</label>
            <input type='text' name='FirstName' className='h-[50px] w-full bg-secondary-1' required />
            </div>
           
            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>Company Name</label>
            <input type='text' name='Company Name' className='h-[50px] w-full bg-secondary-1'  />
            </div>
           
        
           
            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>Street Address*</label>
            <input type='text' name='Street Address*' className='h-[50px] w-full bg-secondary-1' required />
            </div>
           
            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>Apartment, floor, etc. (optional)</label>
            <input type='text' name='Apartment' className='h-[50px] w-full bg-secondary-1'  />
            </div>
           
            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>Town/City*</label>
            <input type='text' name='Town/City*' className='h-[50px] w-full bg-secondary-1' required />
            </div>
           
            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>Phone Number*</label>
            <input type='text' name='Phone Number*' className='h-[50px] w-full bg-secondary-1' required />
            </div>

            <div className='flex flex-col gap-2 max-w-[470px] w-full'>
            <label className='text-text-2'>Email Address*</label>
            <input type='email' name='email' className='h-[50px] w-full bg-secondary-1' required />
            </div>
            <div className='flex gap-4 items-center'>
            <input type="checkbox" name="" id=""  className='w-6 h-6 rounded  border border-secondary-1 accent-secondary-3 clip'/>
            <p>Save this information for faster check-out next time</p>
            </div>
           
        </form>
    </div>
  )
}

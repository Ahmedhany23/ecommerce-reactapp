import React from 'react'
import SubTitle from '../utilites/SubTitle'
import Carousel from '../utilites/Carousel'

const Categories = [
  {title:"Phones",Image:"/images/Home/categories/phone.png",ImageHover:"/images/Home/categories/phone1.png"},
  {title:"Computers",Image:"/images/Home/categories/computer.png",ImageHover:"/images/Home/categories/computer1.png"},
  {title:"SmartWatch",Image:"/images/Home/categories/smartwatch.png",ImageHover:"/images/Home/categories/smartwatch1.png"},
  {title:"Camera",Image:"/images/Home/categories/camera.png",ImageHover:"/images/Home/categories/camera1.png"},
  {title:"HeadPhones",Image:"/images/Home/categories/headphone.png",ImageHover:"/images/Home/categories/headphone1.png"},
  {title:"Gaming",Image:"/images/Home/categories/gamepad.png",ImageHover:"/images/Home/categories/gamepad1.png"},
]

export default function BrowseByCategory() {



  return (
    <section className='relative pt-[80px] pb-[70px] container mx-auto flex flex-col gap-[60px]'>
        <SubTitle sectionTitle={'Categories'} title={'Browse By Category'}/>
        <Carousel Type={3} categories={Categories}/>
        {/* divider */}
      <div className="w-full border-[0.5px] border-secondary-1 mt-[70px]"/>
    </section>
  )
}

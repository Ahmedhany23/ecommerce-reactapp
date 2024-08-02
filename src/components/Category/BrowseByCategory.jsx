import React from 'react'
import SubTitle from '../utilites/SubTitle'
import Carousel from '../utilites/Carousel'

export default function BrowseByCategory() {
  return (
    <section className='relative pt-[80px] pb-[70px] container mx-auto flex flex-col gap-[60px]'>
        <SubTitle sectionTitle={'Categories'} title={'Browse By Category'}/>
        <Carousel Type={3}/>
               {/* divider */}
      <div className="w-full border-[0.5px] border-secondary-1 mt-[70px]"/>
    </section>
  )
}

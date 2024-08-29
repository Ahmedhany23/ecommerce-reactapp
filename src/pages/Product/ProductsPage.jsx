import React from 'react'
import PathComponent from '../../components/utilites/path'
import ProductGrid from '../../components/Product/ProductGrid'
import SideFilter from '../../components/utilites/SideFilter';
import { useFilterdProducts } from '../../services/api/useFliterdProducts';
import { useFilterContext } from '../../context/FilteredProducts';
export default function ProductsPage() {
   const {filter} = useFilterContext();
    const {data,isFetching} = useFilterdProducts(filter);

  return (
    <section className='pt-[80px] pb-[140px] container mx-auto'>
    <PathComponent prev={'Home'} path={'Products'}/> 
    <div className='pt-[20px] flex flex-col md:flex-row justify-center lg:justify-normal md:gap-7'>
        <SideFilter />
        <ProductGrid  data={data}  startIndex={0} EndIndex={23} isFetching={isFetching}/>
    </div>
    </section>
  )
}

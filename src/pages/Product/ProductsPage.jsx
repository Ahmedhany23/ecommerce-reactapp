import React from 'react'
import PathComponent from '../../components/utilites/path'
import ProductGrid from '../../components/Product/ProductGrid'
import { useProducts } from '../../services/api/useProducts'

export default function ProductsPage() {
    const {data,isLoading} = useProducts();
  return (
    <section className='pt-[80px] pb-[140px] container mx-auto'>
    <PathComponent prev={'Home'} path={'Products'}/>
    <div className='pt-[20px]'>
        <ProductGrid  data={data} isLoading={isLoading} startIndex={0} EndIndex={23}/>
    </div>
    </section>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'
import PathComponent from '../../components/utilites/path';
import ProductGrid from '../../components/Product/ProductGrid';
import { useProductByCategory } from '../../services/api/useProductsByCategory';
import Loading from '../../components/Loading/Loading';

export default function CategoryPage() {
    const { search } = useLocation();
    const name = new URLSearchParams(search).get('name');
    const {data ,isLoading} = useProductByCategory(name);
    if(isLoading) return <Loading/>
  return (
    <section className='container mx-auto pt-[80px] pb-[140px]'>
        <PathComponent prev={'Category'} path={name}/>
        <div className='pt-[20px]'>
        <ProductGrid data={data} isLoading={isLoading}/>
        </div>
        
    </section>
  )
}

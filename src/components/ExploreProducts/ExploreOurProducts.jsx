import SubTitle from '../utilites/SubTitle'
import ProductGrid from '../Product/ProductGrid'
import Button from '../utilites/Button'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
export default function ExploreOurProducts({data,isLoading}) {
  return (
    <section className='container mx-auto pb-[140px]'>
      <SubTitle sectionTitle={'Our Products'} title={'Explore Our Products'}/>
      {isLoading ? <Loading/> : <ProductGrid data={data} startIndex={8} EndIndex={16}/>}
      
      <div className='text-center mt-[60px]'>
      <Link to={'/products'}>
      <Button text={'View All Products'}/>
      </Link>
      
      </div>
      
    </section>
  )
}

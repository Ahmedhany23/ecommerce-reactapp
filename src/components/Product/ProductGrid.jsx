import ProductCard from './ProdcutCard'

export default function ProductGrid() {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-[60px] gap-[30px]'>
      {[...new Array(4)].map((item,index)=>(
        <div key={index}>
          <ProductCard/>
        </div>
      ))}
    </div>
  )
}

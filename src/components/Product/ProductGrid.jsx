import ProductCard from './ProdcutCard'

export default function ProductGrid({data,startIndex,EndIndex}) {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,minmax(0,270px))] pt-[60px] gap-[30px]  sm:place-content-between '>
      {data?.slice(startIndex,EndIndex).map((item,index)=>(
        <div key={index}>
        <ProductCard imgLink={item.image[0].img} imgAlt={item.name} name={item.name} price={item.price} priceremoved={item.priceremoved} rate={item.rate} reviews={item.reviews}/>
        </div>
      ))}
    </div>
  )
}

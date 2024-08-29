import ProductCard from './ProdcutCard'
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux';
import { useAddToCartContext } from '../../context/AddedToCart';
import { AnimatePresence, motion } from 'framer-motion';
export default function ProductGrid({data,startIndex,EndIndex,isFetching}) {
  const {cartAdded} = useAddToCartContext()
  const cartData = useSelector((state)=>state.cart.selectedProducts)
  const isProductInCart = (productId) => {

    return cartData.findIndex((cartItem) => cartItem.id === productId) !== -1;
  };

  if(isFetching) return <Loading/>
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,minmax(0,270px))] pt-[60px] gap-[30px]  sm:place-content-between '>
      {data?.slice(startIndex,EndIndex).map((item,index)=>(
        <div key={index}>
        <ProductCard id={item.id} imgLink={item.image[0].img} imgAlt={item.name} name={item.name} price={item.price} priceremoved={item.removedprice} rate={item.rate} reviews={item.reviews} cartisAdded={isProductInCart(item.id)} />
        </div>
      ))}
      <AnimatePresence mode='wait'>
      {cartAdded &&  
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="bg-secondary-3 text-secondary-2 text-xl px-5 py-2 right-0  fixed bottom-0 z-50"
          >
            Added To Cart Successfully!
          </motion.div>
          }
      </AnimatePresence>
   
    </div>
  )
}

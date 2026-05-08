import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const BestSeller = () => {

  const {products} = useContext(ShopContext); 

  const {bestSeller,setBestSeller} = useState([]); //State Variable

  useEffect(()=>{
    //Dependency Array
    const bestProduct = products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,5))
  },[])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Best-selling outfits made for everyday smiles and special moments.</p>
      </div>
    </div>
  )
}

export default BestSeller

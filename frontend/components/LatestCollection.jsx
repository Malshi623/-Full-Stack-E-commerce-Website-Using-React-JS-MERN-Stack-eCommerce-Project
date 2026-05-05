import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
  
    /*Get products data from Context API */
    const {products} = useContext(ShopContext);

    /*Get products from products variable to add 10 latest products in page */
    const [latestProducts,setLatestProducts] = useState([]);
    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])

    /*check products were added */
    /*console.log(products);*/
    
    return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Fresh arrivals made to keep your little ones stylish, happy, and comfortable every day.
        </p>
      </div>
    </div>
  )
}

export default LatestCollection
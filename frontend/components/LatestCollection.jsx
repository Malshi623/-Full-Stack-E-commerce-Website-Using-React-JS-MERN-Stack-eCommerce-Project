import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
  
    /*Get products data from Context API */
    const {products} = useContext(ShopContext);

    /*check products were added */
    /*console.log(products);*/
    
    return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
      </div>
    </div>
  )
}

export default LatestCollection
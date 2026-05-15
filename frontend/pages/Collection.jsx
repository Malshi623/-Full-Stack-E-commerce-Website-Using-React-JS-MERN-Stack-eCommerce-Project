import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../src/assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProduct,setFilterProduct] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  // Display filtered products by checkbox
  const applyFilter = () => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy =productCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productCopy =productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productCopy)
  }

  //Sort products after filtered
  const sortProducts = ()=> {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProduct(filterProductCopy.sort((a,b)=>(a.price - b.price)))       
        break;
      
      case 'high-low':
        setFilterProduct(filterProductCopy.sort((a,b)=>(b.price - a.price)))       
        break;
    
      default:
        applyFilter();
        break;
    }
  }
  

  /* useEffect(()=>{
    setFilterProduct(products);
  },[]) */

  useEffect(()=>{
    applyFilter();
  },[category,subCategory])

  useEffect(()=>{
    sortProducts();
  },[sortType])

  /* useEffect(()=>{
    console.log(category);
  },[category])

  useEffect(()=>{
    console.log(subCategory);
  },[subCategory]) */

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t text-gray-400'>

      {/*Filter Option */}
      <div className='min-w-50'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-800'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/*Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Boys'} onChange={toggleCategory} />Boys
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Girls'} onChange={toggleCategory} />Girls
            </p>
          </div>
        </div>

        {/*Sub Category */}
        <div className={`border border-gray-400 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Casualwear'} onChange={toggleSubCategory} />Casualwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Loungewear'} onChange={toggleSubCategory} />Loungewear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Partywear'} onChange={toggleSubCategory} />Partywear
            </p>
          </div>
        </div>
      </div>

      {/*Right side */}
      <div className='flex-1'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 text-2xl'>
          <Title text1={'ALL'} text2={'COLLECTION'} />

          {/*Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 py-1 w-full md:w-auto'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {
            filterProduct.map((item,index)=>(
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection

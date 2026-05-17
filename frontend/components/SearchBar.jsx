import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../src/assets/assets';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

  return showSearch ? (
    <div className='text-center py-5'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-4 py-2 rounded-full w-3/4 sm:w-1/2 '>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm min-w-0' type="text" placeholder='Search' />

        <div className='flex items-center gap-3 ml-3'>
          <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
          
          <span className='w-[1px] h-4 bg-gray-400'></span>

          <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
        </div>
      </div>
        
      </div>
      
  ) : null
}

export default SearchBar

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../src/assets/assets';
import {useLocation} from 'react-router-dom'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();
    
    useEffect(()=>{
      // console.log(location.pathname);
      if (location.pathname.includes('collection') && setShowSearch ) {
        setVisible(true);
      }
      else{
        setVisible(false);
      }
    },[location])

  return showSearch && visible ? (
    <div className='text-center py-5'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-4 py-2 rounded-full w-3/4 sm:w-1/2 '>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm min-w-0' type="text" placeholder='Search' />

        <div className='flex items-center gap-3 ml-3'>
          <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
          
          <span className='w-px h-4 bg-gray-400'></span>

          <img onClick={()=> {setShowSearch(false); setSearch('');}} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
        </div>
      </div>
        
      </div>
      
  ) : null
}

export default SearchBar

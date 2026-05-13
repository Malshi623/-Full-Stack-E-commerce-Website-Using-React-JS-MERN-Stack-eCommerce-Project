import React from 'react'
import { assets } from '../src/assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
            <img src={assets.logo} className='mb-5 w-55' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Bringing comfort, quality, and modern timeless style to every little wardrobe with thoughtfully designed fashion made for every special moment.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+112-345-6789</li>
              <li>contactus@kidsfashion.com</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer

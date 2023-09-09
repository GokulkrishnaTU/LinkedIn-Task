import React from 'react'
import { HiPlus } from 'react-icons/hi'
import Button from './Button'
import Following from './Following'
function Follow(props) {
    const { logo, title, desc1, desc2 } = props
  return (
    <follow className='flex  space-x-2'>
        <div className='mt-2'>
           <img 
           className='h-14 w-14 rounded-full object-cover'
           src={logo}
           alt=""
           />
        </div>
        <div className='pt-[5px]'>
       
            <h1 className='text-[#000000E6] font-semibold'>{title}</h1>
            <p className='text-[#00000099] text-[14px]'>{desc1}<br/>{desc2}</p>
            <Following/>
        {/* <button className='flex items-center space-x-1 pl-5 mt-2  h-9 hover:bg-gray-200
         w-28 rounded-full 
        border border-[#00000099]'>
            <HiPlus/>
            <span className='text-[#000000E6] font-semibold'>Follow</span>
      </button> */}
      </div>

    </follow>
  )
}

export default Follow
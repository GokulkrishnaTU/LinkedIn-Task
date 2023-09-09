import React, { useState } from 'react'
import { BsLinkedin, BsPeopleFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'




function Header({handleButtonClick }) {

     return (
    <header className='fixed hidden md:flex h-[58px] w-full z-50
      items-center  bg-[#FFFFFF] shadow-sm
       pl-16'>
<div className='flex space-x-[12px] 2xl:ml-[190px] '>    
<div className='text-[#0A66C2] flex'>
    

 <BsLinkedin className='h-[37px] w-[37px]'/>


    </div>
   <div className='flex pl-4 bg-gray-100 h-10 rounded-md w-[250px]  xl:w-[310px]'>
        <div className='flex items-center
      space-x-2 '>
      <ImSearch className='h-4 w-4'/>
    <input type="search"
      placeholder='Search'
      required
      className='flex bg-gray-100 outline-none text-[#333333] w-[250px]  text-[16px] cursor-pointer'/>
    </div>
    </div>
</div>
    <div className='flex space-x-0 ml-[40px] md:ml-[50px] xl:ml-[168px] cursor-pointer'>
    <div className='pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
      <button   className='text-[14px] pb-1 text-[#333333]  border-[1px] border-[#000000] w-[60px] rounded-[20px] bg-[#d5d2d2] '   onClick={() => handleButtonClick(1)}>people</button>

      </div>


      <div className='pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
      <button   className='text-[14px] pb-1 text-[#333333]  border-[1px] border-[#000000] w-[60px] rounded-[20px] bg-[#d5d2d2] '   onClick={() => handleButtonClick(2)}>company</button>

      </div>


      <div className='pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
      <button className='text-[14px] pb-1 text-[#333333]  border-[1px] border-[#000000] w-[60px] rounded-[20px] bg-[#d5d2d2] ' >location</button>

      </div>
      <div className='pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
      <button className='text-[14px] pb-1 text-[#333333]  border-[1px] border-[#000000] w-[60px] rounded-[20px] bg-[#d5d2d2] ' >people</button>

      </div>
      <div className='pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
      <button className='text-[14px] pb-1 text-[#333333]  border-[1px] border-[#000000] w-[60px] rounded-[20px] bg-[#d5d2d2] ' >people</button>

      </div>

    </div>
    <div className='hidden xl:flex ml-7 border-l h-14 items-center space-x-5 lg:pl-32 xl:pl-5  pl-5 text-[#00000099]' >
             <div className='hover:text-[#000000E6] text-[#00000099] cursor-pointer'>
               <p className='flex items-center hover:text-[#000000E6] text-[#00000099] '> 
           <span className='text-[14px] '>Work </span>
       </p>
               </div>
               <div
           className='hover:text-[#000000E6] text-[#00000099] cursor-pointer'    >
               <p className='flex items-center hover:text-[#000000E6] text-[#00000099] '> 
           <span className='text-[14px] '>Post a Job</span>
       </p></div>
    </div>
    </header>
  )
}

export default Header
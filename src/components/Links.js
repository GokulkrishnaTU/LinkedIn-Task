import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { BsLinkedin }  from 'react-icons/bs'
function Links() {
  return (
    <div className='cursor-pointer space-y-2 ml-20'>
            <div className='space-y-2 ml-4'>
            <div className='space-x-4 flex items-center'>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099]'>About</p>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099]'>Accessibility</p>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099]'>Help center</p>
             </div>
             <div className='space-x-4 flex items-center pl-2'>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099] flex  items-center'>
                     Privacy & Terms <MdOutlineArrowBackIosNew className='rotate-90 ml-1 h-4 w-4'/></p>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099]'>Ad Choices</p>
          
             </div>
             <div className='space-x-4 flex items-center '>
             <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099]'>Advertising</p>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099] flex  items-center'>
                     Business Services<MdOutlineArrowBackIosNew className='rotate-90 ml-1 h-4 w-4'/></p>
             
             </div>
             <div className='space-x-4 flex items-center pl-3'>
             <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099]'>Get the LinkedIn App</p>
                 <p className='hover:underline hover:text-blue-500 text-[14px] text-[#00000099] flex  items-center'>
                     More</p>
             
             </div>
          
            </div>
            <div className='space-x-1 flex items-center pt-1'>
             <p className='  text-[14px]  flex items-center
              font-bold 
             text-[#0A66C2]  '>Linked<div className='text-[#0A66C2] flex'>
    <BsLinkedin className='h-[17px] w-[17px] ml-[1px]'/>
    </div></p>
                 <p className='  text-[14px] text-[#000000E6] flex  items-center'>
                 LinkedIn Corporation © 2022</p>
             
             </div>
    </div>
  )
  
}

export default Links
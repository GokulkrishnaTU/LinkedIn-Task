import React from 'react'
import { ImSearch } from 'react-icons/im'
import {AiFillMessage} from 'react-icons/ai'
import {ImHome3} from 'react-icons/im'
import {MdNotifications, MdHomeRepairService} from 'react-icons/md'
import { CgMenuGridR } from 'react-icons/cg'
import {  }  from 'react-icons'
import Logo from './Logo'
function Navbar() {
  return (

    <div className='fixed flex w-[500px] sm:w-[780px]  bg-white items-center md:hidden top-0
     pl-[14px] sm:pl-12 space-x-2 py-2 sm:py-4  sm:space-x-1 z-50'>
        <div>
          <div className='h-8 w-8 '>
            <Logo/>
          </div>
            {/* <img 
            className='h-8 w-8 rounded-full' 
            src='https://media-exp1.licdn.com/dms/image/C4D03AQH5cUIbTiY90g/profile-displayphoto-shrink_100_100/0/1654170901849?e=1659571200&v=beta&t=HkNzOgMngB4Sa756FZJPqV0aZSWvWgGdqothWDnK980'
            alt=''
            /> */}
        </div>
          <div className='flex pl-4 bg-gray-100 h-10 rounded-md w-[250px]  sm:w-[360px]'>
        <div className='flex items-center
      space-x-2 '>
      <ImSearch className='h-4 w-4'/>
  
    <input type="search"
      placeholder='Search'
      required
      className='flex bg-gray-100 outline-none text-[#333333] text-[16px]'
      />
    
    </div>
    </div>
    <div className='flex items-center space-x-6'>
    <AiFillMessage className='h-[22px] w-[22px] ml-7 sm:ml-5'/>
 <p className='flex'>   <ImHome3 className='hidden sm:flex h-[26px] w-[26px] text-[#000000E6] ml-1'/>
 <p className=' absolute ml-4 '>
 <span className='bg-red-600 h-4 w-4 rounded-full absolute hidden sm:flex '></span>
 <span className='h-[10px] w-[10px]  bg-white rounded-full hidden sm:flex absolute  ml-[3px] text-center mt-[3px]'></span>
 
 </p>
 </p>
    <MdNotifications className='hidden sm:flex h-[26px] w-[26px]  ml-5'/>
    <CgMenuGridR className='hidden sm:flex h-7 w-7 ml-[8px]'/>
    <MdHomeRepairService com className='hidden sm:flex h-7 w-7 ml-5'/>
    </div>
    </div>

  )
}

export default Navbar
import React from 'react'
import { BsLinkedin, BsPeopleFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { ImHome3 } from 'react-icons/im'
import { MdHomeRepairService, MdNotifications } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'
import { TiArrowSortedDown } from 'react-icons/ti'
import { CgMenuGridR } from 'react-icons/cg'
import Logo from './Logo'

import { Link } from 'react-router-dom';


function Header(props) {
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
      <div className='border-b-2 border-[#000000E6] pt-1 w-[100px] pl-8'>
   
      <div className='flex '>
      <ImHome3 className='h-[26px] w-[26px] text-[#000000E6] ml-1'/>
      <p className='h-[18px] w-[18px] rounded-full bg-red-700 absolute ml-[16px]'>
        </p>
        <span className='h-2 w-2 rounded-full bg-white absolute ml-[21px] mt-[5px]'></span>
      </div>
        <p className='text-[14px] pb-1 text-[#333333]' >Home</p>  
      </div>

      <Link to="/items" className="text-[14px]">

<div className='pl-3 pt-1 hover:text-[#000000E6] text-[#00000099]'>
  <BsPeopleFill className='h-[26px] w-[26px]  ml-6'/>
    My Network
</div>
</Link>


      <div className='pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
        <MdHomeRepairService className='h-[26px] w-[26px]  ml-[1px]'/>
        <p className='text-[14px]'>


Jobs



          </p>
      </div>
      <div className='pl-7 pt-2 hover:text-[#000000E6] text-[#00000099]'>
        <AiFillMessage className='h-[22px] w-[22px]  ml-5'/>
        <p className='text-[14px]'>
          Messaging
        </p>
      </div>
      <div className='hidden lg:flex  lg:flex-col pl-8 pt-1  hover:text-[#000000E6] text-[#00000099] '>
      <div className='flex '>
      <MdNotifications className='h-[26px] w-[26px]  ml-[24px] hover:rotate-45'/>
      <p className='absolute ml-[37px] h-5 top-[2px]
       w-5 bg-[#CC1016] rounded-full text-[#FFFFFF] pl-[2px] text-center text-[12px]'><span>2</span></p>
        </div>
        <p className='text-[14px]'>Notifications</p>
      </div>
      <div className='hidden lg:flex lg:flex-col items-center mt-1 pl-5'>

     <div className='h-[25px] w-[25px] '>
     <Logo className=''/>

     </div>
          {/* <img
          className='h-[25px] w-[25px] rounded-full'
           src='https://media-exp1.licdn.com/dms/image/C4D03AQH5cUIbTiY90g/profile-displayphoto-shrink_100_100/0/1654170901849?e=1659571200&v=beta&t=HkNzOgMngB4Sa756FZJPqV0aZSWvWgGdqothWDnK980'
          alt=''
          /> */}

       <p className='flex items-center hover:text-[#000000E6] text-[#00000099] '> 
           <span className='text-[14px] '>Me</span>
       <TiArrowSortedDown className='ml-[1px] mt-[2px] h-5 w-5 '/>
       </p>
      </div>
    </div>
    <div className='hidden xl:flex ml-7 border-l h-14 items-center space-x-5 lg:pl-32 xl:pl-5  pl-5 text-[#00000099]' >
             <div className='hover:text-[#000000E6] text-[#00000099] cursor-pointer'>
               <CgMenuGridR className='h-7 w-7 ml-[8px]'/>
               <p className='flex items-center hover:text-[#000000E6] text-[#00000099] '> 
           <span className='text-[14px] '>Work </span>
       <TiArrowSortedDown className='ml-[1px] mt-[2px] h-6 w-6  '/>
       </p>
               </div>
               <div
           className='hover:text-[#000000E6] text-[#00000099] cursor-pointer'    >
             <MdHomeRepairService className='h-7 w-7 ml-5'/>
               <p className='flex items-center hover:text-[#000000E6] text-[#00000099] '> 
           <span className='text-[14px] '>Post a Job</span>
       </p></div>
    </div>
    </header>
  )
}

export default Header
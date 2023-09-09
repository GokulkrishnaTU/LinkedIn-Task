import React from 'react'
import Sidebar from './Sidebar'
import { RiGalleryFill } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import { IoBagRemove  } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import {  MdPlayArrow } from 'react-icons/md'
import Posts from './Posts'
import Postcard from './Postcard'
import Data from './Datas'
import DataCard from './DemoData'
import Logo from './Logo'
import me from '../assets/linkedin.jpeg'


function NetworkSection({ selectedButton}) {

    console.log(selectedButton,"kitttoooo");

  return (
    <div className='mt-8 sm:mt-4 mb-12 sm:mb-9 sm:ml-6 ml-2  md:ml-2 bg-white'>
   
        <div className='hidden lg:flex items-center py-1 pl-[28px] text-[14px]'>
          <p className='border-t border-gray-400 w-[498px] '> </p>
          </div>
          <div className=' w-[410px] sm:w-[500px] md:w-[620px]  xl:w-[600px] md:ml-6 '>
<DataCard id={ selectedButton}/>

          </div>
        

   </div> 
  )
}

export default NetworkSection







// data={postData}
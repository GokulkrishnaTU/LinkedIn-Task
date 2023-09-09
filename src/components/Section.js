import React from 'react'
import Sidebar from './Sidebar'
import { RiGalleryFill } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import { IoBagRemove  } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import {  MdPlayArrow } from 'react-icons/md'
import Posts from './Posts'
import Postcard from './Postcard'
import Logo from './Logo'
import me from '../assets/linkedin.jpeg'


function Section() {
//   const [postData, setPostData] = useState([])
//   const [isLoading, setIsLoading] = useState(true)

//   console.log("post data", postData)
//   useEffect(() => {
  
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log("data from section api",result)
//           setPostData(result)
//           setIsLoading(false)
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           // setIsLoaded(true);
//           // setError(error);
//           setIsLoading(false)
//           console.log(error)
//         }
//       )
//   }, [])

//   useEffect(() => {
      
//   }, [])
  
//   if(isLoading){
//     return(
      
// <div><p>Coming Soon...</p></div>
  
//     )
//   }
  return (
    <div className='mt-8 sm:mt-4 mb-12 sm:mb-9 sm:ml-5 ml-0  md:ml-0'>
        <div className='hidden lg:flex'>
        <div className=' h-[140px] w-[600px] bg-[#FFFFFF] cursor-pointer rounded-lg border-2 mt-6 ml-6 '>
           <div className='flex items-center space-x-2 pl-4 pt-2'>
            <div className='h-14 w-14'>
              <Logo/>
            </div>
             <img
             className='h-8 w-14 rounded-full object-cover'
              src={me}
             alt=""
             />
             <div className='cursor-pointer '>
              <input type="search"
              
              placeholder='Start a Post'
              required
              className='text-[15px] text-[#00000099] mt-2
              font-semibold  outline-none  h-[52px] w-[500px] 
              pr-2 rounded-full bg-[#FFFFFF] pl-5 border
              border-[#747272e6] hover:bg-gray-200'
              />
             </div>
           </div>
           <div className='flex items-center'>
          <div  className='pt-3 pl-6'>
            <ul className='space-x-[42px] flex items-center'>
            <li className='flex items-center space-x-3 hover:bg-gray-200 w-24 pl-2 
             h-11 rounded-lg'>
                 <RiGalleryFill className='text-blue-400 h-6 w-6 '/>
                            <p className='text-[#000000E6] text-[15px] '>Photo</p>
               </li>
<a href="https://www.youtube.com/watch?v=zd4ALKv8Das&ab_channel=ExpertAcademy">

<li className='flex items-center space-x-3 hover:bg-gray-200 w-24 pl-2  h-11 rounded-lg'>
                <BsYoutube className=' h-7 w-6 text-green-500'/>
                <p className='text-[#000000E6] text-[15px] '>
                  Videos</p>
              </li>

</a>
              <li className='flex items-center space-x-3 hover:bg-gray-200 w-24 pl-2  h-11 rounded-lg'>
                <IoBagRemove className='text-blue-300 h-6 w-6 '/>
                <p className="text-[#000000E6] text-[15px] ">Job</p>
              </li>
              <li className='flex items-center space-x-3 hover:bg-gray-200 w-36 pl-2  h-11 rounded-lg'>
                <AiOutlineMenuUnfold className='text-red-400 h-6 w-6 '/>
                <p className='text-[#000000E6] text-[15px] '>Write Article</p>
              </li>
            </ul>
          </div>
           </div>
          </div>
        </div>
        <div className='hidden lg:flex items-center py-1 pl-[28px] text-[14px]'>
          <p className='border-t border-gray-400 w-[498px] '> </p>
          <p className='pl-2 text-gray-500'>Sort by: </p>
          <p  className='pl-1'>Top</p>
          <MdPlayArrow className='rotate-90 w-4 h-4'/>
          </div>
          <div className=' w-[410px] sm:w-[500px] md:w-[620px]  xl:w-[600px] md:ml-6 '>
            <Postcard />
          </div>
        

   </div> 
  )
}

export default Section







// data={postData}
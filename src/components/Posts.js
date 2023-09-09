import React, { useState } from 'react'
import  { BsThreeDots, BsDot, BsArrow90DegRight, BsBookmark } from 'react-icons/bs'
import { BiWorld, BiLink, BiHide, BiShow  }  from 'react-icons/bi'
import { HiPlus, HiUserRemove } from "react-icons/hi"
import { AiOutlineDislike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { IoNavigate } from "react-icons/io5"
import  { FiDelete } from 'react-icons/fi'
import Button from './Button'
import Like from './Like'
import Open from './Open'

function Posts(props) {
  const [change, setChange] = useState(true);
  console.log(props)
  const { logo, small, email, user, thumbnailUrl, url, title, body, experience, time, desc1, desc2, desc3, desc4, image, likes, comments, shares } = props
  return (
   
    <div className='bg-[#FFFFFF] w-[300px]  h-[860px] mb-2 md:h-[860px] lg:mt-0
   sm:w-[748px]  md:w-[766px] xl:w-[600px] lg:w-[600px] border-2 shadow-sm'>
             <div className=' border-b w-[540px] sm:w-[720px] md:w-[700px] lg:w-[540px] ml-5 lg:ml-5'> 
          <div className=' py-2 flex items-center justify-between'>
          <p className='flex items-center space-x-2 '>
                <img
                className='h-7 w-7 rounded-full object-cover'  
                src={logo}
                alt=''
                />
                <h1>{small} </h1>
            </p>
         {/* <p>
          <Open/>
         </p> */}

    <p className='h-8 w-8 pl-1 pt-1 rounded-full hover:bg-gray-200 cursor-pointer'>

       <BsThreeDots onClick = {() => setChange(!change)} className='rotate-90 lg:rotate-180 h-6 w-6'/>
       {change?<h1></h1>:
                <div className='h-[595\4px]  mt-3 w-[370px] bg-[#FFFFFF] rounded-lg  border-2
                z-10 absolute 
        left-[140px]    sm:left-[260px] md:left-[366px]   lg:left-[555px]'>
            <div className=' pt-1'>
              <ul className=''>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <BsBookmark className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Save</span>
                     <span className='text-[14px]'>For later</span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 py-3 pl-3  hover:bg-gray-200'>
                  <BiLink className='h-6 w-6'/>
                  <p className='flex f'>
                     <span className='font-semibold'>Copy Link  to Post</span>
                  </p>
                </li>
                <li className='flex   space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <FiDelete className='h-6 w-6 mt-3'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Unfollow Talha Bhutta </span>
                     <span>Stay connected but stop seeing posts from talha in feed </span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <HiUserRemove className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Remove Connection With talha bhutta</span>
                     <span className='text-[14px]'>talha wan't be notiified</span>
                  </p>
                </li>
                <li className='flex   space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <FiDelete className='h-6 w-6 mt-3'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Unfollow Faizan mumtaz </span>
                     <span>Stay connected but stop seeing posts from faizana in feed </span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <HiUserRemove className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Remove Connection With Faizan Mumtaz</span>
                     <span className='text-[14px]'>Faizan wan't be notiified</span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <BiHide className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Hide or Report this Post</span>
                     <span className='text-[14px]'>Let us Know why you don't want to see this</span>
                  </p>
                </li>
                <li className='flex  items-center space-x-2 pl-3 py-3  hover:bg-gray-200'>
                  <BiShow className='h-6 w-6'/>
                  <p className='flex flex-col'>
                     <span className='font-semibold'>Let can see this post?</span>
                     <span className='text-[14px]'>Visible to anyone on or off on linked in</span>
                  </p>
                </li>
              </ul>
            </div>
                   </div>}
       </p>
        
          </div>
             </div>
             <div className='pl-5 pt-2 flex items-center'>
                 <div className='flex items-center  space-x-3'>
                     <img
                     className='h-12 w-12 rounded-full  object-cover' 
                    //  src={user}
         src={user}

                     alt=''
                     />
                       <div className='w-[420px]  md:w-[600px] lg:w-[440px] xl:w-[400px]'>
                           <p className='text-[#000000E6]  font-semibold flex items-center'>{title}
          <p className='mt-[3px] '><BsDot/></p>
                           <span className='text-[#00000099]'>2nd</span></p>
                        <div className='flex items-center md:justify-between'>
                        <p className='flex w-[330px]  lg:w-[590px]  text-[14px] text-[#00000099]
                        '>{experience} </p>
                             
                        </div>
                           <p className='flex items-center text-[#00000099]'>{time}
                                                   
          <p className='mt-1'><BsDot/></p>
                           <BiWorld/></p>
                       </div>
                    

                     </div>
                     <div>
                       <Button/>
                     </div>
                     {/* <button 
                           className='ml-0 flex text-[18px] h-8 w-[100px] pl-[10px] rounded-lg hover:bg-blue-200
                            items-center text-[#0A66C2] font-semibold '>
                              <button onClick = {() => setChange(!change)} className='flex items-center'>
                              <HiPlus/><span className='pl-1'>
                                 Follow
                           </span>
                           </button>
                           {change?<h1></h1>:
				<div className='
            absolute z-20'>ssssss</div>}
                           </button> */}
                 </div>
                 <div className='pl-5  pt-3'>
                         <h1 className='text-[#000000E6]'>{desc1}</h1>
                         <h1 className='text-[#0A66C2]'>{desc2}</h1>
                         <h1 className=' text-[#0A66C2] font-semibold text-[15px]'>{desc3}</h1>
                 
                         <h1 className='pt-4 text-[#0A66C2] font-semibold text-[15px]'>{desc4}</h1>
                     </div>
                     <div className='pt-2'>
                         <img
                         className='w-[570px] sm:w-[748px] md:w-[766px] lg:w-[600px] h-[550px] '
        src={image}
                         alt=''
                         />
    </div>
    <div className='flex items-center justify-between text-[#00000099]
     text-[14px] border-b w-[546px] sm:w-[666px] md:w-[546px] ml-3'>
      <div className='flex items-center '>
   
      <img 
        className='h-[22px] w-[22px] rounded-full border-2 border-white'
        src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
        alt=''
       />

       <img 
        className='h-[22px] w-[22px] rounded-full absolute ml-[14px] border-2 border-white'
        src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
        alt=''
       />
       <img 
        className='h-[22px] w-[22px] rounded-full z-20 ml-[6px] border-2 border-white'
        src='https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1'
        alt=''
       />
       <p>{likes}</p>
           </div>
       <div className=' flex items-center py-2 pl-4  '>
          <p>{comments} </p>
          <p className='mt-1'><BsDot/></p>
          <p>{shares}</p>
       </div>
    
      </div>
      <div className=''>
            <div className='ml-0 sm:ml-4 mt-2'>
              <ul className='text-[#00000099] cursor-pointer flex items-center space-x-9 sm:space-x-16 md:space-x-8'>
            
               <li className='
 flex items-center space-x-1 hover:bg-gray-200 h-10 w-28 rounded-md pl-5'>
                    <div className='dropdownM '>
                  <button className='dropbtnM flex items-center space-x-[4px]'>
                  <AiOutlineDislike className='rotate-180 h-[22px] w-[22px]'/>
                <p className='pt-[2px]'>
                Like  
                  </p>
                  </button>
                  <div className='dropdownM-contents mb-44 bg-[#FFFFFF] border-2  shadow-2xl flex items-center
                   h-[57px] rounded-full pt-1 pl-1  space-x-2 w-[300px]  z-40'>
                <div className='flex items-center space-x-1  ml-2  '>

                <a href="#" className=' transition ease-in-out delay-100 
                 hover:-translate-y-3 hover:scale-110  duration-100'>

 <img 
                  className='h-10 w-10 '
                  src='https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l'
                alt=""
                /> 
                {/* <Like/> */}
                </a>

                <a href="" className=' transition ease-in-out delay-100  hover:-translate-y-3 hover:scale-110  duration-100'>
                  <img 
                  className='h-10 w-10 '
                  src='https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo'
                alt=""
                />
                </a>
                <a href="#" className=' transition ease-in-out delay-100  hover:-translate-y-3 hover:scale-110  duration-100'>
                  <img 
                  className='h-10 w-10'
                  src='https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi'
                alt=""
                />
                </a>
                <a href="#" className=' transition ease-in-out delay-100  hover:-translate-y-3 hover:scale-110  duration-100'>
                  <img 
                  className='h-10 w-10'
                  src='https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm'
                alt=""
                />
                </a>
                <a href="#" className=' transition ease-in-out delay-100  hover:-translate-y-3 hover:scale-110  duration-100'>
                  <img 
                  className='h-10 w-10'
                  src='https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl'
                alt=""
                />
                </a>
                <a href="#" className=' transition ease-in-out delay-100  hover:-translate-y-3 hover:scale-110  duration-100'>
                  <img 
                  className='h-10 w-10  '
                  src='https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh'
                alt=""
                />
                </a>
                </div>
                  </div>
                    </div>
                </li>
                <li className='
 flex items-center space-x-1 hover:bg-gray-200 h-10 w-32 rounded-md pl-3'>
                  <FaRegCommentDots className=' h-[22px] w-[22px]'/>
                  <p>Comments</p>
                </li>
      
            
                <li className='
 flex items-center space-x-1 hover:bg-gray-200 h-10 w-28 rounded-md pl-5'>
                  <BsArrow90DegRight className=' h-[20px] w-[20px]'/>
                  <p>Share</p>
                </li>
      
                <li className='
 flex items-center space-x-1 hover:bg-gray-200 h-10 w-28 rounded-md pl-5'>
                  <IoNavigate className=' h-[22px] w-[22px]'/>
                  <p>Send</p>
                </li>
      
              </ul>
            </div>
      </div>
    
    </div>






    
  )
}

export default Posts
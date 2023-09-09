import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { GrFormCheckmark } from 'react-icons/gr'
function Button() {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (

    <div className='navBar'>
   <button 
                           className='     mr-3 flex text-[18px] h-8 w-[120px] pl-[0px] 
                           rounded-lg hover:bg-blue-200
                            items-center text-[#0A66C2] font-semibold'>
                            <button className='font-medium text-[#171A20] ' 
                            onClick={handleToggle}>{navbarOpen ? <p 
       className="text-[18px] font-semibold left-1  flex items-center space-x-2 pl-2 
       text-gray-400">
         <GrFormCheckmark className='h-5 w-5 text-gray-200'/>Following</p>  :
         <div className='flex items-center ml-5 text-[#0A66C2]  space-x-1'><HiPlus/><span className=' '>
       Follow
 </span></div>}</button>
 <div className={`menuNav ${navbarOpen ? " showMenu" : ""} 
        pt-[10px] max-w-[700px] md:max-w-[300px]
           xl:max-w-[300px]`}>
    
 </div>
                              
                            
                           
                           {/* {change?<h1 className='  ml-0 flex text-[18px] h-8 w-[100px] pl-[1px] 
                              rounded-lg hover:bg-blue-200
                               items-center text-[#0A66C2] font-semibold '>  </h1>:
				<div className='
            absolute z-20   ml-0 flex text-[18px] h-8 w-[100px] pl-[1px] 
            rounded-lg hover:bg-blue-200
             items-center text-[#0A66C2] font-semibold '>Pending</div>} */}
                           </button> 
    </div>
      
  )
}

export default Button
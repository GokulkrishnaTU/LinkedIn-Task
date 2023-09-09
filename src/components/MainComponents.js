import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import RightBar from './RightBar'
import Section from './Section'
import Sidebar from './Sidebar'

function MainComponents() {
  return (
    <div className=" bg-gray-100  ">
 
        <Header />
        <Navbar />
        <div className="flex bg-gray-100 pt-12 w-[580px] 
2xl:ml-[200px]
sm:w-[740px] md:w-[580p] lg:w-[1350px] xl:w-[1345px]">
            <Sidebar />
            <Section />
            <RightBar />
        </div>
      

</div>
  )
}

export default MainComponents
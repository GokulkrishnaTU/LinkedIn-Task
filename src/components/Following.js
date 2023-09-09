import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { GrFormCheckmark } from 'react-icons/gr';
function Following() {
	const [ navbarOpen, setNavbarOpen ] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	return (
		//
		<div className="navBar">
			<button className="flex items-center space-x-1  pl-1 mt-2 
                            hover:bg-gray-200
                            w-28 h-9 rounded-full 
                          border border-[#00000099] hover:border-2 font-semibold">
				<button className="font-medium text-[#171A20]" onClick={handleToggle}>
					{navbarOpen ? (
						<p className="text-[18px] font-semibold left-1 flex items-center  
       text-gray-400">
							<GrFormCheckmark className="h-5 w-5 text-gray-200 " />Following
						</p>
					) : (
						<div className="flex items-center ml-4 space-x-1">
							<HiPlus />
							<span className=" text-gray-400">Follow</span>
						</div>
					)}
				</button>
				<div
					className={`menuNav ${navbarOpen ? ' showMenu' : ''} 
        pt-[10px] max-w-[700px] md:max-w-[300px]
           xl:max-w-[300px]`}
				/>

			</button>
		</div>
	);
}

export default Following;

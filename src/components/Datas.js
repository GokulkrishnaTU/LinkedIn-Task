import React from 'react';
import { HiPlus } from 'react-icons/hi';
import Button from './Button';
import Following from './Following';

function Data(props) {
  const { logo, title, desc1, desc2 } = props;

  return (
    <div className='flex space-x-2 border-2 rounded-lg p-5 flex'>
      <div className='mt-2'>
        <img
          className='h-14 w-14 rounded-full object-cover'
          src={logo}
          alt=""
        />
      </div>
      <div className='pt-[5px]'>
        <h1 className='text-[#000000E6] font-semibold'>{title}</h1>
        <p className='text-[#00000099] text-[14px]'>{desc1}<br/>{desc2}</p>
        {/* You can add the button here */}
      </div>
    </div>
  );
}

export default Data;

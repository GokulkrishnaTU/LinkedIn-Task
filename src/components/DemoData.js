import React from 'react';
import Data from './Datas';

const Demodata = ({ id }) => {
  const followitem = [
    {
      id: 1,
      data: [
        {
          id: 1,
          logo: 'https://fellow.app/wp-content/uploads/2022/06/hr-meetings.jpg',
          title: 'Samara Shaikh',
          desc1: 'HR Executive- ACT Polyols- A group',
          desc2: 'company of Akhtar Group, Candyland',
        },
        {
          id: 2,
          logo: 'https://img.freepik.com/free-photo/serious-boss-is-looking-straight-preparing-business-meeting-with-laptop-restaurant_8353-10545.jpg?w=2000',
          title: 'amal',
          desc1: 'Business  Development manager',
          desc2: '',
        },
        {
          id: 3,
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ditrJKXntDH9O1JJN6JrTY6YbtIXTZ6EQAcg7GB3nJXhAwMtOg_2gS1sLCZgMtUje74&usqp=CAU',
          title: 'Ajmal',
          desc1: 'Founder and CEO at Devsinc, Angel',
          desc2: 'Investor',
        },


        {
            id: 4,
            logo: 'https://png.pngtree.com/background/20230402/original/pngtree-an-executive-man-men-one-vector-picture-image_2259197.jpg',
            title: 'Rijas',
            desc1: 'Full satck Develper at Deltox',
            desc2: 'Investor',
          },

          {
            id: 4,
            logo: 'https://png.pngtree.com/background/20230402/original/pngtree-an-executive-man-men-one-vector-picture-image_2259197.jpg',
            title: 'Rijas',
            desc1: 'Full satck Develper at Deltox',
            desc2: 'Investor',
          },
      ],
    },
    {
      id: 2,
      data: [


        {
            id: 2,
            logo: "https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg",
            title: 'Google',
            desc1: 'Tech based company',
            desc2: '',
          },
          {
            id: 3,
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-oJolLwY9NUyY_JAw8rnNfpn4TqyHLdA4uSpoyXZzO-jYIrDh1qUacd7avO0M7Ai3Fg&usqp=CAU',
            title: 'Apple',
            desc1: 'Electonic company',
            desc2: 'Investor',
          },
        {
          id: 1,
          logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX////yUCL/uQF/ugABpO///v////3+sgD//PrvQAAApe79//3+/vnl9/7/+eYAmu31gGbxUiLxTRv0+eRxsgAAnu8AoO2iyVpavPD9tQDvThT+rQD+//byLADyPwDxd2BorgDygmzvSwDzgmX1fWX4n46aw1Hu9/xKtO9avPOTFwh+AAACPklEQVR4nO3c3VITQRRF4VZzOp2clkASRoExoCA/7/+CdhLwyiqrsvuUo65V3DI1X6YnXG1SIiIiIiIiIiIiIiIiIiIiIiIi+o8zobdrZLFIXg+hTVdouVgtStVyTdnrWEsVakj7/e2eIixfFruF0u3hFGzutlJ3Nacgoe0upNZfU24PYLP9ILUdc4o5qVZ3F++Uru/bSbdRFtagd9GsLDTh+mH/PWq6sEb4+gkLQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoT/ktCmLEyp7NbXa6Fv58lTTfp2zYJWljbe3p8rPXxvByH75vGT1GMNGuf1yDx32A6GHdJ2ZZf2u4fhZz78nLwFTq/XiKndorRONTvem/QxhU65U3ZTbq26myqM5LWXyM2VtfrbXl3ZcbvnuNcw+Uexp+MpPRMLA5qtxJ6b0MvZzVzqpv099CDhMJMaXo7C+XupeahwKTQbPncSpkih9AwnL3T1lPYRXoUKp/AMESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoR/k3BQNjOzTsIaJ5wtFeHystPuKU5okq/bM5zXsGWXr1bDpdJLu8phnXd18jRv/5th27W0n7lqHReWo1QdY3T7PJm2dH4dSis74FbpgvllnrP0BOt0/1HAz3LusXQWH+If/QSIiIiIiIiIiIiIiIiIiIiIiGjS/QBrWFbO7fAd+gAAAABJRU5ErkJggg==',
          title: 'Microsoft ',
          desc1: 'Tech based Company',
          desc2: 'company of Akhtar Group, Candyland',
        },
        {
          id: 1,
          logo: "https://yt3.googleusercontent.com/y50mwtpe8kFDoZACJPMB0SLFyN5-YD0lNj6qbsD6lgywAcgtNPydunjXj5wujqem-z3rrT8Ugw=s900-c-k-c0x00ffffff-no-rj",
          title: 'EY',
          desc1: 'Auditing Company',
          desc2: 'company of Akhtar Group, Candyland',
        },
       
      ],
    },
  ];

  console.log(id, "kittimonee");
  const selectedItem = followitem.find((item) => item.id === id);

  return (
    <div className='lg:mb-20 xl:mb-24'>
      <div className='sticky top-0'>
        <div className='hidden lg:flex flex-col'>
          <div className='mt-38px left-0 lg:ml-1px xl:ml-5 flex flex-center space-y-2'>
            <div className='w-100% h-420px bg-[#FFFFFF]'>
              <div className='flex items-center justify-between w-[500px]'></div>
              <div className='pl-3 pt-2'>
                {selectedItem &&
                  selectedItem.data.map((item) => <Data key={item.id} {...item} />)}
              </div>
              <div className='ml-6 mt-3 text-[#00000099] font-semibold'></div>
            </div>
          </div>
          <div></div>
          <div className='mt-24'></div>
        </div>
      </div>
    </div>
  );
};

export default Demodata;

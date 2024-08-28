"use client"

import Image from "next/image";
import { useState } from "react";


export const PartnerCard = ({name, picture, description, url}) => {

  const [hidden, setHidden] = useState(true);


  const toggleParagraph = () => {
    setHidden(!hidden);
  };

  return (
    <div className='flex flex-col md:flex-row items-start gap-x-4 p-4 min-h-64 w-72 md:w-[576px] rounded-lg bg-[#1A1A1A] border-[#89BE63] border-2 shadow-custom'>

        {/* image div */}
        <div className='h-56 w-64 md:w-[576px] rounded-lg relative overflow-hidden mt-2'>
            <Image 
                  src={`/Images/${picture}`}
                  alt="event" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0" 
            />
        </div>

        {/* text div in the middle */}
        <div className='flex flex-col mt-2'>
            <a href={url} target="_blank">
                <h1 className="w-64 md:w-72 text-wrap self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white">
                    {name}
                </h1>
            </a>

            {!hidden && (
                <p className='w-56 mt-4 text-white text-sm'>
                    {description}
                </p>
            )}

            <button onClick={toggleParagraph} className='border border-[#89BE63] text-white text-sm shadow-custom rounded-lg w-24 h-10 mt-8 mb-4'>
                {hidden ? 'Read More' : 'Read Less'}
            </button>
        </div>
    </div>
  )
};

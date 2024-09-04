import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const StoryCard = ({id, title, description, imageUrl}) => {
      
  return (
    <div className='flex flex-col bg-[#1A1A1A] md:h-[480px] w-64 md:w-80 rounded-lg shadow-custom border border-[#89BE63] p-4 transition-transform transform hover:scale-105'>
    
    {/* image div */}
    <div className='w-56 md:w-72 h-[320px] rounded-lg relative overflow-hidden mb-4'>
        <img 
        src={imageUrl}
        alt="event" 
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0" 
        />
    </div>

    {/* title */}
    <p className='text-white font-bold'>{title}</p>

    {/* read more div */}
    <Link href={`/stories/${id}`} passHref>
        <p className='text-[#89BE63] underline mt-4 cursor-pointer'>Read More</p>
    </Link>

    </div>
  )
};

import React from 'react';
import Link from 'next/link';

export const EventCard = () => {
  return (
    <div className='flex flex-col bg-[#1A1A1A] md:h-[480px] w-60 md:w-96 rounded-lg shadow-custom border border-[#89BE63] p-4 transition-transform transform hover:scale-105'>
    
    {/* image div */}
    <div className='w-52 md:w-[350px] h-[400px] rounded-lg relative overflow-hidden mb-4'>
        <img 
        src="/Images/event1.png"
        alt="event" 
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        className="absolute inset-0" 
        />
    </div>

    {/* title */}
    <p className='text-white font-bold'>Launching Ceremony of The Pluriversity Lahore</p>

    {/* read more div */}
    <Link href="/events/1" passHref>
        <p className='text-[#89BE63] underline mt-4 cursor-pointer'>See More</p>
    </Link>

    </div>
  )
}

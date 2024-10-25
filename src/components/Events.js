import React from 'react';
import { EventCard } from './EventCard';

export const Events = () => {
  return (
    <section className='min-h-screen bg-[#0A0708] border-b-4 border-[#89BE63]'>

        {/* text-div */}
        <div className="pt-16 pb-8 px-16">
          <h1 className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-8">Explore Our Recent Events</h1>
        </div>

        {/* events */}

        <div className="pb-20 px-16">

            <EventCard/>

        </div>

    </section>
  )
}

"use client";

import { useEffect, useState } from 'react';
import { fetchAllStories } from '../../../utils/stories'; 
import Image from "next/image";
import Link from "next/link";

const Page = ({params}) => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      const fetchedStories = await fetchAllStories();
      console.log(fetchedStories)
      setStories(fetchedStories);
    };

    loadStories();
  }, []);

  const story = stories.find(s => s.id === params.story);

  if (!story) {
  return <p className='min-h-screen bg-[#0A0708] text-white text-center p-24'>Finding Story...</p>;
  }

  return (
    <main className="py-12 md:py-16 px-2 md:px-12 min-h-screen bg-[#0A0708]">

      <div className="flex flex-col px-4 md:px-20">

        <Link href="/stories"><p className="text-xl text-[#89BE63] mb-8"><span className="text-5xl">←</span></p></Link>
        
        <div className="flex flex-col md:flex-row gap-x-8">

          {/* image div */}
          <div className="h-80 max-md:mb-8 md:h-96 w-64 md:w-96 border border-[#89BE63] shadow-custom rounded-lg relative overflow-hidden">
            <img
              src={story.imageUrl}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />
          </div>
          
          {/* text div */}
          <div className="flex flex-col gap-y-8">
            <p className="text-2xl md:text-3xl font-bold text-[#89BE63]">{story.title}</p>
            <p className="text-white text-lg w-64 md:w-[576px]">{story.description}</p>
          </div>

        </div>

      </div>

    </main>
  )
}

export default Page;

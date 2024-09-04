"use client";

import { useEffect, useState } from 'react';
import { fetchAllStories } from '../../utils/stories'; 
import { StoryCard } from "@/components/StoryCard";


const page = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      const fetchedStories = await fetchAllStories();
      console.log(fetchedStories)
      setStories(fetchedStories);
    };

    loadStories();
  }, []);

  return (
    <main className="px-2 md:px-8 py-16 min-h-screen bg-[#0A0708]">

      <p className="text-[#89BE63] font-bold text-2xl md:text-3xl px-4 md:px-16 mb-16">Explore All Stories:</p>

      {/* stories div */}
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 px-4 md:px-16 mt-4 mb-12">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            id={story.id}
            title={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
          />
        ))}
      </div>

    </main>
  )
}

export default page;
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAllStories } from '../utils/stories'; 
import { StoryCard } from "./StoryCard";

export const TopStories = () => {
  const images = [
    "/Images/hq-img6.png",
    "/Images/hq-img7.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      const fetchedStories = await fetchAllStories();
      console.log(fetchedStories);
      setStories(fetchedStories);
    };

    loadStories();
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center border-b-4 border-[#89BE63] bg-[#0A0708]"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* text div */}
      <div className="flex flex-col md:flex-row gap-y-8 items-start md:justify-between md:items-center w-full px-4 md:px-16 py-12">
        {/* main heading */}
        <p className="bg-[#0A0708] rounded-lg shadow-custom border border-[#89BE63] font-bold text-[#89BE63] text-2xl w-52 px-8 py-4">Top Stories</p>
        {/* see all link */}
        <Link href="/stories">
          <p className="text-[#89BE63] bg-[#0A0708] rounded-lg shadow-custom px-2 py-2">See All <span className="text-[#89BE63] ml-2">→</span></p>
        </Link>
      </div>

      {/* stories div with horizontal scroll */}
      <div className="flex overflow-x-scroll scrollbar-hide px-4 md:px-10 mt-4 mb-12">
        <div className="flex flex-row gap-x-4 w-full py-4"> {/* inner container for stories */}
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
      </div>
    </section>
  );
};
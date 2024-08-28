"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ReadingCard } from "./ReadingCard";
import { FollowerPointerCard } from "./FollowerPointerCard";

export const ReadingAndArts = () => {
  const images = [
    "/Images/flowers1.png",
    "/Images/flowers2.png",
    "/Images/flowers3.png",
    "/Images/flowers4.png",
    "/Images/flowers5.png",
    "/Images/flowers6.png",
    "/Images/flowers7.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);

  const readingsList = [
    {
      title: "Religion and Conflict Resolution – An Introduction",
      author: "Lee Marsden",
      year: 2012,
    },
    {
      title: "Towards a Political Theology of Post-coloniality",
      author: "Kwok Pui-lan",
      year: 2023,
    }
  ];

  return (
    <section className="min-h-screen bg-[#0A0708] border-b-4 border-[#89BE63]">
      <div className="px-8 md:px-20 pt-16 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-8">Readings Collection</h1>
        <p className="text-white">Explore a curated selection of readings that challenge conventional perspectives and foster a deeper understanding of diverse knowledge systems. Our collection spans disciplines, cultures, and worldviews, offering critical insights to expand your intellectual horizons.</p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Changing images div */}
        <div className="border border-[#89BE63] shadow-custom w-72 h-72 md:w-[480px] md:h-[480px] rounded-full ml-4 md:ml-20 mt-8 mb-16 overflow-hidden relative">
          <Image 
            src={images[currentImageIndex]} 
            alt="event" 
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 block" 
          />
        </div>
        
        <div>

          <p className="text-[#89BE63] underline ml-8 md:ml-20">View More</p>

          <FollowerPointerCard title="Nature and flowers, like reading, nurture the soul, offering quiet moments of reflection and growth. Both invite us to slow down, reflect, and find beauty in simplicity.">
            <div className="flex flex-wrap gap-y-8 gap-x-8 ml-4 md:ml-20 mt-8 mb-16">
                {readingsList.map((reading, index) => (
                  <ReadingCard
                    key={index}
                    title={reading.title}
                    author={reading.author}
                    year={reading.year}
                  />
                ))}
            </div>
          </FollowerPointerCard>

        </div>
      </div>
    </section>
  );
};

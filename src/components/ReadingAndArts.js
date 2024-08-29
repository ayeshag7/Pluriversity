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
      
      <div className="flex items-center justify-center py-8">
        <div className="px-8 md:px-20 pt-16 pb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-8">Readings Collection</h1>
          <p className="text-white w-72">Explore a curated selection of readings that challenge conventional perspectives and foster a deeper understanding of diverse knowledge systems. Our collection spans disciplines, cultures, and worldviews, offering critical insights to expand your intellectual horizons. What makes our collections truly special is that each one is handpicked by dedicated volunteers who bring their passion and expertise to the selection process</p>
        </div>
        {/* Changing images div */}
        <FollowerPointerCard title="Nature and flowers, like reading, nurture the soul, offering quiet moments of reflection and growth. Both invite us to slow down, reflect, and find beauty in simplicity.">
          <div className="border border-[#89BE63] shadow-custom w-64 h-64 md:w-[480px] md:h-[480px] rounded-full ml-4 md:mx-12 mt-8 mb-16 overflow-hidden relative">
              <Image 
                src={images[currentImageIndex]} 
                alt="event" 
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0 block" 
              />
          </div>
        </FollowerPointerCard>
      </div>

    </section>
  );
};

import React from "react";
import Image from "next/image";

export const ReadingCard = ({ title, authorName, year }) => {
  const images = [
    "/Images/pattern1.png",
    "/Images/pattern2.png",
    "/Images/pattern3.png",
  ];

  // Select a random image from the images array
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="flex flex-col min-h-80 w-64 md:w-80 bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom p-4 reading-card">

      <div className="h-48 w-56 md:w-72 relative bg-white overflow-hidden shadow-custom rounded-lg">
        <Image
          src={randomImage}
          alt="pattern"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-white font-bold mt-8 mb-2">{title}</p>
        <p className="text-[#89BE63] mb-2">{authorName}</p>
        <p className="text-white">{year}</p>
      </div>
    </div>
  );
};

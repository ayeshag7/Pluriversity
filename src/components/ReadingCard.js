import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ReadingCard = ({ title, author, year }) => {
  const images = [
    "/Images/pattern1.png",
    "/Images/pattern2.png",
    "/Images/pattern3.png",
  ];

  // Select a random image from the images array
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="bg-[#1A1A1A] h-[432px] w-64 md:w-72 border border-[#89BE63] rounded-lg shadow-custom p-4 reading-card">
      <div className="h-64 w-56 md:w-64 relative bg-white overflow-hidden shadow-custom rounded-lg">
        <Image
          src={randomImage}
          alt="pattern"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
      </div>
      <Link href="">
        <p className="text-white font-bold mt-8 mb-2">{title}</p>
        <p className="text-[#89BE63] mb-2">{author}</p>
        <p className="text-white">{year}</p>
      </Link>
    </div>
  );
};

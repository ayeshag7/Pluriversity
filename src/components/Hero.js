"use client";

import { useState, useEffect } from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export const Hero = () => {
  const images = [
    "/Images/hq-img1.png",
    "/Images/hq-img2.png",
    "/Images/hq-img3.png",
    "/Images/hq-img4.png"
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

  const items = [
    { text: "A multilingual channel to the future of education", imageSrc: "/Images/tag-icon-1.png" },
    { text: "Divesting from dominant knowledge of peace and security", imageSrc: "/Images/tag-icon-2.png" },
    { text: "Centering knowledge rooted in the lived experiences of the oppressed", imageSrc: "/Images/tag-icon-3.png" },
    { text: "Co-constructing knowledge for desirable futures", imageSrc: "/Images/tag-icon-4.png" },
    { text: "Reconstructing I and the International", imageSrc: "/Images/tag-icon-5.png" },
  ];

  return (
    <>
      <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center border-b-4 border-[#89BE63]"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}

      >

      <InfiniteMovingCards items={items} direction="left" speed="normal" pauseOnHover={true} />

      </section>
    </>
  );
};

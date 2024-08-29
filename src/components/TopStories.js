"use client"
import { useState, useEffect } from "react";
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

  return (
    <section
      className="min-h-screen bg-cover bg-center border-b-4 border-[#89BE63] bg-[#0A0708]"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>

        <div className="px-8 md:px-24 py-12">

          <p className="bg-[#0A0708] rounded-lg shadow-custom font-bold text-[#89BE63] text-2xl w-52 px-8 py-4">Top Stories</p>

        </div>
      

    </section>
  )
}

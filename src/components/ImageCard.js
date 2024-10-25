import React from 'react';

export const ImageCard = ({imageSrc}) => {
  return (
    <div className="relative w-60 md:w-80 h-96 overflow-hidden rounded-lg border border-[#89BE63] shadow-custom">
      <img
        src={imageSrc}  
        alt="Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

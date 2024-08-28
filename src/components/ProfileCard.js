"use client";

import Image from "next/image";

export const ProfileCard = ({ name, profilePicture }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] border border-[#89BE63] shadow-custom w-64 md:w-80 min-h-96 rounded-lg">
      {/* image */}
      <div className="h-80 w-56 md:w-64 rounded-lg relative overflow-hidden">
        <Image
          src={`/Images/${profilePicture}`}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
      </div>

      {/* name */}
      <p className="text-xl font-semibold text-white text-center mt-4">
        {name}
      </p>
    </div>
  );
};

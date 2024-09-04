"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FollowerPointerCard } from "./FollowerPointerCard";
import { FolderCard } from "./FolderCard";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from '../utils/firebaseConfig';  // Adjust path as per your structure

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
  const [folders, setFolders] = useState([]); // To hold the fetched folders

  // Initialize Firebase Firestore
  const db = getFirestore(app);

  // Fetch folders from Firestore
  useEffect(() => {
    const fetchFolders = async () => {
      const foldersCollection = collection(db, 'folders');  // Collection name in Firestore
      try {
        const querySnapshot = await getDocs(foldersCollection);
        const fetchedFolders = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFolders(fetchedFolders);
      } catch (error) {
        console.error("Error fetching folders: ", error);
      }
    };

    fetchFolders();
  }, [db]);

  // Image change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen bg-[#0A0708] border-b-4 border-[#89BE63]">
      
      <div className="flex flex-col md:flex-row items-center justify-between py-8 md:px-24">
        {/* text-div */}
        <div className="pt-16 pb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-8">Readings Collection</h1>
          <p className="text-white w-64 md:w-96">Explore a curated selection of readings that challenge conventional perspectives and foster a deeper understanding of diverse knowledge systems. Our collection spans disciplines, cultures, and worldviews, offering critical insights to expand your intellectual horizons. What sets our collections apart is the careful curation by dedicated volunteers, each bringing their unique passion and expertise to the selection process. Their commitment ensures that every item is not only of exceptional quality but also represents a thoughtful and diverse range of voices and ideas.</p>
        </div>
        {/* Changing images div */}
        <FollowerPointerCard title="Nature and flowers, like reading, nurture the soul, offering quiet moments of reflection and growth. Both invite us to slow down, reflect, and find beauty in simplicity.">
          <div className="border border-[#89BE63] shadow-custom w-64 h-64 md:w-[480px] md:h-[480px] rounded-full mt-8 mb-12 overflow-hidden relative">
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

      <div className="reading-collections px-4 md:px-24 mb-20">

        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-12">Explore Our Collections:</p>

        {/* folders div */}
        <div className="flex gap-x-16">
          {folders.length > 0 ? (
            folders.map((folder) => (
              <FolderCard
                key={folder.id}
                id={folder.id}
                name={folder.folderName}
              />
            ))
          ) : (
            <p className="text-white">No folders found.</p>
          )}
        </div>

      </div>

    </section>
  );
};

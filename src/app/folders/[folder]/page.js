"use client";

import { useEffect, useState } from "react";
import { ReadingCard } from "@/components/ReadingCard";
import Link from "next/link";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/utils/firebaseConfig";  // Adjust the path based on your structure

const Page = ({ params }) => {
  const [folderName, setFolderName] = useState('');
  const [readings, setReadings] = useState([]);
  const [filteredReadings, setFilteredReadings] = useState([]);

  // Initialize Firebase Firestore
  const db = getFirestore(app);

  // Fetch readings from Firestore
  useEffect(() => {
    const fetchReadings = async () => {
      const readingsCollection = collection(db, 'readings');  // Collection name in Firestore
      try {
        const querySnapshot = await getDocs(readingsCollection);
        const fetchedReadings = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReadings(fetchedReadings);
      } catch (error) {
        console.error("Error fetching readings: ", error);
      }
    };

    // Set folder name from params
    const decodedFolderName = decodeURIComponent(params.folder);
    setFolderName(decodedFolderName);

    fetchReadings();
  }, [db, params.folder]);

  // Filter readings based on folderName
  useEffect(() => {
    const matchingReadings = readings.filter(reading => reading.folderName === folderName);
    setFilteredReadings(matchingReadings);
  }, [readings, folderName]);

  if (!folderName) {
    return <p>Folder not found</p>;
  }

  return (
    <main className="py-12 px-2 md:px-24 min-h-screen bg-[#0A0708]">

      <Link href="/folders">
        <p className="text-xl text-[#89BE63] mb-8 max-md:mx-2">
          <span className="text-5xl">←</span>
        </p>
      </Link>

      <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-16 max-md:mx-2">
        Readings Collection by {folderName}
      </p>

      {/* readings div */}
      <div className="flex gap-x-8 flex-wrap gap-y-8 max-md:mx-2">
        {filteredReadings.length > 0 ? (
          filteredReadings.map((reading) => (
            <ReadingCard
              key={reading.id}
              title={reading.title}
              authorName={reading.authorName}
              year={reading.year}
            />
          ))
        ) : (
          <p className="text-white">No readings found for this folder.</p>
        )}
      </div>

    </main>
  );
};

export default Page;

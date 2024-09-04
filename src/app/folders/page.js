"use client";

import { useState, useEffect } from "react";
import { FolderCard } from "@/components/FolderCard";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/utils/firebaseConfig";  // Adjust path based on your structure

const Page = () => {

  const [folders, setFolders] = useState([]);  // State to hold folders from Firestore

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

  return (
    <main className="py-20 px-4 md:px-24 min-h-screen bg-[#0A0708]">

      <div className="reading-collections mb-20">

        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-20">All Reading Folders:</p>

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

    </main>
  );
}

export default Page;

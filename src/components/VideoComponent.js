import React, { useState, useEffect } from 'react';
import { fetchAllVideos } from '../utils/videos'; // Import the function to fetch videos from Firestore

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchAllVideos(); // Fetch videos from Firestore
        setVideos(fetchedVideos); // Set the videos in state
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false); // Stop the loading indicator
      }
    };

    loadVideos();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (isLoading) {
    return <p>Loading videos...</p>;
  }

  if (videos.length === 0) {
    return <p>No videos available.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-8 gap-y-8 my-16 px-4">
      {videos.map((video, index) => (
        <div
          key={index}
          className="w-64 md:w-[576px] max-w-lg md:max-w-2xl rounded-lg overflow-hidden shadow-custom transform hover:scale-105 transition-transform duration-300"
        >
          <iframe
            width="100%"
            height="315"
            src={video.src} // Use the src from the Firestore document
            title={video.title} // Use the title from the Firestore document
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;

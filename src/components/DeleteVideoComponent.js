import React, { useState, useEffect } from 'react';
import { fetchAllVideos, deleteVideo } from '../utils/videos';  // Import Firebase functions

const DeleteVideoComponent = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch videos when the component mounts
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchAllVideos(); // Fetch videos from Firestore
        setVideos(fetchedVideos); // Store the fetched videos in state
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false); // Stop the loading indicator
      }
    };

    loadVideos();
  }, []);

  // Handle video deletion
  const handleDelete = async (videoId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this video?');
    if (confirmDelete) {
      try {
        await deleteVideo(videoId); // Delete video by ID
        setVideos(videos.filter((video) => video.id !== videoId)); // Remove deleted video from state
        alert('Video successfully deleted');
      } catch (error) {
        console.error('Failed to delete video:', error);
        alert('Failed to delete video');
      }
    }
  };

  // Show loading state while fetching videos
  if (isLoading) {
    return <p>Loading videos...</p>;
  }

  // Show a message if there are no videos
  if (videos.length === 0) {
    return <p>No videos available to delete.</p>;
  }

  return (
    <div className="bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8">
      <h2 className="text-white text-xl mb-4">Delete Videos</h2>
      <ul className="space-y-4">
        {videos.map((video) => (
          <li
            key={video.id}
            className="flex items-center justify-between bg-[#262626] p-4 rounded-lg"
          >
            <div>
              <p className="text-white">Title: {video.title}</p>
              <p className="text-white">URL: {video.src}</p>
            </div>
            <button
              onClick={() => handleDelete(video.id)} // Delete video on button click
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteVideoComponent;

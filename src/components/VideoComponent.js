import React, { useState, useEffect, useRef } from 'react';
import { fetchAllVideos } from '../utils/videos'; // Import the function to fetch videos from Firestore
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const videoContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Helper function to convert YouTube watch URLs to embed URLs
  const convertToEmbedUrl = (url) => {
    const regExp = /^https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})/;
    const match = url.match(regExp);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // Return the original URL if it's not a YouTube link
  };

  const checkScrollability = () => {
    if (videoContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = videoContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchAllVideos(); // Fetch videos from Firestore
        // Convert YouTube video URLs to embed URLs
        const processedVideos = fetchedVideos.map(video => ({
          ...video,
          src: convertToEmbedUrl(video.src) // Convert src if necessary
        }));
        setVideos(processedVideos); // Set the videos in state
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false); // Stop the loading indicator
      }
    };

    loadVideos();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  useEffect(() => {
    checkScrollability(); // Check scrollability when videos are loaded
  }, [videos]);

  if (isLoading) {
    return <p>Loading videos...</p>;
  }

  if (videos.length === 0) {
    return <p>No videos available.</p>;
  }

  return (
    <div className="relative w-full">
      {/* Scroll Buttons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="p-2 bg-gray-100 rounded-full shadow-lg disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="p-2 bg-gray-100 rounded-full shadow-lg disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      {/* Scrollable Video Container */}
      <div
        className="flex overflow-x-scroll scrollbar-hide space-x-4 py-10 px-4"
        ref={videoContainerRef}
        onScroll={checkScrollability}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-64 md:w-[576px] max-w-lg md:max-w-2xl rounded-lg overflow-hidden shadow-custom flex-shrink-0"
          >
            <iframe
              width="100%"
              height="315"
              src={video.src} // Use the converted or original src
              title={video.title} // Use the title from the Firestore document
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;

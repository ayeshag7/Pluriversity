import React from 'react';

const VideoComponent = () => {
  // List of video sources
  const videos = [
    { src: '/videos/video1.mp4', type: 'video/mp4' },
    { src: '/videos/video2.mp4', type: 'video/mp4' },
    // Add more video sources here if needed
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-8 gap-y-8 my-16">
      {videos.map((video, index) => (
        <div
          key={index}
          className="w-72 md:w-[576px] max-w-lg md:max-w-2xl rounded-lg overflow-hidden shadow-custom transform hover:scale-105 transition-transform duration-300"
        >
          <video width="100%" height="auto" controls className="rounded-lg">
            <source src={video.src} type={video.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;

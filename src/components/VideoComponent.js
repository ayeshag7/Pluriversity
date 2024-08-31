import React from 'react';

const VideoComponent = () => {
  // List of video sources
  const videos = [
    { src: 'https://www.youtube.com/embed/VdOR6a-9Yzw', title: 'Example Video' },
    // Add more YouTube video sources here if needed
  ];

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
            src={video.src}
            title={video.title}
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

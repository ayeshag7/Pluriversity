import React from 'react';

const ShapesComponent = () => {
  return (
    <div className="flex space-x-4 justify-center items-center h-screen bg-gray-100">
      {/* Shape 1 */}
      <div className="w-48 h-72 bg-white border-4 border-black flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 150"
          className="w-full h-full"
        >
          <path
            d="M 50 0 L 100 30 L 100 150 L 0 150 L 0 30 Z"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Shape 2 */}
      <div className="w-48 h-72 bg-white border-4 border-black flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 150"
          className="w-full h-full"
        >
          <path
            d="M 50 0 L 85 25 L 85 150 L 15 150 L 15 25 Z"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Shape 3 */}
      <div className="w-48 h-72 bg-white border-4 border-black flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 150"
          className="w-full h-full"
        >
          <path
            d="M 50 0 L 100 30 L 100 150 L 0 150 L 0 30 Z"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default ShapesComponent;

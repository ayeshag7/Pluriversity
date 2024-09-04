import React, { useState, useEffect } from 'react';
import { fetchAllReadings, deleteReading } from '../utils/folders'; 

export const DeleteReadingComponent = () => {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const loadReadings = async () => {
      const fetchedReadings = await fetchAllReadings();
      setReadings(fetchedReadings);
    };

    loadReadings();
  }, []);

  const handleDelete = async (readingId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this reading?');
    if (confirmDelete) {
      try {
        await deleteReading(readingId);
        setReadings(readings.filter(reading => reading.id !== readingId));  // Update UI after deletion
        alert('Reading successfully deleted!');
      } catch (error) {
        alert('Failed to delete reading: ' + error.message);
      }
    }
  };

  return (
    <div className='bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8'>
      {readings.map((reading) => (
        <div key={reading.id} className="flex items-center justify-between mb-4 bg-[#262626] p-3 rounded-lg">
          <span className="text-white mr-4">ID: {reading.id}</span>
          <span className="text-white mr-4">Title: {reading.title}</span>
          <span className="text-white mr-4">Folder: {reading.folderName}</span>
          <button
            onClick={() => handleDelete(reading.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteReadingComponent;

import React, { useState, useEffect } from 'react';
import { fetchAllFolders, deleteFolderAndReadings } from '../utils/folders'; 

export const DeleteFolderComponent = () => {
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    const loadFolders = async () => {
      try {
        const fetchedFolders = await fetchAllFolders();
        setFolders(fetchedFolders);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    loadFolders();
  }, []);

  const handleDelete = async (folderId, folderName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the folder "${folderName}" and all associated readings?`);
    if (confirmDelete) {
      setIsLoading(true);
      try {
        await deleteFolderAndReadings(folderId, folderName);
        setFolders(folders.filter(folder => folder.id !== folderId));  // Update UI after deletion
        alert(`Folder "${folderName}" and all associated readings deleted successfully.`);
      } catch (error) {
        alert('Failed to delete folder and associated readings: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8'>
      <h2 className='text-white text-xl mb-4'>Delete Folders</h2>
      {folders.length === 0 ? (
        <p className="text-white">No folders found.</p>
      ) : (
        folders.map((folder) => (
          <div key={folder.id} className="flex items-center justify-between mb-4 bg-[#262626] p-3 rounded-lg">
            <span className="text-white mr-4">ID: {folder.id}</span>
            <span className="text-white mr-4">Name: {folder.folderName}</span>
            <button
              onClick={() => handleDelete(folder.id, folder.folderName)}
              disabled={isLoading}  // Disable button during loading
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50' : ''}`}
            >
              {isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DeleteFolderComponent;

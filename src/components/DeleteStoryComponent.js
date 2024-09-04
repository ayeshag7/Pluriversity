import React, { useEffect, useState } from 'react';
import { fetchAllStories, deleteStory } from '../utils/stories'; // Adjust the path as needed

export const DeleteStoryComponent = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      const fetchedStories = await fetchAllStories();
      setStories(fetchedStories);
    };

    loadStories();
  }, []);

  const handleDelete = async (storyId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this story?");
    if (confirmDelete) {
      const success = await deleteStory(storyId);
      if (success) {
        alert('Story successfully deleted!');
        setStories(stories.filter(story => story.id !== storyId)); // Update the UI to reflect the deletion
      } else {
        alert('Failed to delete the story.');
      }
    }
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom p-4 my-8">
      {stories.map((story) => (
        <div key={story.id} className="flex items-center justify-between mb-4 bg-[#262626] p-3 rounded-lg">
          <span className="text-white mr-4">{story.id}</span>
          <span className="text-white mr-4">{story.title}</span>
          <button 
            onClick={() => handleDelete(story.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeleteStoryComponent;

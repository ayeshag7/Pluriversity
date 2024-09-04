import React, { useState } from 'react';
import { addFolder } from '../utils/folders'; 

export const AddFolderComponent = () => {
    const [folderName, setFolderName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);  // Submission state

    const handleChange = (event) => {
        setFolderName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (folderName.trim() !== '') {
            setIsSubmitting(true);  // Disable the button and show loading state
            try {
                const folderId = await addFolder(folderName);
                console.log('Folder added with ID:', folderId);
                alert('Folder successfully added!');
                setFolderName('');  // Clear the input field after successful submission
            } catch (error) {
                alert('Failed to add folder: ' + error.message);
            } finally {
                setIsSubmitting(false);  // Re-enable the button after the operation completes
            }
        } else {
            alert('Folder name cannot be empty.');
        }
    };

    return (
        <div className='bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8'>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label className='text-white block mb-2'>Folder Name:</label>
                    <input
                        type="text"
                        value={folderName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter folder name"
                        disabled={isSubmitting}  // Disable input field while submitting
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}  // Disable the submit button while submitting
                    className={`bg-[#89BE63] text-[#1A1A1A] p-2 w-full rounded-lg cursor-pointer ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                >
                    {isSubmitting ? 'Creating folder, please wait...' : 'Add Folder'}
                </button>
            </form>
        </div>
    );
};

export default AddFolderComponent;

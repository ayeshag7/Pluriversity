import React, { useState } from 'react';
import { addReading } from '../utils/folders';  

export const AddReadingComponent = () => {
    const [formData, setFormData] = useState({
        title: '',
        authorName: '',
        year: '',
        folderName: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Manage submission state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, authorName, year, folderName } = formData;

        // Simple validation check
        if (!title || !authorName || !year || !folderName) {
            alert('Please fill out all fields.');
            return;
        }

        setIsSubmitting(true); // Disable the form during submission

        try {
            const readingId = await addReading(title, authorName, year, folderName);
            console.log('Reading added with ID:', readingId);
            alert('Reading successfully added!');
            setFormData({
                title: '',
                authorName: '',
                year: '',
                folderName: ''
            });  // Clear form after successful submission
        } catch (error) {
            alert('Failed to add reading: ' + error.message);
        } finally {
            setIsSubmitting(false); // Re-enable the form after submission
        }
    };

    return (
        <div className='bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8'>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label className='text-white block mb-2'>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter title"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="mb-4">
                    <label className='text-white block mb-2'>Author Name:</label>
                    <input
                        type="text"
                        name="authorName"
                        value={formData.authorName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter author name"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="mb-4">
                    <label className='text-white block mb-2'>Year:</label>
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter year"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="mb-4">
                    <label className='text-white block mb-2'>Folder Name:</label>
                    <input
                        type="text"
                        name="folderName"
                        value={formData.folderName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter folder name"
                        disabled={isSubmitting}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}  // Disable button while submitting
                    className={`bg-[#89BE63] text-[#1A1A1A] p-2 w-full rounded-lg cursor-pointer ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                >
                    {isSubmitting ? 'Adding reading, please wait...' : 'Add Reading'}
                </button>
            </form>
        </div>
    );
};

export default AddReadingComponent;

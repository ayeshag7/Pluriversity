import React, { useState } from 'react';
import { uploadImage, getImageUrl, addStory } from '../utils/stories';  // Adjust the path as needed

export const StoryForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageName: '',
        file: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                imageName: file.name,  // Update the image name field when a file is uploaded
                file: file
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);  // Set the submitting state to true to disable the button and show the loading message

        if (formData.file) {
            const snapshot = await uploadImage(formData.file);
            if (snapshot) {
                const imageUrl = await getImageUrl(formData.file.name);
                if (imageUrl) {
                    const docId = await addStory(formData.title, formData.description, formData.file.name, imageUrl);
                    console.log("Story added with ID:", docId);
                    alert('Story successfully added!');
                } else {
                    alert('Failed to retrieve image URL.');
                }
            } else {
                alert('Failed to upload image.');
            }
        } else {
            alert('Please select an image to upload.');
        }

        // Reset the form data and submitting state
        setFormData({
            title: '',
            description: '',
            imageName: '',
            file: null
        });
        setIsSubmitting(false);  // Reset submitting state after operation
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
                    />
                </div>
                <div className="mb-4">
                    <label className='text-white block mb-2'>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className='text-white block mb-2'>Image Name:</label>
                    <input
                        type="text"
                        name="imageName"
                        value={formData.imageName}
                        readOnly
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className='text-white block mb-2'>Upload Image:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg file:text-white file:border-none file:bg-[#89BE63] file:rounded-lg file:px-4 file:py-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}  // Disable the button while submitting
                    className={`bg-[#89BE63] text-[#1A1A1A] p-2 w-full rounded-lg cursor-pointer ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                >
                    {isSubmitting ? 'Posting the story, please wait...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

import React, { useState } from 'react';
import { addVideo } from '../utils/videos';  // Import the addVideo function

const AddVideoComponent = () => {
    const [formData, setFormData] = useState({
        src: '',
        title: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Add the video to Firestore
            const videoId = await addVideo(formData.src, formData.title);
            alert(`Video successfully added with ID: ${videoId}`);
            
            // Clear form after successful submission
            setFormData({
                src: '',
                title: ''
            });
        } catch (error) {
            alert('Failed to add video: ' + error.message);
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    return (
        <div className='bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8'>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                {/* Video URL field */}
                <div className="mb-4">
                    <label className='text-white block mb-2'>Video URL:</label>
                    <input
                        type="text"
                        name="src"
                        value={formData.src}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter video URL"
                    />
                </div>

                {/* Title field */}
                <div className="mb-4">
                    <label className='text-white block mb-2'>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter video title"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}  // Disable button while submitting
                    className={`bg-[#89BE63] text-[#1A1A1A] p-2 w-full rounded-lg cursor-pointer ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                >
                    {isSubmitting ? 'Adding video, please wait...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AddVideoComponent;

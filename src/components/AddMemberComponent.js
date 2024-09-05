import React, { useState } from 'react';
import { addMember, uploadImage, getImageUrl } from '../utils/members'; // Import Firebase functions

export const AddMemberComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        membershipStatus: 'senior',
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
                imageName: file.name, // Automatically update the imageName field
                file: file
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Step 1: Upload the image to Firebase Storage
            let uploadedImageName = '';
            let imageUrl = '';

            if (formData.file) {
                uploadedImageName = await uploadImage(formData.file); // Upload image to Firebase
                imageUrl = await getImageUrl(uploadedImageName); // Get the URL of the uploaded image
            }

            // Step 2: Add the member to Firestore with the image URL
            await addMember(formData.name, formData.description, formData.membershipStatus, imageUrl);

            // Step 3: Success message and reset form
            alert('Member successfully added!');
            setFormData({
                name: '',
                description: '',
                membershipStatus: 'senior',
                imageName: '',
                file: null
            }); // Clear form after successful submission
        } catch (error) {
            alert('Failed to add member: ' + error.message);
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    return (
        <div className='bg-[#1A1A1A] border border-[#89BE63] rounded-lg shadow-custom py-8 px-4 my-8'>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                {/* Name field */}
                <div className="mb-4">
                    <label className='text-white block mb-2'>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter name"
                    />
                </div>

                {/* Description field */}
                <div className="mb-4">
                    <label className='text-white block mb-2'>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                        placeholder="Enter description"
                    />
                </div>

                {/* Membership Status Dropdown */}
                <div className="mb-4">
                    <label className='text-white block mb-2'>Membership Status:</label>
                    <select
                        name="membershipStatus"
                        value={formData.membershipStatus}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg"
                    >
                        <option value="senior">Senior</option>
                        <option value="central">Central</option>
                        <option value="coordinating">Coordinating</option>
                        <option value="inventive">Inventive</option>
                    </select>
                </div>

                {/* Image Name (Read-only) */}
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

                {/* Image Upload */}
                <div className="mb-4">
                    <label className='text-white block mb-2'>Upload Image:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 bg-[#262626] text-white border border-[#89BE63] rounded-lg file:text-white file:border-none file:bg-[#89BE63] file:rounded-lg file:px-4 file:py-2"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}  // Disable button while submitting
                    className={`bg-[#89BE63] text-[#1A1A1A] p-2 w-full rounded-lg cursor-pointer ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                >
                    {isSubmitting ? 'Adding member, please wait...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AddMemberComponent;

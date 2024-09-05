import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from './firebaseConfig'; 

const db = getFirestore(app);
const storage = getStorage(app);

// Function to upload image to Firebase Storage
export const uploadImage = async (file) => {
  const storageRef = ref(storage, `members/${file.name}`);
  try {
    // Upload the image
    await uploadBytes(storageRef, file);
    // Return the image name
    return file.name;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Image upload failed');
  }
};

// Function to get image URL from Firebase Storage
export const getImageUrl = async (imageName) => {
  const storageRef = ref(storage, `members/${imageName}`);
  try {
    // Get the download URL
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error fetching image URL:', error);
    throw new Error('Failed to get image URL');
  }
};

// Function to add a new member to Firestore with image URL
export const addMember = async (name, description, membershipStatus, imageUrl) => {
  try {
    const docRef = await addDoc(collection(db, 'members'), {
      name: name,
      description: description,
      membershipStatus: membershipStatus,
      imageUrl: imageUrl, // Store the image URL in Firestore
    });
    console.log('Member added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding member:', error);
    throw new Error('Failed to add member');
  }
};

import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from './firebaseConfig';

const db = getFirestore(app);
const storage = getStorage(app);

// Function to upload an image to Firebase Storage
export const uploadImage = async (file) => {
    const imageRef = ref(storage, `images/${file.name}`);
    try {
        const snapshot = await uploadBytes(imageRef, file);
        return snapshot; // Returns the snapshot, which includes a reference to the uploaded file
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
};

// Function to retrieve the URL of an uploaded image from Firebase Storage
export const getImageUrl = async (imageName) => {
    const imageRef = ref(storage, `images/${imageName}`);
    try {
        const url = await getDownloadURL(imageRef);
        return url; // Returns the URL of the image
    } catch (error) {
        console.error("Error fetching image URL:", error);
        return null;
    }
};

export const addStory = async (title, description, imageName, imageUrl) => {
    const storiesRef = collection(db, "stories");
    try {
        const docRef = await addDoc(storiesRef, { title, description, imageName, imageUrl });
        return docRef.id; // Returns the new document's ID
    } catch (error) {
        console.error("Error adding new story:", error);
        return null;
    }
};

export const fetchAllStories = async () => {
    const storiesRef = collection(db, "stories");
    try {
        const querySnapshot = await getDocs(storiesRef);
        const stories = [];
        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            stories.push({
                id: doc.id,
                title: data.title,
                description: data.description,
                imageUrl: data.imageUrl // Assuming image URL is stored in the document
            });
        }
        return stories;
    } catch (error) {
        console.error("Error fetching stories:", error);
        return [];
    }
};

// Function to delete a story from Firestore given the story's ID
export const deleteStory = async (storyId) => {
    const storyRef = doc(db, "stories", storyId);
    try {
        await deleteDoc(storyRef);
        console.log("Story successfully deleted:", storyId);
        return true; // Indicates successful deletion
    } catch (error) {
        console.error("Error deleting story:", error);
        return false; // Indicates failure
    }
};

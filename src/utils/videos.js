import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

// Function to add a video to Firestore
export const addVideo = async (src, title) => {
  try {
    const docRef = await addDoc(collection(db, 'videos'), {
      src: src,
      title: title,
    });
    console.log('Video added with ID:', docRef.id);
    return docRef.id; // Returns the newly created document ID
  } catch (error) {
    console.error('Error adding video:', error);
    throw new Error('Failed to add video');
  }
};

// Function to fetch all videos from Firestore
export const fetchAllVideos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'videos'));
    const videos = [];
    querySnapshot.forEach((doc) => {
      videos.push({ id: doc.id, ...doc.data() }); // Store each video's data along with its ID
    });
    return videos; // Returns an array of video objects
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw new Error('Failed to fetch videos');
  }
};

// Function to delete a video from Firestore by its ID
export const deleteVideo = async (videoId) => {
  try {
    const videoRef = doc(db, 'videos', videoId);  // Get reference to the specific video document
    await deleteDoc(videoRef);  // Delete the document
    console.log('Video successfully deleted:', videoId);
    return true; // Returns success
  } catch (error) {
    console.error('Error deleting video:', error);
    throw new Error('Failed to delete video');
  }
};

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from './firebaseConfig';

const db = getFirestore(app);
const storage = getStorage(app);

export const getImageUrl = async (imageName) => {
    const imageRef = ref(storage, `${imageName}`);
    try {
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
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
        const imageUrl = await getImageUrl(data.imageName);
        stories.push({
          id: doc.id,
          title: data.title,
          description: data.description,
          imageUrl: imageUrl 
        });
      }
      return stories;
    } catch (error) {
      console.error("Error fetching stories:", error);
      return [];
    }
  };

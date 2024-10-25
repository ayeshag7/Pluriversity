import app from './firebaseConfig';
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs, query, where, writeBatch } from 'firebase/firestore';

const db = getFirestore(app);

// Function to add a folder
export const addFolder = async (folderName) => {
  try {
    const docRef = await addDoc(collection(db, "folders"), {
      folderName: folderName
    });
    console.log("Folder added with ID:", docRef.id);
    return docRef.id; // Returns the newly created folder ID
  } catch (error) {
    console.error("Error adding folder:", error);
    throw new Error("Failed to add folder: " + error.message);
  }
};

// Function to add a reading
export const addReading = async (title, authorName, year, folderName) => {
  try {
    const docRef = await addDoc(collection(db, "readings"), {
      title: title,
      authorName: authorName,
      year: year,
      folderName: folderName
    });
    console.log("Reading added with ID:", docRef.id);
    return docRef.id; // Returns the newly created reading ID
  } catch (error) {
    console.error("Error adding reading:", error);
    throw new Error("Failed to add reading: " + error.message);
  }
};

// Function to delete a reading given its ID
export const deleteReading = async (readingId) => {
  try {
    const readingRef = doc(db, "readings", readingId);  // Get reference to the specific reading document
    await deleteDoc(readingRef);  // Delete the document
    console.log("Reading successfully deleted:", readingId);
    return true; // Return success
  } catch (error) {
    console.error("Error deleting reading:", error);
    throw new Error("Failed to delete reading: " + error.message);
  }
};

// Function to fetch all readings
export const fetchAllReadings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "readings"));
    const readings = [];
    querySnapshot.forEach((doc) => {
      readings.push({
        id: doc.id,
        ...doc.data()
      });
    });
    console.log("Readings fetched:", readings);
    return readings;
  } catch (error) {
    console.error("Error fetching readings:", error);
    throw new Error("Failed to fetch readings: " + error.message);
  }
};

// Function to delete a folder and all associated readings
export const deleteFolderAndReadings = async (folderId, folderName) => {
    try {
      // Step 1: Delete the folder
      const folderRef = doc(db, "folders", folderId);
      await deleteDoc(folderRef);
      console.log(`Folder with ID ${folderId} deleted.`);
  
      // Step 2: Delete all readings associated with this folder
      const q = query(collection(db, "readings"), where("folderName", "==", folderName));
      const querySnapshot = await getDocs(q);
  
      const batch = writeBatch(db);  // Use writeBatch to perform batch operations
      querySnapshot.forEach((doc) => {
        const readingRef = doc.ref;
        batch.delete(readingRef);  // Add each reading deletion to the batch
      });
  
      // Commit the batch delete
      await batch.commit();
      console.log(`All readings associated with folder "${folderName}" have been deleted.`);
  
      return true; // Success
    } catch (error) {
      console.error("Error deleting folder and readings:", error);
      throw new Error("Failed to delete folder and associated readings: " + error.message);
    }
  };

// Function to fetch all folders
export const fetchAllFolders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "folders"));
      const folders = [];
      querySnapshot.forEach((doc) => {
        folders.push({ id: doc.id, ...doc.data() });
      });
      return folders;
    } catch (error) {
      console.error("Error fetching folders:", error);
      throw new Error("Failed to fetch folders: " + error.message);
    }
  };
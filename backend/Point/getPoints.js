import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import firebaseConfig from "backend/firebase/config";
import { mockPoints } from "backend/firebase/mockData";



export async function getPoints() {

  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const pointsCol = collection(db, "points");
    const pointsSnapshot = await getDocs(pointsCol);

    const points = pointsSnapshot.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return {id, ...data}
    });

    return points

  } catch (error) {
  
    console.error("ERROR!!! " + error.code);
    const points = mockPoints;
    
    return points
  }
}
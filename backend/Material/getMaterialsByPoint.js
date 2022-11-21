import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore/lite";

import firebaseConfig from "backend/firebase/config";
import { mockMaterials } from "backend/firebase/mockData";



export async function getMaterialsByPoint(pointID) {
  
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const materialsCol = collection(db, "materials");

    const q = query(materialsCol, where("points", "array-contains", pointID));
    const materialsSnapshot = await getDocs(q);
    const materials = materialsSnapshot.docs.map(doc => doc.data())
    
    return materials

  } catch (error) {
  
    console.error("ERROR!!! " + error.code);
    const materials = mockMaterials.filter((m) => m.points.includes(pointID));
    
    return materials
  }
}
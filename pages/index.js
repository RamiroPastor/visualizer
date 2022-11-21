import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

import { Viewer } from "frontend/core/Viewer/Viewer";
import firebaseConfig from "../firebase/config";
import { mockPoints, mockMaterials } from '../firebase/mockData';



export async function getServerSideProps() {

  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const pointsCol = collection(db, "points");
    const materialsCol = collection(db, "materials");
    
    const pointsSnapshot = await getDocs(pointsCol);
    // const materialsSnapshot = await getDocs(materialsCol);

    const points = pointsSnapshot.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return {id, ...data}
    });
    const pointIds = points.map(p => p.id);

    const materialsQuery = query(materialsCol, where("points", "array-contains-any", pointIds));
    const materialsSnapshot = await getDocs(materialsQuery);
    const materials = materialsSnapshot.docs.map(doc => doc.data());

    return {props: {points, materials}}

  } catch (error) {
  
    console.error("ERROR!!! " + error.code);
    const points = mockPoints;
    const materials = mockMaterials;
    
    return {props: {points, materials}}
  }
}


export default function Home (props) {

  // console.log(props.points);
  // console.log(props.materials);

  return (
    <Viewer
      points={props.points}
      materials={props.materials}
    />
  )
}

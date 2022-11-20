import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { Viewer } from "frontend/core/Viewer/Viewer";
import firebaseConfig from "../firebase/config";



export async function getServerSideProps() {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const pointsCol = collection(db, "points");
  const materialsCol = collection(db, "materials");
  
  const pointsSnapshot = await getDocs(pointsCol);
  const materialsSnapshot = await getDocs(materialsCol);

  const points = pointsSnapshot.docs.map(doc => doc.data());
  const materials = materialsSnapshot.docs.map(doc => doc.data());

  return {props: {points, materials}}
}


export default function Home (props) {

  console.log(props.points);
  console.log(props.materials);

  return (
    <Viewer
      points={props.points}
      materials={props.materials}
    />
  )
}

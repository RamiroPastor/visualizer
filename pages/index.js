import React from "react";

import { getPoints } from "backend/Point/getPoints";
import { Viewer } from "frontend/core/Viewer/Viewer";



export async function getServerSideProps() {

  const points = await getPoints();
  
  return ({ props: {points}})
}


export default function Home (props) {

  return (
    <Viewer
      points={props.points}
    />
  )
}

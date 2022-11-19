import React from "react";

import { TouchButton } from "frontend/core/TouchButton/TouchButton";



export function Viewer(props) {

  const points = props.points;

  return(
    <div className="Viewer">

      <div className="Viewer__image">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554"
        />
        { points.map((p,i) =>
          <TouchButton
            key={i}
            x={p.coordX}
            y={p.coordY}
          />
        )}
      </div>
      
    </div>
  )
}
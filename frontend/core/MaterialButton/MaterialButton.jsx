/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";

import { LayerContext } from "frontend/contexts/LayerContext";



export function MaterialButton(props) {

  const material = props.material;

  const {focusPoint, _, layers, toggleLayer} = useContext(LayerContext);
  
  const [isActive, setActive] = useState(false);


  const onClick = () => {
    toggleLayer(
      { point: focusPoint
      , material: material.name
      , image: material.layers[focusPoint]
      }
    )
  }

  useEffect(() => {
    const mat  = material.name;
    const layerIsActive = 
      layers.reduce(
        (acc, l) => acc || (l.point === focusPoint && l.material === mat), 
        false
      );
    if (layerIsActive) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [focusPoint, layers, material])


  return(
    <button 
      className="MaterialButton"
      type="button"
      onClick={onClick}
    >
      <img
        className="MaterialButton__preview"
        alt=""
        src={material.materialPreview}
      />
      { isActive &&
        <div className="MaterialButton__text">
          <strong>{material.name}</strong>
        </div>
      }
    </button>
  )
}
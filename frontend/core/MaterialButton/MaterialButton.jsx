import React, { useContext, useEffect, useState } from "react";

import { LayerContext } from "frontend/contexts/LayerContext";



export function MaterialButton(props) {

  const material = props.material;

  const {layers, toggleLayer} = useContext(LayerContext);
  
  const [isActive, setActive] = useState(false);


  const onClick = () => {
    const zone = material.points[0];
    toggleLayer(
      { zone
      , material: material.name
      , image: material.layers[zone]
      }
    )
  }

  useEffect(() => {
    const mat  = material.name;
    const zone = material.points[0];
    const layerActive = 
      layers.reduce(
        (acc, l) => acc || (l.zone === zone && l.material === mat), 
        false
      );
    if (layerActive) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [layers])


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
import React, { useState } from "react";



export const LayerContext = React.createContext([]);


export function LayerContextProvider(props){

  const [focusPoint, setFocusPoint] = useState("");
  const [layers, setLayers] = useState([]);


  function toggleLayer(layer) {

    const pointAlreadyLayered =
      layers.reduce(
        (acc, l) => acc || l.point === layer.point, 
        false
      );

    const layerAlreadyActive = 
      layers.reduce(
        (acc, l) => acc || (l.point === layer.point && l.material === layer.material), 
        false
      );
    

    if (pointAlreadyLayered) {
      const updatedLayers = layers.filter(l => l.point !== layer.point);
      if (layerAlreadyActive) {
        setLayers(updatedLayers);
      }
      else {
        setLayers([...updatedLayers, layer])
      }
    } else {
      setLayers([...layers, layer])
    }
  }


  return(
    <LayerContext.Provider
      value={
        { focusPoint
        , setFocusPoint
        , layers
        , toggleLayer
        }
      }
    >
      {props.children}
    </LayerContext.Provider>
  )
}
import React, { useState } from "react";



export const LayerContext = React.createContext([]);


export function LayerContextProvider(props){

  const [layers, setLayers] = useState([]);


  function toggleLayer(layer) {

    const zoneAlreadyLayered =
      layers.reduce(
        (acc, l) => acc || l.zone === layer.zone, 
        false
      );

    const layerAlreadyActive = 
      layers.reduce(
        (acc, l) => acc || (l.zone === layer.zone && l.material === layer.material), 
        false
      );
    

    if (zoneAlreadyLayered) {
      const updatedLayers = layers.filter(l => l.zone !== layer.zone);
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
        { layers
        , toggleLayer
        }
      }
    >
      {props.children}
    </LayerContext.Provider>
  )
}
import React from "react";



export function MaterialsMenu(props){

  const materials = props.materials;

  return(
    <div className="MaterialsMenu">
      {materials.map((m,i) => {
        <h1 key={i}>{m.name}</h1>
      })}
    </div>
  )
}
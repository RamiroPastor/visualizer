import React from "react";



export function MaterialButton(props) {

  const material = props.material;

  return(
    <button 
      className="MaterialButton"
      type="button"
    >
      <img
        className="MaterialButton__preview"
        alt=""
        src={material.materialPreview}
      />
      <div className="MaterialButton__text">
        <strong>{material.name}</strong>
      </div>
    </button>
  )
}
import React, { useState } from "react";

import { TouchButton } from "frontend/core/TouchButton/TouchButton";



export function Viewer(props) {

  const points = props.points;
  const materials = props.materials;


  const [areTouchButtonsVisible, setTouchButtonsVisible] = useState(true);
  const [isMenuActive, setMenuActive] = useState(false);
  const [menuMats, setMenuMats] = useState([]);


  function selectMaterialsByZoneName(zoneName) {
    let searchKey = "";
    switch (zoneName) {
      case "Encimera"  : searchKey = "cd84QwP9gOhAU5p47UDn"; break;
      case "Entrepaños": searchKey = "i7EVutewtycZY2qwmldG"; break;
      case "Frente"    : searchKey = "Ks5CthbPwAvd2TNxzHEl"; break;
      case "Pavimento" : searchKey = "EnRd7hAaNydVdVJ06qgF"; break;
      default: searchKey = ""
    }
    return materials.filter(m => m.points[0] === searchKey)
  }

  function touchButtonClick(zoneName) {
    setTouchButtonsVisible(false);
    setMenuActive(true);
    setMenuMats(selectMaterialsByZoneName(zoneName));
  }


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
            isVisible={areTouchButtonsVisible}
            point={p}
            onClick={() => touchButtonClick(p.name)}
          />
        )}
      </div>
      
    </div>
  )
}
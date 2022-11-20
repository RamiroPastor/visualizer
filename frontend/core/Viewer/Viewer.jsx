import React, { useContext, useState } from "react";

import { MaterialMenu } from "frontend/core/MaterialMenu/MaterialMenu";
import { TouchButton  } from "frontend/core/TouchButton/TouchButton";
import { LayerContext } from "frontend/contexts/LayerContext";



export function Viewer(props) {

  const points = props.points;
  const materials = props.materials;

  const layers = useContext(LayerContext).layers;

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
    const res = materials.filter((m) => m.points[0] === searchKey);
    return res
  }

  function touchButtonClick(zoneName) {
    setTouchButtonsVisible(false);
    setMenuActive(true);
    setMenuMats(selectMaterialsByZoneName(zoneName));
  }

  function closeMenu() {
    setMenuActive(false);
    setTouchButtonsVisible(true);
    setMenuMats([]);
  }

  console.log(layers);


  return(
    <div className="Viewer">

      <div className="Viewer__image">
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554"
        />
        { layers.map((l,i) =>
          <img
            key={i}
            className="Viewer__imageLayer"
            alt={l.material}
            src={l.image}
          />
        )}
        { points.map((p,i) =>
          <TouchButton
            key={i}
            isVisible={areTouchButtonsVisible}
            point={p}
            onClick={() => touchButtonClick(p.name)}
          />
        )}
      </div>

      { isMenuActive &&
        <MaterialMenu
          materials={menuMats}
          closeMenu={closeMenu}
        />
      }
      
    </div>
  )
}
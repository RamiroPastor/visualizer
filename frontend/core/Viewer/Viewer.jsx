/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";

import { API } from "frontend/base/js/axios";
import { MaterialMenu } from "frontend/core/MaterialMenu/MaterialMenu";
import { TouchButton  } from "frontend/core/TouchButton/TouchButton";
import { LayerContext } from "frontend/contexts/LayerContext";



export function Viewer(props) {

  const points = props.points;

  const layerContext = useContext(LayerContext);
  const setFocusPoint = layerContext.setFocusPoint;
  const layers = layerContext.layers;

  const [areTouchButtonsVisible, setTouchButtonsVisible] = useState(true);
  const [isMenuActive, setMenuActive] = useState(false);
  const [menuMats, setMenuMats] = useState([]);
  

  async function touchButtonClick(pointID) {
    setTouchButtonsVisible(false);
    setMenuActive(true);
    setFocusPoint(pointID);
    API
      .post("/materials/listByPoint", {pointID})
      .then(res => {
        setMenuMats(res.data.materials)
      })
  }

  function closeMenu() {
    setMenuActive(false);
    setTouchButtonsVisible(true);
    setMenuMats([]);
    setFocusPoint("");
  }



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
            onClick={() => touchButtonClick(p.id)}
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
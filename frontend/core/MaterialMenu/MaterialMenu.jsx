import React, { useEffect, useRef } from "react";

import { MaterialButton } from "frontend/core/MaterialButton/MaterialButton";



export function MaterialMenu(props){

  const materials = props.materials;
  const closeMenu = props.closeMenu;

  const menuRef = useRef(null);


  function handleClickOutside(e) {
    const target = e.target;
    if (menuRef.current && !menuRef.current.contains(target)) {
        closeMenu();
    }
  }

  useEffect(() => {
    const close = e => {
      const key = e.key
      if(key === "Escape"){
        closeMenu()
      }
    }
    window.addEventListener('keyup', close)
    return () => window.removeEventListener('keyup', close)
  })



  return(
    <div className="MaterialMenu" onClick={handleClickOutside}>
      <div className="MaterialMenu__menu" ref={menuRef}>
        <div className="MaterialMenu__control">
          <button 
            className="MaterialMenu__controlButton"
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>
        <div className="MaterialMenu__materials">
          {materials.map((m,i) => 
            <MaterialButton
              key={i}
              material={m}
            />
          )}
        </div>
      </div>
    </div>
  )
}
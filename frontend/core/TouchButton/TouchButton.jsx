import React from "react"

import { fingerprint } from "frontend/assets/svg/fingerprint"



export function TouchButton(props) {

  const isVisible = props.isVisible;
  const p = props.point;
  const onClick = props.onClick;

  const x = p.coordX + "%";
  const y = p.coordY + "%";
  const title = p.name;

  return(
    <>
      { isVisible &&
        <button
          className="TouchButton"
          type="button"
          title={title}
          style={{"--x": x, "--y": y}}
          onClick={onClick}
        >
          {fingerprint}
        </button>
      }
    </>
  )
}
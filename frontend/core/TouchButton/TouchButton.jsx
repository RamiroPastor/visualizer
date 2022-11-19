import React from "react"

import { fingerprint } from "frontend/assets/svg/fingerprint"



export function TouchButton(props) {

  const x = props.x + "%";
  const y = props.y + "%";

  return(
    <button
      className="TouchButton"
      type="button"
      title="click me"
      style={{"--x": x, "--y": y}}
    >
      {fingerprint}
    </button>
  )
}
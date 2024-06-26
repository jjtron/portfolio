import * as React from "react";

export default function LightingControl({onToggle}) {
    return (
        <button onClick={onToggle}>toggle</button>
    )
}
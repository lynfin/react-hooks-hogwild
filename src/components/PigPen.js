import React from "react";
import PigTile from "./PigTile";

function PigPen({ hogs }) {
  return (
    <div class="ui grid container">
      {hogs.map((hog) => (
        <PigTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default PigPen;

import React from "react";
function PigTile({ hog }) {
  const { name, image } = hog;
  return (
    <div class="pigTile ui eight wide column">
      <h3>{name}</h3>
      <img class="minPigTile" src={image} />
    </div>
  );
}

export default PigTile;

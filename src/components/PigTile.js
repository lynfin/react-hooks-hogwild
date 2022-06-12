import React, { useState } from "react";
function PigTile({ hog }) {
  const { name, image, specialty, greased, weight } = hog;
  const highestMedal = hog["highest medal achieved"];
  const [pigSelected, setPigSelected] = useState(false);

  const handlePigTileClick = () => {
    setPigSelected((pigSelected) => !pigSelected);
  };
  const curClass = pigSelected ? "maxPigTile" : "minPigTile";

  return (
    <div
      className="pigTile ui eight wide column"
      onClick={() => handlePigTileClick()}
    >
      <h3>{name}</h3>
      <img className="minPigTile" alt="pig" src={image} />
    </div>
  );
}

export default PigTile;

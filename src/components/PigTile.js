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
      className="pigTile  ui card eight wide column"
      onClick={() => handlePigTileClick()}
    >
      <h3>{name}</h3>
      <h2>Weight {weight}</h2>
      <img alt="pig" className={image} src={image} />
      <ul
        className="hoggyText"
        style={{ display: pigSelected ? "block" : "none" }}
      >
        <li>
          <em>Speciality: </em>
          {specialty}
        </li>
        <li>
          <em>Weight: </em>
          {weight} kg
        </li>
        <li>{greased ? "Greased" : "Not Greased"}</li>
        <li>
          <em>Highest Medal: </em>
          <span className="achievementText">{highestMedal}</span>
        </li>
      </ul>
    </div>
  );
}

export default PigTile;

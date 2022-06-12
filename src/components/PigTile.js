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
      className="pigTile  ui eight wide column"
      onClick={() => handlePigTileClick()}
    >
      <h3>{name}</h3>
      <img alt="pig" className={curClass} src={image} />
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
      {/* <img className="minPigTile" alt="pig" src={image} /> */}
    </div>
  );
}

export default PigTile;

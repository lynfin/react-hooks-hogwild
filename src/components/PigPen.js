import React, { useState } from "react";
function PigPen({ hogs }) {
  return (
    <div class="ui grid container">
      <div key="1" class="pigTile ui eight wide column">
        <h3>{hogs[0].name}</h3>
        <img class="minPigTile" src={hogs[0].image} />
      </div>
      <div key="2" class="pigTile  ui eight wide column">
        <h3>{hogs[1].name}</h3>
        <img class="minPigTile" src={hogs[1].image} />
      </div>
    </div>
  );
}

export default PigPen;

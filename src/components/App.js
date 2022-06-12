import React, { useState } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";
import PigFilter from "./PigFilter";
import hogs from "../porkers_data";

function App() {
  const [greasedFilter, setGreasedFilter] = useState("All");
  const [pigSort, setPigSort] = useState("Name");
  const greasedFilterOptions = ["All", "Greased", "Not Greased"];
  const sortOptions = ["Name", "Weight"];

  const handleFilterSelection = (selection) => {
    setGreasedFilter(selection);
  };

  const handleSortSelection = (selection) => {
    setPigSort(selection);
  };

  const filteredHogs = hogs.filter((hog) => {
    if (greasedFilter === "All") {
      return true;
    } else {
      return (greasedFilter === "Greased") === hog.greased;
    }
  });

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <PigFilter
          filterOptions={greasedFilterOptions}
          setFilterSelection={handleFilterSelection}
          greasedFilter={greasedFilter}
          sortOptions={sortOptions}
          pigSort={pigSort}
          setPigSort={handleSortSelection}
        />
      </div>
      <div className="sixteen wide column centered">
        <PigPen
          hogs={filteredHogs.sort((a, b) => {
            if (pigSort === "Weight") return a.weight - b.weight;
            else {
              let nameA = a.name;
              let nameB = b.name;
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            }
          })}
        />
      </div>
    </div>
  );
}

export default App;

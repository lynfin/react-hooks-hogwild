import React from "react";

const PigFilter = ({ filterOptions, setFilterSelection, greasedFilter }) => {
  const handleChange = (e) => {
    setFilterSelection(e.target.value);
  };

  return (
    <div className="filterWrapper">
      <select value={greasedFilter} onChange={handleChange}>
        {filterOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default PigFilter;

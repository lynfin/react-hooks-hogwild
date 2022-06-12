import React from "react";

const PigFilter = ({
  filterOptions,
  setFilterSelection,
  greasedFilter,
  sortOptions,
  pigSort,
  setPigSort,
}) => {
  const handleFilterChange = (e) => {
    setFilterSelection(e.target.value);
  };

  const handleSortChange = (e) => {
    setPigSort(e.target.value);
  };

  return (
    <div className="filterWrapper">
      <div className="ui menu">
        <div className="ui item">
          <label>Sort by </label>
        </div>
        <div className="ui item">
          <select
            className="ui selection dropdown"
            value={pigSort}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="ui item">
          <label>Filter</label>
        </div>
        <div className="ui item">
          <select
            className="ui selection dropdown"
            value={greasedFilter}
            onChange={handleFilterChange}
          >
            {filterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PigFilter;

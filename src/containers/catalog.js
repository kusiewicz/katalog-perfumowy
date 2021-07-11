import React, { useState } from 'react';
import { NavBar, Catalog } from '../components';

export function CatalogContainer({ price }) {
  const filters = {
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    timeOfDay: ['day', 'evening'],
  };

  const [activeFilters, setActiveFilters] = useState([]);

  // Enable/disable active filters
  const filterHandler = (filter) => {
    let newFilters = [...activeFilters];
    if (newFilters.includes(filter)) {
      newFilters = newFilters.filter((item) => item !== filter);
    } else {
      newFilters.push(filter);
    }
    setActiveFilters(newFilters);
  };

  return (
    <>
      <NavBar>
        <NavBar.FilterBarPanel>
          <NavBar.FilterGroup>
            {filters.seasons.map((item) => (
              <NavBar.FilterButton
                key={item}
                value={item}
                onClick={() => filterHandler(item)}
                active={!!activeFilters.includes(item)}
              />
            ))}
          </NavBar.FilterGroup>

          <NavBar.FilterGroup>
            {filters.timeOfDay.map((item) => (
              <NavBar.FilterButton
                key={item}
                value={item}
                onClick={() => filterHandler(item)}
                active={!!activeFilters.includes(item)}
              />
            ))}
          </NavBar.FilterGroup>
        </NavBar.FilterBarPanel>
      </NavBar>

      <Catalog>
        <Catalog.Banner>{`${price} PLN`}</Catalog.Banner>
      </Catalog>
    </>
  );
}

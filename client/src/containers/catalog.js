import React, { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavBar, PriceBanner, Perfumes } from '../components';

export function CatalogContainer({ price, sex }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [navBarVisibility, setNavBarVisibility] = useState();
  const [height, setHeight] = useState();
  const [perfumeList, setPerfumeList] = useState({});
  const ref = useRef();

  const filters = {
    seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
    timeOfDay: ['Day', 'Evening'],
  };

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

  const fetchJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  // Navbar disappearing.
  const navBarVisibilityHandler = () => {
    const scrollVertical = window.scrollY;
    if (scrollVertical > height) {
      setNavBarVisibility(true);
    } else {
      setNavBarVisibility(false);
    }
  };

  // Checks if the perfume element matches the currently enabled filters/categories.
  const filterElements = (perfumeEl) => {
    let status = 'true';
    activeFilters.forEach((filter) => {
      if (!perfumeEl.season.includes(filter)) {
        status = 'false';
      }
    });
    if (status === 'true' && perfumeEl.sex === sex && perfumeEl.category === price) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetchJSON('http://127.0.0.1:8887/x.json')
      .then((data) => setPerfumeList([...Object.values(data)])) // removing unnecessary keys from the object
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, [ref]);

  useEffect(() => {
    window.addEventListener('scroll', navBarVisibilityHandler);
    return () => {
      window.removeEventListener('scroll', navBarVisibilityHandler);
    };
  });

  const PerfumesContent = () => (
    <>
      <Perfumes>
        {perfumeList
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .map(
            (value) =>
              filterElements(value) && (
                <Perfumes.Perfume key={uuidv4()}>
                  <Perfumes.Name>{value.name}</Perfumes.Name>
                  <Perfumes.Brand>{value.brand}</Perfumes.Brand>
                  <Perfumes.FilterWrapper>
                    <Perfumes.Filter>
                      {value.season.map((filter) => (
                        <Perfumes.FilterIcon season={filter} key={uuidv4()} />
                      ))}
                    </Perfumes.Filter>
                    <Perfumes.Filter>
                      {value.timeOfDay.map((filter) => (
                        <Perfumes.FilterIcon season={filter} key={uuidv4()} />
                      ))}
                    </Perfumes.Filter>
                  </Perfumes.FilterWrapper>
                  <Perfumes.Image src={value.img} />
                  <Perfumes.Description>{value.description1}</Perfumes.Description>
                  <Perfumes.Description>{value.description2}</Perfumes.Description>
                  <Perfumes.Link href={value.parfumo}>Parfumo</Perfumes.Link>
                  <Perfumes.Link href={value.fragrantica}>Fragrantica</Perfumes.Link>
                </Perfumes.Perfume>
              )
          )}
      </Perfumes>
    </>
  );

  return (
    <>
      <NavBar>
        {/* <NavBar.BackButton /> */}
        <NavBar.FilterBarPanel ref={ref} invisible={navBarVisibility}>
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
      <PriceBanner>
        <PriceBanner.Text invisible={navBarVisibility}>{`${price} PLN`}</PriceBanner.Text>
      </PriceBanner>
      {perfumeList.length > 1 && <PerfumesContent />}
    </>
  );
}

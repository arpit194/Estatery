import React, { useState } from "react";
import Button from "../components/Button";
import Property from "../components/Property";
import Select from "../components/Select";
import getFilteredData, { dummyData } from "../utils/dummyData";
import classes from "./Rent.module.css";

const Rent = () => {
  const [filters, setFilters] = useState({
    state: "New York",
    price: "$0-$3000",
    type: "Residential",
  });

  const [favourites, setFavourites] = useState([]);

  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.heading}>
          {showFavourites
            ? "Favourite Properties"
            : "Search properties to rent"}
        </div>
        {!showFavourites && (
          <input
            className={classes.search}
            placeholder="Search using Search Bar"
          />
        )}
        <div
          onClick={() => {
            setShowFavourites(!showFavourites);
          }}
        >
          <Button type={showFavourites ? "light" : "dark"} padding="10px">
            {showFavourites ? "Hide" : "Show"} Favourites
          </Button>
        </div>
      </div>
      {showFavourites && (
        <div className={classes.properties}>
          {favourites.length === 0 && (
            <div>No favourite properties to display</div>
          )}
          {dummyData
            .filter((p) => favourites.includes(p.id))
            .map((property) => {
              return (
                <Property
                  property={property}
                  key={property.id}
                  setFavourites={setFavourites}
                  favourites={favourites}
                />
              );
            })}
        </div>
      )}
      {!showFavourites && (
        <>
          <div className={classes.filters}>
            <div className={classes.filter}>
              <div className={classes.filterTitle}>Location</div>
              <Select
                options={["New York", "California"]}
                setFilters={setFilters}
                filterType="state"
              />
            </div>
            <div className={classes.filter}>
              <div className={classes.filterTitle}>When</div>
              <input type="date" className={classes.filterSelect} />
            </div>
            <div className={classes.filter}>
              <div className={classes.filterTitle}>Price</div>
              <Select
                options={["$0-$3000", "$3000-$4500"]}
                setFilters={setFilters}
                filterType="price"
              />
            </div>
            <div className={classes.filter}>
              <div className={classes.filterTitle}>Property Type</div>
              <Select
                options={["Residential", "Commercial"]}
                setFilters={setFilters}
                filterType="type"
              />
            </div>
            <Button type="dark" padding="10px 20px">
              Search
            </Button>
          </div>
          <div className={classes.properties}>
            {!showFavourites && getFilteredData(filters).length === 0 && (
              <div>No properties to display</div>
            )}
            {!showFavourites &&
              getFilteredData(filters).map((property) => {
                return (
                  <Property
                    property={property}
                    key={property.id}
                    setFavourites={setFavourites}
                    favourites={favourites}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Rent;

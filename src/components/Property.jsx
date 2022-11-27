import React from "react";
import classes from "./Property.module.css";
import { FiHeart } from "react-icons/fi";
import { BiBed, BiArea } from "react-icons/bi";
import { FaShower } from "react-icons/fa";

const Property = ({ property, setFavourites, favourites }) => {
  const { id, image, price, address, beds, bathroom, name, area, tag, type } =
    property;

  const selectFavourite = () => {
    if (favourites.includes(id)) {
      setFavourites((fav) => fav.filter((favId) => favId != id));
    } else {
      setFavourites((fav) => [...fav, id]);
    }
  };

  return (
    <div className={classes.property}>
      <div className={classes.propertyImage}>
        <img src={image} />
      </div>
      <div
        className={classes.propertyTag}
        style={{
          background:
            tag === "Hot" ? "var(--red)" : tag === "New" && "var(--green)",
        }}
      >
        {tag}
      </div>
      <div className={classes.propertyType}>{type}</div>
      <div className={classes.propertyDetails}>
        <div className={classes.propertyTop}>
          <div className={classes.propertyPrice}>
            ${price}
            <span className={classes.propertyDuration}>/month</span>
          </div>
          <FiHeart
            className={`${classes.favouriteIcon} ${
              favourites?.includes(id) && classes.favourite
            }`}
            onClick={selectFavourite}
          />
        </div>
        <div className={classes.propertyMiddle}>
          <div className={classes.propertyName}>{name}</div>
          <div className={classes.propertyAddress}>{address}</div>
        </div>
        <div className={classes.propertyBottom}>
          <div className={classes.propertyNumbers}>
            <BiBed />
            &nbsp;
            {beds} beds
          </div>
          <div className={classes.propertyNumbers}>
            <FaShower />
            &nbsp;
            {bathroom} bathrooms
          </div>
          <div className={classes.propertyNumbers}>
            <BiArea />
            &nbsp;
            {area} m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

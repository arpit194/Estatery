import React from "react";
import Button from "./Button";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.brand}>Estatery</div>
      <div className={classes.navLinks}>
        <div className={classes.navLink}>Rent</div>
        <div className={classes.navLink}>Buy</div>
        <div className={classes.navLink}>Sell</div>
        <select className={classes.navLink}>
          <option>Manage Property</option>
        </select>
        <select className={classes.navLink}>
          <option>Resources</option>
        </select>
      </div>
      <div className={classes.navButtons}>
        <Button type="light" padding="5px 20px">
          Login
        </Button>
        <Button type="dark" padding="5px 20px">
          Sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;

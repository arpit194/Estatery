import React, { useState } from "react";
import classes from "./Select.module.css";
import { BiChevronDown } from "react-icons/bi";

const Select = ({ options, setFilters, filterType }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const selectOption = (e) => {
    setSelected(e.target.innerHTML);
    setFilters((filters) => {
      return { ...filters, [filterType]: e.target.innerHTML };
    });
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.selectValue}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {selected}
      </div>
      <BiChevronDown
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <div className={classes.options}>
          {options.map((option, index) => (
            <div key={index} className={classes.option} onClick={selectOption}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

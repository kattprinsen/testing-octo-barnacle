import React from 'react';
import './DropDown.css';

const DropDown = ({ title, header, item }) => {

  return (
    <div className="DropDownContainer">
      <div className="DropDownHeader">{header}</div>
      <div className="DropDownListContainer">
        <ul className="DropDownList">
          <li className="DropDownListItem">{item}</li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;

import React, { useState } from 'react';
import './DropDown.css';

const DropDown = ({ title, header, items }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClick = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  }

  return (
    <div className="DropDownContainer">
      <div className="DropDownHeader" onClick={toggling}>
      {selectedOption || `${header}`}
      </div>
      {isOpen && (
        <div className="DropDownListContainer">
          <ul className="DropDownList">
          {items.map(item => (
            <li className="DropDownListItem" onClick={onOptionClick(item)} key={Math.random()}>
              {item}
            </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;

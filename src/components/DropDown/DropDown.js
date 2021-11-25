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
    <div className="dropdown-container">
      <span className="dropdown-title"> {title} </span>
      <div className="dropdown-header" onClick={toggling}>
      {selectedOption || `${header}`}
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
          {items.map(item => (
            <li className="dropdown-list-item" onClick={onOptionClick(item)} key={Math.random()}>
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

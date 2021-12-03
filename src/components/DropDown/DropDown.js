import React, { useState } from 'react';
import './DropDown.css';

const DropDown = ({ title, header, items, setClicked }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClick = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setClicked(value);
  }

  return (
    <div className="dropdown-container">
      <span className="dropdown-title" data-testid="title-id"> {title} </span>
      <div className="dropdown-header" onClick={toggling} data-testid="header-id">
      {selectedOption || `${header}`}
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
          {items && items.map(item => (
            <li className="dropdown-list-item" data-testid="item-id" onClick={onOptionClick(item)} key={Math.random()}>
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

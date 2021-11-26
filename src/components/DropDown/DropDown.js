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
      <span className="dropdown-title" data-testid="title-id" value={title}> {title} </span>
      <div className="dropdown-header" onClick={toggling} data-testid="header-id" value={header}>
      {selectedOption || `${header}`}
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
          {items && items.map((index, item) => (
            <li className="dropdown-list-item" data-testid="item-id" onClick={onOptionClick(item)} key={Math.random()} value={item}>
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

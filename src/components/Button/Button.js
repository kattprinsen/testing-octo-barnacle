import React from 'react';
import './Button.css';

const Button = ({ countries, flows, nodes }) => {

  const handleClick = () => {
    console.log('countries', countries);
  }

  return (
    <div className="btn-container" onClick={handleClick}>
    {countries}
    </div>
  );
}

export default Button;

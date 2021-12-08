import React from 'react';
import './Button.css';

const Button = ({ country }) => {

  return (
    <div className="btn-container">
    {country || 'Spara'}
    </div>
  );
}

export default Button;

// import React, { useState } from 'react';
import './Unlike.css';

const Unlike = ({ initialUnlikes = 0, isActive, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button 
      className={`unlike-button ${isActive ? 'unliked' : ''}`}
      onClick={handleClick}
    >
      <i className="fas fa-thumbs-down unlike-icon" />
      <span className="unlike-text">
        {isActive ? '👎' : '👎'}
      </span>
      <span className="unlike-count">
        {initialUnlikes}
      </span>
    </button>
  );
};

export default Unlike;
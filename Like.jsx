// import React, { useState } from 'react';
import './Like.css';

const Like = ({ initialLikes = 0, isActive, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button 
      className={`like-button ${isActive ? 'liked' : ''}`}
      onClick={handleClick}
    >
      <i className="fas fa-thumbs-up like-icon" />
      <span className="like-text">
        {isActive ? '❤️' : '❤️'}
      </span>
      <span className="like-count">
        {initialLikes}
      </span>
    </button>
  );
};

export default Like;
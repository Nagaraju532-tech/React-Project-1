import React, { useState } from 'react';
import Like from './Like';
import Unlike from './Unlike';

const LikeUnlikeContainer = () => {
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [unlikesCount, setUnlikesCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      // If already liked, unlike it
      setLikesCount(likesCount - 1);
      setLiked(false);
    } else {
      // If not liked, like it
      setLikesCount(likesCount + 1);
      setLiked(true);
      
      // If unlike is active, deactivate it
      if (unliked) {
        setUnlikesCount(unlikesCount - 1);
        setUnliked(false);
      }
    }
  };

  const handleUnlike = () => {
    if (unliked) {
      // If already unliked, remove unlike
      setUnlikesCount(unlikesCount - 1);
      setUnliked(false);
    } else {
      // If not unliked, unlike it
      setUnlikesCount(unlikesCount + 1);
      setUnliked(true);
      
      // If like is active, deactivate it
      if (liked) {
        setLikesCount(likesCount - 1);
        setLiked(false);
      }
    }
  };

  return (
    <div style={{ 
        display: 'flex', 
        gap: '90px', 
        justifyContent: 'center', 
        marginBottom: '10px'
        }}>
      <Unlike 
        initialUnlikes={unlikesCount} 
        isActive={unliked}
        onClick={handleUnlike}
      />
      <Like 
        initialLikes={likesCount} 
        isActive={liked}
        onClick={handleLike}
      />
    </div>
  );
};

export default LikeUnlikeContainer;
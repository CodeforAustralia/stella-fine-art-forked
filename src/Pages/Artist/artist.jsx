import React from 'react';
import ArtistMessage from '../../Helpers/Artist/artist.jsx';
import './artist.css';

const Artist = () => {
  return (
    <div>
      <div className="stellaimg">{ArtistMessage}</div>
    </div>
  );
};

export default Artist;

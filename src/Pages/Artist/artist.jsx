import React from 'react';
import ArtistMessage from '../../Helpers/AboutArtist/artist.jsx';
import './artist.css';

const Artist = () => {
  return (
    <div>
      <div className="stellaimg">{ArtistMessage}</div>
    </div>
  );
};

export default Artist;

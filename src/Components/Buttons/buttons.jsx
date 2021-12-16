import React from 'react';

// Next and previous buttons
function Buttons({ plusSlides }) {
  return (
    <>
      <button className="prev" value="-1" onClick={plusSlides}>
        ◀︎
      </button>
      <button className="next" value="1" onClick={plusSlides}>
        ►
      </button>
    </>
  );
}

export default Buttons;

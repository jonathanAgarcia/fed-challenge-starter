import React, { useState } from 'react';

function SingleCard({oneItem}) {

  // Line 7 is my unfinished attempted at making the cards clickable with an animation

  // const [selected, setSelected] = useState(false)

  return (
    <div className='singleCard' onClick={() => alert(`you selected ${oneItem.description}`)}>
      <img className='mainPicture' src={oneItem.mainPic} alt={oneItem.description}/>
      <div className='bottomOfCard'>
      <h6 className='description'>
      {oneItem.description}
      </h6>
      <img className='trainerPicture' src={oneItem.trainerPic} alt={oneItem.description}/>
      </div>
    </div>
  );
}

export default SingleCard;
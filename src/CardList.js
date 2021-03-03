import React from 'react';
import SingleCard from './SingleCard.js';

function CardList({testData}) {
  return (
    <div>
      <div className='cardList'>
        {testData.map((singleItem) => {

          return (
            <SingleCard oneItem={singleItem}/>
          )

        })}
      </div>
    </div>
  );
}

export default CardList;
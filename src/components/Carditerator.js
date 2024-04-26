// CardList.js

import React from 'react';
import Cardcomponent from './Cardcomponent';
import data from './data'; 
import data1 from './data1';

function Carditerator() {
    
  return (
    
    <div className="row" >
        <p>Spring Courses</p>
      {data.map((card) => (
        <div key={card.id} className="col-sm-4">
          <Cardcomponent
            id = {card.id}
            title={card.title}
            description={card.description}
            
          />
        </div>
        
        
      ))}
&ensp;&ensp;
<p>Fall Courses</p>
      {data1.map((card) => (
        <div key={card.id} className="col-sm-4">
          <Cardcomponent
            id = {card.id}
            title={card.title}
            description={card.description}
            
          />
        </div>
        
        
      ))}
     
    </div>
  
  );
}

export default Carditerator;

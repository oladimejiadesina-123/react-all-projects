import React from 'react';
import Carousel from './Carousel';
import Retrac from './Retrac';
import TopNav from './TopNav';


function TotalBuild() {
    return (
        <div>
          <Retrac/>  
          <TopNav/>
          <Carousel/>
        </div>
    )
}

export default TotalBuild

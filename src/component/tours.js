import React from 'react'
import Tour from './tour';
const tours =  ({tours}) => {
  return (
    <div>
     <h1>Our Tours</h1>
    <hr></hr>

    <div>
    {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}/>;
        })}
    </div>
    </div>
  )
}

export default tours
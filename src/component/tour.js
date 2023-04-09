import React, { useState } from 'react'


const Tour = ({id,name,info ,image,price}) => {
  const [readMore, setreadMore]= useState(false)
  return (
    <div>
   <div className='image'>
    <img src={image} alt={name} />
   </div>
   <footer>
    <h4>{name}</h4>
    <h4>${price}</h4>
   <p>
    {readMore ? info: `${info.substring(0,200)}...`}
    <button onClick={() => setreadMore(!readMore)}> {readMore ? 'show less' : 'show more' }</button>
   </p>
   <div>
    <button>Not interested</button>
   </div>
   </footer>
   </div>
  )
}

export default Tour
import React from 'react'
import '../common/card.css'
const card = (props) => {
  return <div className='card'>
    <img src={props.img} alt="card" className='img mt-2'/>
    <h3 className='mt-3'>{props.h3 || 'Default Title'}</h3>
      <p className='mt-1'>{props.p || 'Default Description'}</p>
  </div>
}

export default card
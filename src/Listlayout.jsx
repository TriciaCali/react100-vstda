import React from 'react';

export default props => (
  <div className='well '>
    <h4 className= {props.priority} >{ props.description }</h4>
  </div>
);

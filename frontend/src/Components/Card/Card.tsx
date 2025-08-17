import React from 'react';
import "./Card.css";

type Props = {};

const Card = (props: Props) => {
  return <div className="card"> 
   <div className='details'>
    <h2>AAPL</h2>
    <p>$110</p>
   </div>
   <p className='infon'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perferendis, reiciendis tempore, commodi, debitis natus dolor repudiandae possimus facilis error neque est rerum quisquam iusto? Ut deserunt impedit eveniet pariatur.</p>
   </div>;

};

export default Card

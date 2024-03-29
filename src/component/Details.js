import React from 'react';
import { topic } from './data';
import '../css/Details.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Details = ({ array, ind }) => {
return (
    <div className="details-container">
      <h1 className="details-heading">{topic[ind]}</h1>
      <ol className="details-list" type="1">
        {array.map((text, index) => (
          <li key={index} className="details-list-item">
            <p className="details-text">{text}</p>
          </li>
        ))}
      </ol>
      <Link to="/"><button className='button'>Back</button></Link>
    </div>
  );
};

export default Details;
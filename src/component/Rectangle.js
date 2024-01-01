import React from 'react';
import {Link } from "react-router-dom";
import '../css/Rectangle.css'

export function Rectangle({ id, text }) {
  return (

    <Link to={{ pathname: `/details/${id}`, state: { itemId: id } }}>
      <div className="rectangle">
        {text}
      </div>
      </Link>

  );
}

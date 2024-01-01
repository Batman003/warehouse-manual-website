import React from 'react';
import { Rectangle } from '../component/Rectangle';
import { topic } from './data';
import '../css/Body.css'


export function Body() {

  const generateRectangles = () => {
    return topic.map((text, index) => (
      <Rectangle key={index + 1} id={index + 1} text={text} />
    ));
  };

  return (
    <main className="main">
      <div className="grid">{generateRectangles()}</div>
    </main>
  );
}

import React from 'react';
import { Rectangle } from '../component/Rectangle';
import '../css/Body.css'
import { useTranslation } from 'react-i18next';

export function Body() {

  const [t] = useTranslation("global");
  const topic = t("body", { returnObjects: true });
  

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

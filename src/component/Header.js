import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <h1>Fareye Manual & Daily Operations SOP</h1>
      <Link to="/takeTest"><button className="take-test-button">Take Test</button></Link>
    </header>
  );
}

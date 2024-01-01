import React from 'react';
import '../css/Header.css';

export function Header() {
  return (
    <header className="header">
      <h1>Fareye Manual & Daily Operations SOP</h1>
      <a href="/take-test" className="take-test-button">Take Test</a>
    </header>
  );
}

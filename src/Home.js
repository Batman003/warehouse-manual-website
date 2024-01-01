import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Body } from './component/Body';

export function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

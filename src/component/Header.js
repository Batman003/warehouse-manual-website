import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {

  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="header">
      <h1>{t("header.heading")}</h1>
      <div className="language-dropdown-container">
        <select className="language-dropdown" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <Link to="/takeTest"><button className="take-test-button">Take Test</button></Link>
    </header>
  );
}

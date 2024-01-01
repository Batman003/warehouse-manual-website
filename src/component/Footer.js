import React from 'react';
import '../css/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Developed by Sadik Shaikh</p>
      <div>
       <a href="/privacy" class="disabled">Privacy Policy</a> | <a href="/terms" class="disabled">Terms of Service</a> | <a href="/contact" class="disabled">Contact Us</a>
     </div>
    </footer>
  );
}

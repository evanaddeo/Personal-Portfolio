import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><a href="Intro">Intro</a></li>
          <li><a href="Experience">Education</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Skills">Skills</a></li>
          <li><a href="About Me">About Me</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
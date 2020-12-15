import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Minsu Park</h2>
        <p><a href="mailto:minsu.park@nyu.edu">minsu.park@nyu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Minsu. I like doing research on cultural consumption and social networks.
         I am an Assistant Professor of Social Research and Public Policy at <a href="https://nyuad.nyu.edu/en/">NYU Abu Dhabi</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== '/resume' ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; This page is adapted from <a href="https://github.com/mldangelo/personal-site">Michael D&apos;Angelo's repo</a>.</p>
    </section>
  </section>
);

export default Nav;

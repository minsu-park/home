import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
            <p> Welcome to my website. Here, I mainly share my up-to-date CV, including much details of my academic activities.
            Please feel free to read more <Link to="/about">about me</Link>,
            check out my {' '}
            <Link to="/resume">resume</Link>,
            {' '}
            <Link to="/publications">publications</Link>,
            and {' '}
            <Link to="/projects">projects</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
            </p>
        </div>
      </header>
      
    </article>
  </Main>
);

export default Index;

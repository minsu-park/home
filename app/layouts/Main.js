import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

//import ReactGA from 'react-ga';
import ReactGA from 'react-ga4';

import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

if (process.env.NODE_ENV === 'production') {
  //ReactGA.initialize('UA-134171050-1');
  ReactGA.initialize('G-DBXWW2CFTG');
}

class Main extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.set({
        page: window.location.pathname,
      });
      //ReactGA.pageview(window.location.pathname);
      ReactGA.send("pageview")
    }
  }

  render() {
    return (
      <div id="wrapper">
        <Helmet titleTemplate="%s | Minsu Park" defaultTitle="Minsu Park" />
        <Header />
        <div id="main">
          {this.props.children}
        <\/div>
        {!this.props.fullPage && <Nav />}
      <\/div>);
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;

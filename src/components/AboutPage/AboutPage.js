import React from 'react';
import { Link } from 'react-router-dom';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <div className="header">About</div>
      <div className="text">
        This example app is part of the{' '}
        <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot starter kit</a>.{' '}
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </div>
    </div>
  );
};

export default AboutPage;

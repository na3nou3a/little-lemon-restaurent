import React from 'react';
import marioAndAdrianA from '../../../images/Mario_and_Adrian_A.jpg';
import marioAndAdrianB from '../../../images/Mario_and_Adrian_B.jpg';
import './chicago.css';

function About() {
  return (
    <section className="about">
      <div className="content max-width">
        <div className="left">
          <header className="header">
            <h2 className="title">little lemon</h2>
            <h3 className="sub-title">chicago</h3>
          </header>
          <p className="text">
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United
            States to pursue their shared dream of owning a restaurant.
          </p>
          <p className="text">
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
            Adrian does all the marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>
        <div className="right">
          <img className="about-img-1" src={marioAndAdrianA} alt="restaurant foundators" />
          <img className="about-img-2" src={marioAndAdrianB} alt="restaurant foundators" />
        </div>
      </div>
    </section>
  );
}

export default About;

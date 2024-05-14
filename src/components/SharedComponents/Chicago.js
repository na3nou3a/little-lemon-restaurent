import React from 'react';
import marioAndAdrianA from '../../images/Mario_and_Adrian_A.jpg';
import marioAndAdrianB from '../../images/Mario_and_Adrian_B.jpg';

function About() {
  return (
    <section className="about">
      <div className="section-content max-width">
        <div className="about_left">
          <header className="section-header">
            <h1 className="title">little lemon</h1>
            <h2 className="sub-title">chicago</h2>
          </header>
          <p className="lead-text text-light">
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United
            States to pursue their shared dream of owning a restaurant.
          </p>
          <p className="lead-text text-light">
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
            Adrian does all the marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>
        <div className="about_right">
          <img
            className="about_img about_img-1"
            src={marioAndAdrianA}
            alt="restaurant foundators"
          />
          <img
            className="about_img about_img-2"
            src={marioAndAdrianB}
            alt="restaurant foundators"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

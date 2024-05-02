import React from "react";
import aboutImg from "../Assets/img/about img 4.png";
function About() {
  return (
    <>
      <div className="about-page" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
            >
              <img src={aboutImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="about-content pt-4">
                <h1>
                  let's <br /> introduce about <br /> myself
                </h1>
                <p>
                  Whose given. Were gathered. There first subdue greater.
                  Bearing you Whales heaven midst their. Beast creepeth. Fish
                  days.
                </p>
                <p>
                  Is give may shall likeness made yielding spirit a itself
                  together created after sea is in beast beginning signs open
                  god you're gathering whose gathered cattle let. Creature
                  whales fruit unto meat the life beginning all in under give
                  two.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

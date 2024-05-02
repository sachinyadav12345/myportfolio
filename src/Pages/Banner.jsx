import { Button } from "@mui/material";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import bannerImg from '../Assets/img/banner-img-hero.svg'
function Banner() {
  return (
    <>
      <div className="banner-show">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 banner-content">
              <h3>Hello !</h3>
              <h2> I am  Sachin Yaduwanshi</h2>
              <h1 className="headline-content">
             
                <TypewriterComponent
                  options={{
                    strings: ["Web Developer", ""],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
             
              <Button href="https://drive.google.com/file/d/1Ds8_rmIPF9XeA2-lOMStGd3-i60L-B2Q/view?usp=sharing"  target="_blank"
               className="banner-btn">
                DOWNLOAD CV
              </Button>
            </div>
            <div className="col-sm-6">
              <div className="banner-img">

              <img src={bannerImg} alt="" className="img-fluid animated" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

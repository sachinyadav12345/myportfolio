import React from "react";
import ShopImg from "../Assets/img/S-shop.png";
function Project() {
  return (
    <div className="project">
      <div className="container">
        <div className="project-heading">
          <h2>Projects</h2>
          <h3 className="sub-heading-project">
            Created using HTML, CSS, BOOTSTRAP, JAVASCRIPT AND REACT JS
          </h3>
        </div>
        <div className="row mt-4 mb-5 project-content">
          <div className="col-sm-4">
            <div className="project-left">
              <a
                href="https://chipper-druid-f4e488.netlify.app"
                target="_blank"
              >
                <img src={ShopImg} alt="" className="img-fluid project-image" />
              </a>
            </div>
          </div>
          <div className="col-sm-8 project-right">
            <a href="https://chipper-druid-f4e488.netlify.app" target="_blank">
              <h3>S-SHOP </h3>
            </a>
            <p className="mt-3 mb-0">
              I've engineered a comprehensive e-commerce website leveraging
              HTML, CSS, Bootstrap, JavaScript, and ReactJS. This dynamic
              platform offers a seamless shopping experience, featuring
              essential functionalities such as adding and removing items from
              the cart, detailed product views, and category-specific pages.
            </p>

            <a
              href="#sShoppara"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sShoppara"
            >
              Read More...
            </a>

            <div class="collapse" id="sShoppara">
              <div>
                Additionally, it seamlessly integrates with APIs to fetch data,
                ensuring real-time updates and enhanced user experiences.
                Moreover, the project is fully responsive, ensuring optimal
                performance across various screen sizes, including mobile
                devices, for an unparalleled shopping experience on the go.
              </div>
            </div>
            <br />
              <span>
             <strong>View Project : </strong>  
                <a className="viewProject" href="https://chipper-druid-f4e488.netlify.app">https://chipper-druid-f4e488.netlify.app</a>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

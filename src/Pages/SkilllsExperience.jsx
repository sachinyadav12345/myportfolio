import React, { useState } from "react";
import "animate.css";

function SkilllsExperience() {
  const [selectedTab, setSelectedTab] = useState("Experience");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="skills-experience" id="Skill-Experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="skills-heading text-start ">
                <h1>Skills & Experience </h1>
                <p>
                  As a frontend developer, I specialize in HTML, CSS,
                  JavaScript, React.js, Bootstrap, and responsive design. I
                  create visually appealing and user-friendly interfaces,
                  ensuring seamless functionality across all devices.
                </p>
              </div>
              <div className="skills-show text-start">
                <h3>My Skills</h3>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <div class="d-flex justify-content-between mt-3">
                      <h6 class="fw-bold">HTML</h6>
                      <h6 class="fw-bold">78%</h6>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        id="react-progress"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                      <h6 class="fw-bold">CSS</h6>
                      <h6 class="fw-bold">70%</h6>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        id="react-progress"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                      <h6 class="fw-bold">JAVASCRIPT</h6>
                      <h6 class="fw-bold">65%</h6>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-info"
                        id="react-progress"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="fw-bold">React</h6>
                      <h6 class="fw-bold">65%</h6>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-warning"
                        id="react-progress"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                      <h6 class="fw-bold">Bootstrap</h6>
                      <h6 class="fw-bold">75%</h6>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-danger"
                        id="react-progress"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                      <h6 class="fw-bold">MUI</h6>
                      <h6 class="fw-bold">65%</h6>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-secondary"
                        id="react-progress"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 experience-education">
              <ul className="nav nav-pills rounded border border-2 border-colour mb-5">
                <li className="nav-item w-50">
                  <button
                    className={`nav-link w-100 py-3 fs-5 ${
                      selectedTab === "Experience"
                        ? "experience-education-colour"
                        : ""
                    }`}
                    onClick={() => handleTabChange("Experience")}
                  >
                    Experience
                  </button>
                </li>
                <li className="nav-item w-50">
                  <button
                    className={`nav-link w-100 py-3 fs-5 ${
                      selectedTab === "Education"
                        ? "experience-education-colour"
                        : " "
                    }`}
                    onClick={() => {
                      handleTabChange("Education");
                    }}
                  >
                    Education
                  </button>
                </li>
              </ul>
              {/*  show selected tab experience */}
              {selectedTab === "Experience" && (
                <div className="tab-content">
                  <div className="row">
                    <div className="col-md-12 text-start experience-content">
                      <h5>
                        React Js Developer &nbsp; | &nbsp; Zeweesoft LLP Indore
                        &nbsp; | &nbsp; Dec 2022 - Dec 2023{" "}
                      </h5>
                      <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam, voluptate sint necessitatibus nihil quia
                        adipisci?
                      </h6>
                      <p>
                        Developed dynamic web applications using React.js at
                        ZeeweeSoft LLP. Translated designs into responsive
                        interfaces, collaborated with teams, and optimized
                        performance
                      </p>
                      <p>
                        Contributed to "Satyam Spinners," a project focused on
                        comprehensive record maintenance and listing
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "Education" && (
                <div className="tab-content text-start">
                  <h5>
                    Makhanlal Chaturvedi National University of Journalism and
                    Communication, BHOPAL
                  </h5>
                  <h6>Bachelor’s of compute application (BCA)</h6>

                  <h5>Swami Dayanand Sarswati A.H.S.SCHOOL SEONI MALWA</h5>
                  <h6>12th ( MP BOARD BHOPAL )</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkilllsExperience;

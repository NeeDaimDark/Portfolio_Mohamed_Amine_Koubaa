import React from "react";
import Collapsible from "react-collapsible";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Work Experience</h4>
          </div>

          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">03/2024 – 09/2024</span>
              <h6>Game Developer</h6>
              <p>KnK Studios, Tunisia</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Developed "Dice-Driven Journey," a multiplayer game with mechanics like dice rolling, attacks, and
                    village upgrades.
                    <br/> Built server-side functionality using Node.js and MongoDB for real-time player management.
                    <br/> Optimized game performance using Unity Profiler.
                  </p>
                </Collapsible>
              </div>
            </li>
            <li>
              <span className="theme-bg">2021 – 2022</span>
              <h6>Embedded Systems Intern</h6>
              <p>AMA Business, Tunisia</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Designed and developed an acquisition card with MODBUS protocol for industrial monitoring systems.
                  </p>
                </Collapsible>
              </div>
            </li>
            <li>
              <span className="theme-bg">2020 – 2021</span>
              <h6>Embedded Systems Intern</h6>
              <p>Dida Mind, Tunisia</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Designed a water management system using TTGO T-call and developed a linked web application.
                    <br/> Designed and 3D-printed the system's enclosure using Solidworks.
                  </p>
                </Collapsible>
              </div>
            </li>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2017-2022</span>
              <h6>Software Engineering degree</h6>
              <p>
                <a className="university-link" href="https://www.esprit.tn" target="_blank" rel="noreferrer">
                  ESPRIT, Tunisia
                </a>
              </p>

            </li>
            <li>
              <span className="dark-bg">2021 – 2024</span>
              <h6>Bachelor's in Applied Computer Science speciality Embedded Systems</h6>
              <p>
                <a className="university-link" href="http://www.istic.rnu.tn/fr/" target="_blank" rel="noreferrer">
                  ISTIC, Borj Cedria, Tunisia
                </a>
              </p>
            </li>
            <li>
              <span className="dark-bg">2013 – 2017</span>
              <h6>A-level in Mathematics</h6>
              <p>Dar Chaaben El Fehri High School, Tunisia</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">Skills</h4>
          <div className="skill-lt">
            <h6>Unity Engine</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "95%"}}>
                <span>75%</span>
              </div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>Node.js</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "90%"}}>
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>MongoDB</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "90%"}}>
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>Flutter</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "60%"}}>
                <span>60%</span>
              </div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>Unreal Engine</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "40%"}}>
                <span>40%</span>
              </div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>ReactJS</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "85%"}}>
                <span>50%</span>
              </div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>Scrum Agile</h6>
            <div className="skill-bar">
              <div className="skill-bar-in theme-bg" style={{width: "85%"}}>
                <span>85%</span>
              </div>
            </div>
          </div>
          </div>

        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;

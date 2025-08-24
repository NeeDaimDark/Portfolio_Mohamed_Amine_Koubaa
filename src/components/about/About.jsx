import React from "react";
import pdf from "../../amine_Resume.pdf";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img
              src={process.env.PUBLIC_URL + "/img/about/about.png"}
              alt="About"
            />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h5>Mohamed Amine Koubaa</h5>
            <h3>
              Software Engineer and{" "}
              <span className="color-theme">
                FullStack Developer (Mobile Application / Web )
              </span>
            </h3>
            <p>
              I specialize in cross-platform mobile app development, backend
              solutions, video games development, and creating efficient ,
              scalable systems.
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Age</label>
                  <p>27 Years</p>
                </div>
                <div className="media">
                  <label>Origin</label>
                  <p>Nabeul, Tunisia</p>
                </div>
                <div className="media">
                  <label>Current address</label>
                  <p>Tunis, Tunisia</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>medaminekoubaa4@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>(+216)58701286</p>
                </div>

                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a
                className="px-btn px-btn-theme"
                href={pdf}
                target="_blank"
                rel="noreferrer"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;

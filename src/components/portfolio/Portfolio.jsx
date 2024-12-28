import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["All", "Game Dev", "VR", "Machine Learning", "Mobile Dev"];
const AllPortfolioContent = [
  {

    img: "1",
    title: "Dice Driven Journey",
    subTitle: "Unity - Node.js - MongoDB-Multiplayer",
    alterText: "Dice Driven Journey",
    portfolioLink: "", // Add link if available
  },
  {
    img: "2",
    title: "Haven",
    subTitle: "Unity - VR - Node.js-Multiplayer",
    alterText: "Haven VR Game",
    portfolioLink: "", // Add link if available
  },
  {
    img: "4",
    title: "Music Genre Recognition",
    subTitle: "Python - TensorFlow",
    alterText: "Music Genre Recognition",
    portfolioLink: "", // Add link if available
  },
  {
    img: "5",
    title: "Friends with Animals",
    subTitle: "Flutter - Node.js - MongoDB",
    alterText: "Friends with Animals App",
    portfolioLink: "", // Add link if available
  },
];
const WebPortfolioContent = [
  {

    img: "1",
    title: "Dice Driven Journey",
    subTitle: "Unity - Node.js - MongoDB",
    alterText: "Dice Driven Journey",
    portfolioLink: "", // Add link if available
  },
];

const MobilePortfolioContent = [{
  img: "2",
  title: "Haven",
  subTitle: "Unity - VR - Node.js",
  alterText: "Haven VR Game",
  portfolioLink: "", // Add link if available
},


];
const AiPortfolioContent = [
  {
    img: "4",
    title: "Music Genre Recognition",
    subTitle: "Python - TensorFlow",
    alterText: "Music Genre Recognition",
    portfolioLink: "", // Add link if available
  },
];
const MobileDevContent =[
  {
    img: "5",
    title: "Friends with Animals",
    subTitle: "Flutter - Node.js - MongoDB",
    alterText: "Friends with Animals App",
    portfolioLink: "", // Add link if available
  },
]

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              {tabList.map((val, i) => (
                <Tab key={i}>{val}</Tab>
              ))}
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {WebPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {MobilePortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AiPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* grid item  */}
                </div>
                {/* End list wrapper */}
              </TabPanel>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {MobileDevContent.map((val, i) => (
                      <div
                          className="col-sm-6 col-lg-4 grid-item product"
                          key={i}
                      >
                        <div className="portfolio-box-01">
                          <div className="portfolio-img">
                            <div className="portfolio-info">
                              <h5>
                                <a href={val.portfolioLink} target="_blank">
                                  {val.title}
                                </a>
                              </h5>
                              <span>{val.subTitle}</span>
                            </div>
                            {/* End .portfolio-info */}
                            <a
                                href={`img/portfolio/${val.img}.png`}
                                className="gallery-link"
                            >
                              <img
                                  src={`img/portfolio/${val.img}.png`}
                                  alt={val.alterText}
                              />
                            </a>
                            {/* End gallery link */}
                            <a
                                href={val.portfolioLink}
                                className="portfolio-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              <span className="ti-link"></span>
                            </a>
                            {/* End .portfolio-icon */}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;

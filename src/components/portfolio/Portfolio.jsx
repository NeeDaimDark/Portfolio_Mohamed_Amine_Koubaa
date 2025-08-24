import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const tabList = ["All", "Mobile Application","Game Dev", "VR", "Machine Learning"];
const MobileAppPortfolioContent = [
  {
    title: "Nuvio",
    subTitle: "Flutter - Firebase - Note Taking App",
    media: [
      process.env.PUBLIC_URL + "/img/portfolio/Novio/noteicon.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/Description.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/0.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/1.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/2.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/3.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/4.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/5.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/6.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/7.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/8.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/9.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/10.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/11.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/database.png",
      process.env.PUBLIC_URL + "/img/portfolio/Novio/database1.png",
    ],
    alterText: "Nuvio Mobile App Media",
  },
];
const GameDevPortfolioContent = [
  {
    title: "Dice Driven Journey",
    subTitle: "Unity - Node.js - MongoDB-Multiplayer",
    media: [
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/0.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/1.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/2.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/3.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/4.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/5.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/6.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/7.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/8.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/9.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/10.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/11.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/12.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/13.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/14.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/15.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/16.png",
      process.env.PUBLIC_URL + "/img/portfolio/DiceDriven/trailer.mp4", // Video file
    ],
    alterText: "Dice Driven Journey Media",
  },
];

const VRPortfolioContent = [
  {
    title: "Haven",
    subTitle: "Unity - Node.js - MongoDB - Oculus Quest -Mirror Networking -Multiplayer",
    media: [
      process.env.PUBLIC_URL + "/img/portfolio/Haven/0.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/1.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/2.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/3.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/4.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/5.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/6.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/7.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/8.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/9.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/10.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/11.png",
      process.env.PUBLIC_URL + "/img/portfolio/Haven/trailer.mp4", // Video file
    ],
    alterText: "Haven Media",
  },
];

const MLPortfolioContent = [
  {
    title: "Music Genre Recognition",
    subTitle: "Python - Google Colab - CNN - MFCC",
    media: [
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/0.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/1.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/2.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/3.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/4.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/5.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/6.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/7.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/8.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/9.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/10.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/11.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/12.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/13.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/14.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/15.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/16.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/17.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/18.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/19.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/20.png",
      process.env.PUBLIC_URL + "/img/portfolio/MusGenRec/21.png",
    ],
    alterText: "Music Genre Recognition Media",
  },
];



// Combine all content for the "All" section
const AllPortfolioContent = [
  ...MobileAppPortfolioContent,
  ...GameDevPortfolioContent,
  ...VRPortfolioContent,
  ...MLPortfolioContent,
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (media) => {
    setCurrentMedia(media);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentMedia([]);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentMedia.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + currentMedia.length) % currentMedia.length
    );
  };

  return (
    <div className="portfolio-section">
      <Tabs>
        <TabList className="filter d-flex justify-content-center">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>

        {/* All Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {AllPortfolioContent.map((project, i) => (
              <div key={i} className="col-lg-4 grid-item">
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <img
                      src={project.media[0]} // Show the first image
                      alt={project.alterText}
                      onClick={() => openGallery(project.media)} // Open modal on click
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="portfolio-info">
                    <h5>{project.title}</h5>
                    <p>{project.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* Mobile Application Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {MobileAppPortfolioContent.map((project, i) => (
                <div key={i} className="col-lg-4 grid-item">
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <img
                          src={project.media[0]}
                          alt={project.alterText}
                          onClick={() => openGallery(project.media)}
                          style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="portfolio-info">
                      <h5>{project.title}</h5>
                      <p>{project.subTitle}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </TabPanel>

        {/* Game Dev Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {GameDevPortfolioContent.map((project, i) => (
              <div key={i} className="col-lg-4 grid-item">
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <img
                      src={project.media[0]}
                      alt={project.alterText}
                      onClick={() => openGallery(project.media)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="portfolio-info">
                    <h5>{project.title}</h5>
                    <p>{project.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* VR Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {VRPortfolioContent.map((project, i) => (
              <div key={i} className="col-lg-4 grid-item">
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <img
                      src={project.media[0]}
                      alt={project.alterText}
                      onClick={() => openGallery(project.media)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="portfolio-info">
                    <h5>{project.title}</h5>
                    <p>{project.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Machine Learning Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {MLPortfolioContent.map((project, i) => (
              <div key={i} className="col-lg-4 grid-item">
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <img
                      src={project.media[0]}
                      alt={project.alterText}
                      onClick={() => openGallery(project.media)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="portfolio-info">
                    <h5>{project.title}</h5>
                    <p>{project.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>


      </Tabs>

      {/* Modal for Gallery */}
      {isOpen && (
        <div className="gallery-modal">
          <button className="gallery-close-button" onClick={closeGallery}>
            <span className="gallery-close-icon">×</span>
          </button>

          <div className="gallery-content">
            {currentMedia[currentIndex].endsWith(".mp4") ? (
              <video controls className="media-display">
                <source src={currentMedia[currentIndex]} type="video/mp4" />
              </video>
            ) : (
              <img
                src={currentMedia[currentIndex]}
                alt={`Media ${currentIndex}`}
                className="media-display"
              />
            )}
          </div>

          <div className="gallery-controls">
            <button className="gallery-button gallery-button-prev" onClick={handlePrevious}>
              <span className="gallery-button-icon">‹</span>
            </button>
            <button className="gallery-button gallery-button-next" onClick={handleNext}>
              <span className="gallery-button-icon">›</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

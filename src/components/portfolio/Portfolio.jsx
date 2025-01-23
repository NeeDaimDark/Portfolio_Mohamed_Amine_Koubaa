import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const tabList = ["All", "Game Dev", "VR", "Machine Learning"];

const GameDevPortfolioContent = [
  {
    title: "Dice Driven Journey",
    subTitle: "Unity - Node.js - MongoDB-Multiplayer",
    media: [
      "img/portfolio/DiceDriven/0.png",
      "img/portfolio/DiceDriven/1.png",
      "img/portfolio/DiceDriven/2.png",
      "img/portfolio/DiceDriven/3.png",
      "img/portfolio/DiceDriven/4.png",
      "img/portfolio/DiceDriven/5.png",
      "img/portfolio/DiceDriven/6.png",
      "img/portfolio/DiceDriven/7.png",
      "img/portfolio/DiceDriven/8.png",
      "img/portfolio/DiceDriven/9.png",
      "img/portfolio/DiceDriven/10.png",
      "img/portfolio/DiceDriven/11.png",
      "img/portfolio/DiceDriven/12.png",
      "img/portfolio/DiceDriven/13.png",
      "img/portfolio/DiceDriven/14.png",
      "img/portfolio/DiceDriven/15.png",
      "img/portfolio/DiceDriven/16.png",
      "img/portfolio/DiceDriven/trailer.mp4", // Video file
    ],
    alterText: "Dice Driven Journey Media",
  },
];

const VRPortfolioContent = [
  {
    title: "Haven",
    subTitle: "Unity - Node.js - MongoDB - Oculus Quest",
    media: [
      "img/portfolio/Haven/0.png",
      "img/portfolio/Haven/1.png",
      "img/portfolio/Haven/2.png",
      "img/portfolio/Haven/3.png",
      "img/portfolio/Haven/4.png",
      "img/portfolio/Haven/5.png",
      "img/portfolio/Haven/6.png",
      "img/portfolio/Haven/7.png",
      "img/portfolio/Haven/8.png",
      "img/portfolio/Haven/9.png",
      "img/portfolio/Haven/10.png",
      "img/portfolio/Haven/11.png",
      "img/portfolio/Haven/trailer.mp4", // Video file
    ],
    alterText: "Haven Media",
  },
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

        {/* Game Dev Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {GameDevPortfolioContent.map((project, i) => (
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

        {/* VR Section */}
        <TabPanel>
          <div className="portfolio-content row">
            {VRPortfolioContent.map((project, i) => (
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
      </Tabs>

      {/* Modal for Gallery */}
      {isOpen && (
        <div className="gallery-modal">
          <button className="close-button" onClick={closeGallery}>
            Close
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
            <button className="gallery-button" onClick={handlePrevious}>
              -
            </button>
            <button className="gallery-button" onClick={handleNext}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

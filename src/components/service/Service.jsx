import React from "react";

const ServiceContent = [ {
  icon: "ti-game",
  no: "01",
  service: "GAME DEVELOPMENT",
  title: "Creating immersive games.",
},
  {
    icon: "ti-server",
    no: "02",
    service: "BACKEND DEVELOPMENT",
    title: "Building efficient server-side solutions.",
  },
  
  {
    icon: "ti-stats-up",
    no: "04",
    service: "PROJECT MANAGEMENT",
    title: "Managing Agile Scrum projects for optimized results.",
  },
  {
    icon: "ti-layout",
    no: "03",
    service: "UI/UX",
    title: "Attractive User Interface. Interactive User Experience.",
  },
  {
    icon: "ti-brush-alt",
    no: "04",
    service: "CLEAN CODE",
    title: "Easily understandble. Easily exchangeable.",
  },
  {
    icon: "ti-time",
    no: "05",
    service: "PUNCTUAL",
    title: "Getting the job done within the exact agreed time frame.",
  },
  {
    icon: "ti-world",
    no: "06",
    service: "CI/CD",
    title: "Working in Agile method with DevOps approach.",
  },
];

const ServiceTwo = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div className="col-sm-6 col-lg-4" key={i}>
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwo;

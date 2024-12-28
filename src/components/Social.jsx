import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/amine.koubaa.927/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/amine.kouubaa/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohamed-amine-koubaa/" },
  { Social: <FaGithub />, link: "https://github.com/NeeDaimDark" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;

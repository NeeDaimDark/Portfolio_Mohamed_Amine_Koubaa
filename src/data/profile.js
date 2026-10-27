import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import resumeEnglish from "../CV_Mohamed_Amine_Koubaa_EN.pdf";
import resumeFrench from "../CV_Mohamed_Amine_Koubaa_FR.pdf";

export const profile = {
  name: "Mohamed Amine Koubaa",
  email: "medaminekoubaa4@gmail.com",
  // phone and whatsapp hidden until the French number is available
  // phone: "+216 58 701 286",
  // whatsapp: "+216 56 631 205",
  resumes: { en: resumeEnglish, fr: resumeFrench },
};

export const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/mohamed-amine-koubaa/" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/NeeDaimDark" },
];

export const footerLinks = socialLinks;

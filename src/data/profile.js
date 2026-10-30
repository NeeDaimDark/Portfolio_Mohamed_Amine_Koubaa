import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import resumeEnglish from "../CV_Mohamed_Amine_Koubaa_EN.pdf";
import resumeFrench from "../CV_Mohamed_Amine_Koubaa_FR.pdf";

export const profile = {
  name: "Mohamed Amine Koubaa",
  email: "medaminekoubaa4@gmail.com",
  phone: "+33 7 56 82 47 87",
  resumes: { en: resumeEnglish, fr: resumeFrench },
};

export const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/mohamed-amine-koubaa/" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/NeeDaimDark" },
];

export const footerLinks = socialLinks;

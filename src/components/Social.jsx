import React from "react";
import { socialLinks } from "../data/profile";

const Social = () => (
  <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
    {socialLinks.map(({ name, icon: Icon, url }) => (
      <a key={name} href={url} rel="noreferrer" target="_blank" aria-label={name}>
        <Icon />
      </a>
    ))}
  </div>
);

export default Social;

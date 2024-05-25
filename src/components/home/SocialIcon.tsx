import React, { FunctionComponent } from "react";

interface SocialIconProps {
  link: string,
  icon: FunctionComponent,
  label: string,
}

const SocialIcon: React.FC<SocialIconProps> = ({ link, icon: Icon, label }) => {
  return (
    <a
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}
    >
      <Icon />
    </a>
  )
}

export default SocialIcon;
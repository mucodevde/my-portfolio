import React from "react";
import { Globe } from 'lucide-react';
import { CodeXml } from 'lucide-react';

interface IconLink {
  title: string,
  link: string,
  icon: string,
}

const IconLink: React.FC<IconLink> = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
      className="flex items-center"
    >
      {
        icon === "code" ?
          <CodeXml />
          :
          <Globe />
      }
      {title}
    </a>
  )
}

export default IconLink;
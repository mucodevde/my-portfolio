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
          <CodeXml size={16} />
          :
          <Globe size={16} />
      }
      <span className="ml-2 text-sm lg:text-lg">
        {title}
      </span>
    </a>
  )
}

export default IconLink;
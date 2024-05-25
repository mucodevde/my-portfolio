import React from "react";

import { info } from "../../constants/info";
import self from "../../assets/self.png";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-175px)]"
    >
      <img
        src={self}
        alt="image of developer"
        width={160}
        height={160}
        className="rounded-full p-3 mb-4 md:mb-0 md:mr-8"
      />
      <div>
        <h1>
          Hi, I'm
          <span>{info.firstName}</span>
        </h1>
        <h2>
          I'm {info.position}.
        </h2>
        <div>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet
              key={index}
              emoji={bio.emoji}
              text={bio.text}
            />
          ))}
        </div>
        <div>
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
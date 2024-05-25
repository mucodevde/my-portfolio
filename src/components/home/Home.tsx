import React from "react";

import { info } from "../../constants/info";
import self from "../../assets/self.png";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center"
    >
      <img
        src={self}
        alt="image of developer"
        className="w-4/6 sm:w-2/6 rounded-full p-3 mb-4 md:mb-0 md:mr-8"
      />
      <div
        className="text-center md:text-left"
      >
        <h1 className="font-bold text-2xl lg:text-4xl lg:my-2">
          Hi, I'm {" "}
          <span className="text-sky-500">{info.firstName} {info.lastName}</span>
        </h1>
        <h2 className="text-center lg:text-xl">
          I'm {info.position}.
        </h2>
        <div
          className="p-3"
        >
          {info.miniBio.map((bio, index) => (
            <EmojiBullet
              key={index}
              emoji={bio.emoji}
              text={bio.text}
            />
          ))}
        </div>
        <div
          className="mt-4 flex gap-6 justify-center text-2xl md:text-2.5xl"
        >
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
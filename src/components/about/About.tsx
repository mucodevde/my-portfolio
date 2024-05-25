import React from "react";

import { info } from "../../constants/info";
import Terminal from "./Terminal";

const About: React.FC = () => {
  const firstName = info.firstName.toLowerCase();

  const aboutMeText = () => (
    <>
      <p>
        <span className="text-sky-400">
          {firstName}
          {info.lastName.toLowerCase()} $
        </span>
        cat /about{firstName}
      </p>
      <p>
        <span className="text-sky-400">
          about{firstName} {" "}
          <span className="text-green-400">
            (main)
          </span> $ {" "}
        </span>
        {info.bio}
      </p>
    </>
  );

  const skillsText = () => (
    <>
      <p>
        <span className="text-sky-400">
          {firstName}
          {info.lastName.toLowerCase()} $
        </span>
        cd /skills/tools
      </p>
      <p>
        <span className="text-sky-400">
          skills/tools
        </span>
      </p>
      <p className="text-sky-400">
        Proficient With
      </p>
      <ul className="list-disc ml-5">
        {info.skills.proficientWith.map((proficiency, index) => (
          <li
            key={index}
            className="hover:-translate-y-0.5"
          >
            {proficiency}
          </li>
        ))}
      </ul>
      <p className="text-sky-400">
        Exposed To
      </p>
      <ul className="list-disc ml-5">
        {info.skills.exposedTo.map((skill, index) => (
          <li
            key={index}
            className="hover:-translate-y-0.5"
          >
            {skill}
          </li>
        ))}
      </ul>
    </>
  );

  const miscText = () => (
    <>
      <p>
        <span className="text-sky-400">
          {firstName}
          {info.lastName.toLowerCase()} $
        </span>
        cd /hobbies/interests
      </p>
      <p>
        <span className="text-sky-400">
          hobbies/interests
          <span className="text-green-500">
            (main)
          </span> $
        </span>
        ls
      </p>
      <ul className="list-disc ml-5">
        {info.hobbies.map((hobby, index) => (
          <li
            key={index}
            className="hover:-translate-y-0.5"
          >
            <span className="mr-4">{hobby.emoji}</span>
            {hobby.label}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="flex flex-col items-center mt-12" id="about">
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </div>
  )
}

export default About;
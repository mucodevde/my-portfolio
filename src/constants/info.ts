import self from "../assets/self.png"
import mock1 from "../assets/mock1.png"
import mock2 from "../assets/mock2.png"
import mock3 from "../assets/mock3.png"
import mock4 from "../assets/mock4.png"
import mock5 from "../assets/mock5.png"

import { Linkedin } from "lucide-react"
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

export const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const singlePage = false;

export const info = {
  firstName: "Muhammad",
  lastName: "Deric",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by coffee'
    },
    {
      emoji: '🌎',
      text: 'based in Indonesia'
    },
    {
      emoji: "📧",
      text: "mucodevde@gmail.com"
    }
  ],
  socials: [
    {
      link: "https://linkedin.com",
      icon: Linkedin,
      label: 'linkedin'
    },
    {
      link: "https://github.com",
      icon: Github,
      label: 'github'
    },
    {
      link: "https://instagram.com",
      icon: Instagram,
      label: 'instagram'
    },
  ],
  bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills:
  {
    proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
    exposedTo: ['nodejs', 'python', 'adobe illustrator']
  }
  ,
  hobbies: [
    {
      label: 'reading',
      emoji: '📖'
    },
    {
      label: 'theater',
      emoji: '🎭'
    },
    {
      label: 'movies',
      emoji: '🎥'
    },
    {
      label: 'cooking',
      emoji: '🌶'
    }
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [ // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5
    }
  ]
}
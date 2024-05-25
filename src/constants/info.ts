import self from "../assets/self.png"
import mock1 from "../assets/multi-step-form-bymde.netlify.app_desktop.png"
import mock2 from "../assets/interactive-comments-bymde.netlify.app_desktop.png"
import mock3 from "../assets/news-dashboard-bymde.netlify.app_desktop.png"
import mock4 from "../assets/ecommerce-product-bymde.netlify.app_desktop.jpeg"
import mock5 from "../assets/rock-paper-scissors-bymde.netlify.app_desktop.jpeg"
import mock6 from "../assets/agecalculatorappbymde.netlify.app.jpeg"

import { Linkedin } from "lucide-react"
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

export const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const singlePage = false;

export const info = {
  firstName: "Muhammad",
  lastName: "Deric",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'fueled by coffee :)'
    },
    {
      emoji: '🌎',
      text: 'based in Indonesia, Bandung City'
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
  bio: "Hello! I'm Deric. I'm a full stack web developer enthusiast. I had studied Information System at ITB, I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills:
  {
    proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
    exposedTo: ['nodejs', 'python']
  }
  ,
  hobbies: [
    {
      label: 'reading',
      emoji: '📖'
    },
    {
      label: 'coding',
      emoji: '🌐'
    }
  ],
  portfolio: [ // This is where your portfolio projects will be detailed
    {
      title: "Multi Step Form using ReactJS and Redux",
      live: "https://multi-step-form-bymde.netlify.app/",
      source: "https://github.com/muhammadderic/multi-step-form--FrontEndMentor",
      image: mock1
    },
    {
      title: "Interactive Comments Site",
      live: "https://interactive-comments-bymde.netlify.app/",
      source: "https://github.com/muhammadderic/interactive-comments-section--FrontEndMentor",
      image: mock2
    },
    {
      title: "News Homepage",
      live: "https://news-dashboard-bymde.netlify.app/",
      source: "https://github.com/muhammadderic/news-homepage--FrontEndMentor",
      image: mock3
    },
    {
      title: "E-Commerce Product Page",
      live: "https://ecommerce-product-bymde.netlify.app/",
      source: "https://github.com/muhammadderic/e-commerce_product_page--FrontEndMentor",
      image: mock4
    },
    {
      title: "Rock Paper Scissor",
      live: "https://rock-paper-scissors-bymde.netlify.app/",
      source: "https://github.com/muhammadderic/rock-paper-scissors--FrontEndMentor",
      image: mock5
    },
    {
      title: "Age Calculator",
      live: "https://agecalculatorappbymde.netlify.app/",
      source: "https://github.com/muhammadderic/age-calculator-app--FrontEndMentor",
      image: mock6
    },
  ]
}
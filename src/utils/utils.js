import github from "../images/github.png";
import gmail from "../images/gmail.png";
import whatsapp from "../images/whatsapp.png";
import instagram from "../images/instagram.png";
import telegram from "../images/telegram.png";
import linkedin from "../images/linkedin.png";
import cpp from "../images/c++.png"
import mongodb from '../images/mongodb.png'
import react from '../images/react.png'
import node from '../images/node.png'
import mysql from '../images/mysql.png'
import java from '../images/java.png'
import git from '../images/git.png'
import require from '../images/requirejs.png'
import forest_theme from '../images/forest_theme.jpg'
import game_theme from '../images/game_theme.jpg'
import dust_theme from '../images/dust_theme.jpg'

export const navElements = [
  { element: "Home", path: "/SD-Portfolio/" },
  { element: "About", path: "/SD-Portfolio/about" },
  { element: "Skills", path: "/SD-Portfolio/skills" },
  { element: "Projects", path: "/SD-Portfolio/projects" },
  { element: "Contact", path: "/SD-Portfolio/contact" },
];

export const nameLetters = [
  { letter: "S" },
  { letter: "a" },
  { letter: "r" },
  { letter: "a" },
  { letter: "n" },
  { letter: "g" },
  { letter: " " },
  { letter: "D" },
  { letter: "e" },
  { letter: "o" },
];

export const buttonValue = [{ value: "Resume" }, { value: "Appoint" }];

export const Experience = [
  {
    head: "Software Engineer Associate",
    items: [
      {
        item: "@ Dassault Systemes",
      },
      {
        item: "July 24 -- Present",
      },
    ],
  },
  {
    head: "Software Developer Intern",
    items: [
      {
        item: "@ Dassault Systemes",
      },
      {
        item: "Jan 24 -- June 24",
      },
    ],
  },
];

export const Education = [
  {
    head: "B.Tech. (Computer Engineering)",
    items: [
      {
        item: "PCET's Pimpri Chinchwad College of Engineering, Pune",
      },
      { item: "2021 -- 2024" },
      {
        item: "CGPA - 9.1",
      },
    ],
  },
  {
    head: "HSC",
    items: [
      {
        item: "Rashtriya Jr. College, Chalisgaon",
      },
      { item: "2019 -- 2020" },
      {
        item: "82%",
      },
    ],
  },
  {
    head: "SSC",
    items: [
      {
        item: "Good Shepherd Academy, Chalisgaon",
      },
      { item: "2017 -- 2018" },
      {
        item: "92%",
      },
    ],
  },
];

export const Projects = [
  {
    head: "Socio-On",
    desp: "A social media platform",
    stack: "MongoDB, ExpressJS, NodeJS, ReactJS, REST",
    link: "",
  },
  {
    head: "Serene Haven Treasure Hunt",
    desp: "A pirate themed treasure hunt game",
    stack: "MySQL, ExpressJS, NodeJS, ReactJS, REST",
    link: "",
  },
  {
    head: "Trash Detection System",
    desp: "Underwater image enhancement integrated with trash detection",
    stack: "MatLab, Python",
    link: "",
  },
  {
    head: "Digital Electronics Calculator",
    desp: "A C++ programmed calculator for effortlessly handling the binary operations.",
    stack: "C++, OOP",
    link: "",
  },
  {
    head: "Video Player",
    desp: "A Youtube Clone",
    stack: "RapidAPI, NodeJS, ReactJS",
    link: "",
  },
];

export const Contacts = [
  {
    source: linkedin,
    link: "https://www.linkedin.com/in/sarang-deo-889bba220",
  },
  { source: gmail, link: "mailto:sarangdeo2001@gmail.com" },
  { source: github, link: "https://github.com/Sarangd2111" },
  {
    source: telegram,
    link: "https://drive.google.com/file/d/1hoAQdAKpOHuFZL1HurbkvNGq08UxlkHW/view?usp=share_link",
  },
  {
    source: whatsapp,
    link: "https://drive.google.com/file/d/1qryIuUCK24ITs-runnC827IY3WRsJn91/view?usp=share_link",
  },
  {
    source: instagram,
    link: "https://drive.google.com/file/d/1QgWqSpZWWyJNaXKfAARuahhPPL6r0ZO3/view?usp=share_link",
  },
];

export const Hobbies = [
  {
    hobby: "Singing",
  },
  {
    hobby: "Playing piano",
  },
  {
    hobby: "Cricket, Badminton, Chess",
  },
  {
    hobby: "Reading",
  },
  {
    hobby: "E-Sports",
  },
];

export const TechSkills = [
  {
    icon: cpp,
    name: "C++"
  },
  {
    icon: mysql,
    name: "MySQL"
  },
  {
    icon: git,
    name: "Git / SCM"
  },
  {
    icon: java,
    name: "Java"
  },
  {
    icon: mongodb,
    name: "MongoDB"
  },
  {
    icon: react,
    name: "ReactJS"
  },
  {
    icon: node,
    name: "NodeJS"
  },
  {
    icon: require,
    name: "RequireJS"
  }
]

export const CompSkills = [
  {
    skill: "Data Structures"
  },
  {
    skill: "Web Development"
  },
  {
    skill: "OOPs"
  },
  {
    skill: "Database Management"
  },
  {
    skill: "Operating Systemes"
  }
]

export const Themes = [
  {
    themeName: "Dust",
    image: dust_theme
  },
  {
    themeName: "Forest",
    image: forest_theme
  },
  {
    themeName: "Game",
    image: game_theme
  }
]




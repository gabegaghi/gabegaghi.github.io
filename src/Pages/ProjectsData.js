import DSLogo from '../assets/DSLogo.png';
import PigeonLogo from '../assets/PigeonLogo.png';
import MCLogo from '../assets/MCLogo.png';

  /* stack options:
  // langs: typescript, javascript, css3, html5, python, java
  // libs: nodejs, react, jquery
  // dbm: graphql, mongodb, spring-boot    !! missing: mysql
  // tools: visual-studio, github, figma, docker */
const projects = [{
    title: 'marinhocode',
    year: 2024,
    logo: MCLogo,
    for: 'Personal',
    desc: "This portfolio website, which is still a work in progress.",
    tech: {
      langs: ["javascript", "css3", "html5"],
      libs: ["react"],
      tools: ["visual-studio", "github", "figma"]
    },
    repo: "https://github.com/gabegaghi/gabegaghi.github.io",
    public: true
  }, {
    title: 'Pigeon',
    year: 2022,
    logo: PigeonLogo,
    for: 'Publicis Sapient',
    desc: "Android & iOS app offering expense tracking, budgeting, and analytic financial reports.",
    tech: {
      langs: ["typescript"],
      libs: ["react"], // expressjs
      dbm: ["graphql"], // ["mysql"],
      tools: ["nodejs", "github", "figma", "docker"]
    },
    repo: "https://github.com/ps-toronto-team-4/budgeting-app-frontend",
    public: true,
  }, {
    title: 'DocShare',
    year: 2022,
    logo: DSLogo,
    for: 'UTSC',
    desc: "Web application to video-call other users while editing shared documents in real time.",
    tech: {
      langs: ["typescript", "css3", "html5"],
      libs: ["react"], // expressjs
      dbm: ["graphql"], //["mysql"],
      tools: ["nodejs", "github", "docker"]
    },
    public: false,
  }, {
    title: 'PawsUp',
    year: 2021,
    for: 'UTSC',
    desc: "Mobile Android app where users can hire pet trainers and pet sitters, or buy pet products.",
    tech: {
      langs: ["javascript"],
      libs: ["react", "jquery"], // expressjs
      dbm: ["mongodb"],
      tools: ["nodejs", "visual-studio", "github", "docker"]
    },
    public: false,
  }];

  export default projects;
  
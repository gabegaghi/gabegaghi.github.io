import DSLogo from '../assets/DSLogo.png';
import PigeonLogo from '../assets/PigeonLogo.png';
import MCLogo from '../assets/MCLogo.png';

const projects = [{
    title: 'marinhocode',
    year: 2023,
    logo: MCLogo,
    for: 'Personal',
    desc: "This portfolio website (which is still under construction).",
    tech: {
      langs: ["javascript", "css3", "html5"],
      libs: ["react"],
      tools: ["visual-studio", "github", "figma"]
    },
    repo: "https://github.com/gabegaghi/personal-website",
    public: true
  }, {
    title: 'Pigeon',
    year: 2022,
    logo: PigeonLogo,
    for: 'Publicis Sapient',
    desc: "Cross-platform financial mobile app for expense-tracking, budgeting, and more.",
    tech: {
      langs: ["typescript"],
      libs: ["react", "nodejs"],
      dbms: ["graphql"],    // , "mysql"
      tools: ["github", "figma", "nodejs", "docker"]
    },
    repo: "https://github.com/ps-toronto-team-4/budgeting-app-frontend",
    public: true,
  }, {
    title: 'DocShare',
    year: 2022,
    logo: DSLogo,
    for: 'UTSC',
    desc: "Web application to video-call other users while editing the same documents in real time.",
    tech: {
      langs: ["typescript", "css3", "html5"],
      libs: ["react"],
      dbms: ["graphql"],    // , "mysql"
      tools: ["visual-studio", "github", "nodejs", "docker"]
    },
    public: false,
  }, {
    title: 'PawsUp',
    year: 2021,
    for: 'UTSC',
    desc: "Mobile Android app where users can hire pet trainers and pet sitters.",
    tech: {
      langs: ["javascript"],
      libs: ["react", "jquery", "nodejs"],
      dbms: ["mongodb"],
      tools: ["visual-studio", "github", "docker", "firebase"]
    },
    public: false,
  }];

  export default projects;
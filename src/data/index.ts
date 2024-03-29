import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { ICard } from "../components/Card/Card";
import { IContactInfo } from "../components/ContactInfo/ContactInfo";
import { TOOLS } from "../constants";

const cardData: Array<ICard> = [
  {
    application: "Web App #1",
    company: "Deloitte Consulting Philippines Delivery Centre",
    date: "2021",
    duration: "2 years",
    titles: ["Front end developer"],
    description: [
      "Developer for an insurance portal application.",
      "Discussed with off-shore, on-shore and third-party teams.",
      "Consumed multiple API's for different functionalities.",
      "Presented demos and discussed with clients.",
      "Deployed front-end code to different development environments.",
    ],
    chips: [TOOLS.REACT, TOOLS.JS, TOOLS.HTML, TOOLS.CSS, TOOLS.AZURE],
  },
  {
    application: "Web App #2",
    company: "Deloitte Consulting Philippines Delivery Centre",
    date: "2022",
    duration: "1 year",
    titles: ["Front end developer"],
    description: [
      "Developer for an administrator application.",
      "Provided peer code reviews.",
      "Involved in deployment.",
    ],
    chips: [
      TOOLS.REACT,
      TOOLS.JS,
      TOOLS.HTML,
      TOOLS.CSS,
      TOOLS.AZURE,
      TOOLS.NEXT,
    ],
  },
  {
    application: "Web App #3",
    company: "Accenture Inc.",
    date: "2020",
    duration: "2 years",
    titles: ["Front end developer"],
    description: [
      "Front end SME for a new application which involves consuming an external API.",
      "Designed the user interface.",
      "Involved in Sprint planning and prioritization.",
      "Built from scratch the main components and functionalities.",
    ],
    chips: [TOOLS.REACT, TOOLS.JS, TOOLS.HTML, TOOLS.CSS, TOOLS.AZURE],
  },
  {
    application: "Web App #4",
    company: "Accenture Inc.",
    date: "2020",
    duration: "1 year",
    titles: ["Front end developer"],
    description: [
      "Developer for a CMS showcase application.",
      "Responsible for configuring reusable components which are not present in Wordpress modules",
      "Developed pixel-perfect animations.",
    ],
    chips: [
      TOOLS.JQUERY,
      TOOLS.GSAP,
      TOOLS.WORDPRESS,
      TOOLS.JS,
      TOOLS.HTML,
      TOOLS.CSS,
    ],
  },
  {
    application: "Web App #5",
    company: "Accenture Inc.",
    date: "2018",
    duration: "3 years",
    titles: ["Front end developer"],
    description: [
      "Developer for an internal collaborating application which involved real-time interactions using Firebase.",
      "Responsible for completing stories and functionalities.",
      "Involved in improvements and innovation.",
    ],
    chips: [TOOLS.JQUERY, TOOLS.JS, TOOLS.HTML, TOOLS.CSS],
  },
  {
    application: "Web App #6",
    company: "Accenture Inc.",
    date: "2018",
    duration: "3 years",
    titles: ["Full-stack developer"],
    description: [
      `Developer for an internal "social networking" application for connecting with other employees.`,
      `Developed components involving frontend and backend.`,
      `Also involved in accessibility, bug fixes and change requests.`,
      `Provided demo after every sprint.`,
    ],
    chips: [
      TOOLS.REACT,
      TOOLS.JS,
      TOOLS.ASP,
      TOOLS.HTML,
      TOOLS.CSS,
      TOOLS.JQUERY,
      TOOLS.SQL,
    ],
  },
  {
    application: "Web App #7",
    company: "Accenture Inc.",
    date: "2018",
    duration: "3 years",
    titles: ["Full-stack developer"],
    description: [
      `Developer for an internal "social networking" application which involves interacting and sharing with other employees.`,
      `Developed components involving front end and backend.`,
      `Also involved in accessibility, bug fixes and change requests.`,
      `Provided demo after every sprint.`,
    ],
    chips: [
      TOOLS.JQUERY,
      TOOLS.JS,
      TOOLS.ASP,
      TOOLS.HTML,
      TOOLS.CSS,
      TOOLS.SQL,
    ],
  },
  {
    application: "Mobile App #1",
    company: "Accenture Inc.",
    date: "2019",
    duration: "1 year",
    titles: ["Full-stack developer"],
    description: [
      `Developer for the hybrid mobile version of "Web Application #7".`,
      `Developed components involving front end and backend.`,
      `Trained as SME for this application.`,
      `Fixed high-priority bugs and took upon high-priority stories.`,
      `Involved in deployment.`,
    ],
    chips: [TOOLS.VUE, TOOLS.CORDOVA],
  },
  {
    application: "Mobile App #2",
    company: "Accenture Inc.",
    date: "2019",
    duration: "< 3 months",
    titles: ["Full-stack developer"],
    description: [
      `Developer for the Hybrid mobile version of "Web Application #6".`,
      `Developed components involving front end and backend.`,
      `Involved in deployment.`,
    ],
    chips: [TOOLS.ANGULARJS, TOOLS.IONIC],
  },
  {
    application: "Automation",
    company: "Accenture Inc.",
    date: "2018",
    duration: "1 month",
    titles: ["Associate Software Engineer"],
    description: [`Created surface automation for >3 tasks using Blue Prism.`],
    chips: [TOOLS.BLUE_PRISM],
  },
];

const contactInfoData: Array<IContactInfo> = [
  {
    faLogoClass: faLinkedin,
    title: `LinkedIn`,
    text: `Connect with me`,
    link: `https://www.linkedin.com/in/benjodeguzman`,
    linkText: `https://www.linkedin.com/in/benjodeguzman`,
  },
  {
    faLogoClass: faEnvelope,
    title: `E-mail`,
    text: `Send me an e-mail`,
    link: `mailto:benjdg16@gmail.com`,
    linkText: `benjdg16@gmail.com`,
  },
  {
    faLogoClass: faGithub,
    title: `Github`,
    text: `Check out my profile`,
    link: `https://github.com/benjdg16`,
    linkText: `https://github.com/benjdg16`,
  },
];

export { cardData, contactInfoData };

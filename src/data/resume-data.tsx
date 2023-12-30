import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Filippo Benozzi",
  initials: "FB",
  location: "Venice, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Venice",
  about:
    "Developer, economic student and musician",
  summary:
    "During these years I try to assimilate as much information and experiences as possible that will benefit me for my future career. I have been working 3 days a week for almost 3 years now at a web agency in Mestre as a Front-End developer. In this field I always keep myself very up to date by constantly trying to experiment with new frameworks (CSS and Javascript in particular) and by participating in sector conferences.\n\nThe other days of the week I dedicate to ErreBi SAS, a family company that deals with knitwear from production to retail. In this environment I am taking my first steps in the entrepreneurial and management field trying to create and coordinate the organization of events such as fashion shows and photo shoots with the consequent management of digital marketing. I designed and created a purchase and sales analysis system also based on the correlation of factors external to the company.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8223894?v=4",
  personalWebsiteUrl: "https://filippo.im",
  contact: {
    email: "email@filippo.im",
    tel: "+393927058807",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/filippobenozzi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/filippobenozzi/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Ca' Foscari University, Venice",
      degree: "Global Development and Entrepreneurship",
      start: "2019",
      end: "2023",
    },
    {
      school: "University of Trento",
      degree: "Bachelor's Degree in Computer Science and Economics.",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "ErreBi SAS",
      link: "https://errebi.it",
      badges: [],
      title: "Digital Management and Commercial Analysis",
      start: "2013",
      end: "",
      description:
        "Family business that deals with the design, creation and marketing of knitwear products. I deal with the management of digital marketing and the planning and implementation of events such as fashion shows and photo shoots. I also deal with purchasing and sales analysis for which I have created a tool that uses internal and external data and programmatically processes analyzes of the company's performance.",
    },
    {
      company: "Dinamiza",
      link: "https://dinamiza.it",
      badges: [],
      title: "Front-end Developer",
      start: "2017",
      end: "2024",
      description:
        "I deal with the front-end development of static and dynamic websites and web applications. I create custom themes and maintain sites with the most popular CMS such as Wordpress, Drupal and Prestashop. I try, especially in the more creative projects, to experiment with new CSS or Javascript frameworks such as: React, Tailwind, GatsbyJS, NextJS, Symphony.",
    },
  ],
  skills: [
    "Italian (mother tongue)",
    "English (C1)",
  ],
  projects: [
    {
      title: "Booking System",
      techStack: [
        "Side Project",
      ],
      description: "Web application for booking activities for summer camps and holidays. I developed the application in its entirety from analysis to functionality development. I also developed all the interfaces for both the user and administrative sides. Initially the project was created for the company Always Growing LTD, now it is managed by Studio Fl-o LTD. The project is being rewritten and redeveloped to allow greater diffusion to different application areas and greater scalability.",
      link: {
        label: "booking.alwaysgrowing.co.uk",
        href: "https://booking.alwaysgrowing.co.uk/",
      },
    },
    {
      title: "ErreBi Cloud",
      techStack: [
        "Side Project",
      ],
      description: "Web application for communicating with customers and analyzing purchases and sales. I developed the project both in the functional and interface parts. The system takes care of all the management of the business's customer contacts, also allowing massive communications. It also deals with real-time analysis of sales and purchases also related to external factors. In the experimental phase, a predictive part was implemented which, based on the data collected, is able to establish the next day's collection based on external factors such as time, period and historical trend.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
  volunteering: [
    {
      where: "ProLoco of Zero Branco",
      text: "I worked in the organization of events in advertising management, signage creation and computerized order management systems.",
      start: "2010",
      end: "2018",
    },
    {
      where: "Elderly club of Zero Branco",
      text: "I run courses for seniors on how to use computers and smartphones consciously.",
      start: "2013",
      end: "2016",
    },
  ],
} as const;

import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Filippo Benozzi",
  initials: "FB",
  location: "Venice, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Venice",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "During these years I try to assimilate as much information and experiences as possible that will benefit me for my future career. I have been working 3 days a week for almost 3 years now at a web agency in Mestre as a Front-End developer. In this field I always keep myself very up to date by constantly trying to experiment with new frameworks (CSS and Javascript in particular) and by participating in sector conferences.\n\nThe other days of the week I dedicate to ErreBi SAS, a family company that deals with knitwear from production to retail. In this environment I am taking my first steps in the entrepreneurial and management field trying to create and coordinate the organization of events such as fashion shows and photo shoots with the consequent management of digital marketing. I designed and created a purchase and sales analysis system also based on the correlation of factors external to the company.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
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
      logo: ParabolLogo,
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
      logo: ParabolLogo,
      start: "2017",
      end: "2024",
      description:
        "I deal with the front-end development of static and dynamic websites and web applications. I create custom themes and maintain sites with the most popular CMS such as Wordpress, Drupal and Prestashop. I try, especially in the more creative projects, to experiment with new CSS or Javascript frameworks such as: React, Tailwind, GatsbyJS, NextJS, Symphony.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

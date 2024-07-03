/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "...",
  title: "Hey there, I'm Edwin",
  subTitle: emoji(
    "a Software Engineer 🐐 with experience building Web and Mobile applications. 🚀 I greatly enjoy Full Stack Dev and Cloud Engineering."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/edwinliiiii",
  linkedin: "https://www.linkedin.com/in/edwinliiiii",
  gmail: "li.edw@northeastern.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS SOFTWARE DEVELOPER LOOKING TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop elegant Front ends / User Interfaces for web and mobile applications"),
    emoji("⚡ Business logic & data delivery following Microservice architecture / Lightweight protocol"),
    emoji("⚡ Data infrastructure through ETL pipelines and AWS / Bash Orchestration "),
    emoji("⚡ Integration of third party services like AWS / ElasticSearch / MongoDB")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "aws"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "react"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "vue"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "node"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "graphql"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "flask"
    },
    {
      skillName: "elasticsearch",
      fontAwesomeClassname: "elastic"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "mongo"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "postgres"
    },
    {
      skillName: "prisma",
      fontAwesomeClassname: "prisma"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "sql"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "typescript"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "javascript"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "html"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "css"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "python"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "golang"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "yarn"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "git"
    },
    {
      skillName: "cli",
      fontAwesomeClassname: "cli"
    },
    {
      skillName: "lol",
      fontAwesomeClassname: "racket"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Co-op",
      company: "Wood Mackenzie",
      companylogo: require("./assets/images/woodmac.jpeg"),
      date: "Jan 2024 – June 2024",
      desc1: emoji("Lens Power & Renewables"),
      descBullets: [
        "TypeScript, React, GraphQL, Python",
        "Jenkins, Elasticsearch, AWS: [Glue, S3, Step, Athena, Lambda]"
      ]
    },
    {
      role: "Software Engineer Co-op",
      company: "MITRE",
      companylogo: require("./assets/images/mitre.jpeg"),
      date: "Jan 2023 – June 2023",
      desc1: emoji("Business-knowledge web apps"),
      descBullets: ['JavaScript, Vue, Node, Express, Python', 'Integration with Elasticsearch & AWS S3']
    },
    {
      role: "Software Engineer",
      company: "Generate Product Development",
      companylogo: require("./assets/images/generate.jpeg"),
      date: "Sept 2023 – Dec 2023",
      desc1: emoji("Legacy, an end-of-life planning solution"),
      descBullets: ['TypeScript, React Native, Golang, PostgreSQL', 'Encrypted file integration with AWS S3']
    },
    {
      role: "Teaching Assistant",
      company: "Khoury - Northeastern University",
      companylogo: require("./assets/images/neu.jpeg"),
      date: "Sept 2022 – Dec 2023",
      descBullets: [
        "CS3000: Data Structures & Algorithms",
        "CY2550: Foundations of Cybersecurity"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND PRODUCTS THAT I CONTRIBUTED LARGELY TO",
  projects: [
    {
      image: require("./assets/images/legacy.png"),
      projectName: "Legacy",
      projectDesc: "All-encompassing end-of-life planning mobile app, pitched to investors December 2023.",
      footerLink: [
        {
          name: "Contributions",
          url: "https://github.com/edwinliiiii/legacy-edwin/"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/legacytheapp/"
        }
      ]
    },
    {
      image: require("./assets/images/woodmac.jpeg"),
      projectName: "Lens Power & Renewables",
      projectDesc: "Power and renewables solution providing market intelligence to customers, strengthening investment strategies for clean energy transitions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.woodmac.com/lens/power/"
        }
      ]
    },
    {
      image: require("./assets/images/mitre.jpeg"),
      projectName: "MITRE Campaigns",
      projectDesc: "Business-knowledge driven solution to draw sponsors towards R&D Initiatives.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mitre.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neu.jpeg"),
      subHeader: "Candidate for BS, Computer Science & Business Administration",
      duration: "September 2021 - May 2025",
      desc: "How I spen(d,t) my days:",
      descBullets: [
        "Teaching Assistant: Algorithms",
        "Generate Product Development: Software Engineer",
        "Volleyball: My knees hurt",
        emoji("Longboarding: 🛹"),
      ]
    },
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle:"",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        },
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a position or project? Please reach out!",
  number: "610-597-2583",
  email_address: "li.edw@northeastern.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

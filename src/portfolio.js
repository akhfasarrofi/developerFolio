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
  username: "Zakaria Akhfas Arrofi",
  title: "Hi all, I'm Akhfas",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript or Typescript / Nextjs, Vuejs / Nodejs and some other cool libraries and frameworks. Motivated and skilled Frontend Web Developer with a proven track record of creating visual appealing and user-friendly websites. Proficient Typescript and modern frontend libraries/frameworks. Committed to delivering high-cuality and collaborating effectively with cross-functional teams. Eager to leverage expertise and creativity to contribute to meaningful projects and drive innovation"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xx_buXkYqWrN1iPJlcCdeGBtJgia2egE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akhfasarrofi",
  linkedin: "https://www.linkedin.com/in/dopassss/",
  gmail: "zakaria_akhfas@outlook.co.id",
  medium: "https://medium.com/@zakaria.akhfas",
  stackoverflow: "https://stackoverflow.com/users/11994763/zakaria-akhfas",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Yogyakarta Technology University",
      logo: require("./assets/images/uty.png"),
      subHeader: "Bachelor of Informatics",
      duration: "September 2015 - April 2020",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Komerce",
      companylogo: require("./assets/images/komerce.png"),
      date: "Mei 2022 – Present",
      desc: "A leading tech-startup company in Central Java. Advancing SMEs by becoming an end-to-end e-commerce enabler for them. As a Frontend Web Developer, i have responsibilities as below",
      descBullets: [
        "Optimized website performance by reducing the number of requests and increasing page speed.",
        "Integrated a payment system that allowed customers to easily pay for products or services online.",
        "Created a user authentication system that improved security and user privacy.",
        "Utilized HTMLX, CSSX, and JavaScript to create a dynamic, interactive user interface that improved user experience."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Agri Sparta Indonesia",
      companylogo: require("./assets/images/agrisparta.jpeg"),
      date: "October 2023 – March 2024",
      desc: "Revolutionizes Indonesian farming with seed biotechnology and AI crop monitoring, boosting rice yields, enhancing crop management, and promoting sustainable agricultural practices for a better future.",
      descBullets: [
        "Refactored existing code to improve readability and maintainability, resulting in a X% reduction in development time.",
        "Coordinated office events and meetings, resulting in a successful team-building environment.",
        "Developed a full stack web application using modern technologies such as React and Supabase.",
        "Utilized React to develop reusable components and optimize performance."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Komoverse",
      companylogo: require("./assets/images/komoverse.jpeg"),
      date: "January 2023 – September 2023",
      desc: "As one of the very first NFT-driven gaming platforms built on the Solana blockchain.",
      descBullets: [
        "Building v2 komoverse.io",
        "Developed and integrated blockchain applications with Solana extension for seamless connectivity and security.",
        "Implemented Solana extension in blockchain apps, enhancing connectivity and decentralized operations."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Koding Works",
      companylogo: require("./assets/images/kodingworks.png"),
      date: "May 2022 – August 2022",
      desc: "KodingWorks is a technology development platform.",
      descBullets: [
        "Conducted troubleshooting and routine maintenance.",
        "Integrated blockchain crypto with the payment gateway system.",
        "Maintenance single page application hotels dafam.",
      ]
    },
    {
      role: "Front-End Developer",
      company: "Aksaramaya",
      companylogo: require("./assets/images/aksaramaya.png"),
      date: "November 2020 – May 2022",
      desc: "Technology Platform Developer to Form National Digital Content Ecosystem.",
      descBullets: [
        "Develop applications based on the requirements given from the project manager",
        "Develop application school digital library."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/komads.png"),
      projectName: "Komads",
      projectDesc: "Platform dashboard to make it easier for online business people to advertise products",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://komads.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/komcards.png"),
      projectName: "Komcards",
      projectDesc: "Dashboard virtual debit card for online business",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://komcards.id"
        }
      ]
    },
    {
      image: require("./assets/images/komship.png"),
      projectName: "Komship",
      projectDesc: "Shipping platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://komship.id"
        }
      ]
    },
    {
      image: require("./assets/images/komoverse.jpeg"),
      projectName: "Komo Game Hub",
      projectDesc: "As one of the very first NFT-driven gaming platforms built on the Solana blockchain.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://komoverse.io"
        }
      ]
    },
    {
      image: require("./assets/images/pesanio.jpeg"),
      projectName: "Hotel Dafam",
      projectDesc: "Mobile web application for booking hotel",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://m.haidafam.com"
        }
      ]
    },
    {
      image: require("./assets/images/edoo.png"),
      projectName: "Edoo",
      projectDesc: "Digital School Library",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://edoo.id"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CCNA",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "dopasss", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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

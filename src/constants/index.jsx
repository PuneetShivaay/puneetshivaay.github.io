import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPython, SiJavascript, SiFirebase } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { desc, label } from "framer-motion/client";

export const NAVIGATION_LINKS = [
  { label: "Technologies", href:"#technologies"},
  // { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "PUNEET KUMAR",
  greet: "Hello there! 👋🏻",
  description:
  "Software Engineer with experience in building and optimizing web applications using React, JavaScript, and Python. Demonstrated success in improving efficiency, ensuring code quality, and leading projects. Award-winning for innovation and impactful presentations.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "TextUtils Password Generator",
    description:
      "Textutils gives you a way to analyze your text quickly and efficiently and Generate Password. Be it word count, character count & generate password etc.",
    image: projectImage1,
    githubLink: "https://github.com/PuneetShivaay/textutils",
  },
  {
    id: 2,
    name: "Magic Match Game",
    description:
      "A game to improve memory and reaction time.",
    image: projectImage2,
    githubLink: "https://puneetshivaay.github.io/Magic-Memory-Game/",
  },
  {
    id: 3,
    name: "Super Market Management System",
    description:
      "A market management application built with React and Java for efficient inventory management, including features like product boards, shopping, and admin access.",
    image: projectImage3,
    githubLink: "https://github.com/PuneetShivaay/SuperMarket-Management-System",
  },
  {
    id: 4,
    name: "Convert Website into App",
    description:
      "A flutter app that convert any websites into App without writing full website code again for app.",
    image: projectImage4,
    githubLink: "https://github.com/PuneetShivaay/Convert-Website-into-App",
  },
  {
    id: 5,
    name: "Online File Sharing Portal",
    description:
     "It is Online File Sharing Portal for sharing the files over the internet using Firebase user can access the portal using URL.",
    image: projectImage5,
    githubLink: "https://github.com/PuneetShivaay/Online-File-Sharing-Portal",
  },
  {
    id: 6,
    name: "Deep Learning Medical Chatbot",
    description:
    "It is Deep Learning based chatbot model used for medical assistance. The project is based on a Chatbot for diagnosis of diseases. All diseases have a set of associated symptoms.",
    image: projectImage6,
    githubLink: "https://github.com/PuneetShivaay/Deep-Learning-Based-Chatbot-For-Medical-Assistance",
  },
];

export const BIO = [
  "Puneet Kumar graduated with a Bachelor of Technology in Computer Science and Engineering from Dr. A.P.J. Abdul Kalam Technical University in 2020. He then immersed himself in the world of web development at Cognizant Technology Solutions for over four years, where he honed his skills in both front-end and full-stack development, working on projects for major clients like Google and Verizon.",
  "Puneet's expertise spans a wide range of technologies, including React, JavaScript, Python, Java, and Flutter, allowing him to deliver versatile and robust solutions. He is particularly adept at optimizing application performance, enhancing security, and implementing innovative features, as evidenced by his work on Chrome extensions and reusable UI components.",
  "Recognized for his impactful presentations and creative problem-solving, Puneet consistently delivers high-quality applications and fosters a collaborative team environment.",
  ,
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <SiPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "3+ year",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ year",
  },
  {
    icon: <SiFirebase className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Firebase",
    experience: "3+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "Cognizant Tech Solutions",
    duration: "jan 2022 - Present",
    description:
      " \n Client: Verizon  | \n Project: Verizon Flex Dev |\n Role: Front-End Developer |\n Duration: Jan 2025 – Present \n \n \n•  Spearheaded the development of key features and independent applications using React, JavaScript, and Tailwind CSS, directly enhancing customer support workflows and improving operational efficiency. \n \n• Engineered a reusable UI component library, resulting in a 40% reduction in development time and ensuring consistent code quality across multiple projects.\n \n•  Achieved a 99% code reliability score through the implementation of comprehensive unit testing, significantly minimizing production issues.\n \n•  Optimized cross-device compatibility and implemented responsive designs, leading to an improved user experience across all screen sizes and devices.\n \n•  Led code reviews for front-end team & mentored junior developers, fostering a culture of high code quality & knowledge sharing.\n \n•  Implemented advanced state management solutions using Redux and Context API to build complex and scalable user interfaces, enhancing application performance.\n \n• Actively participated in Agile/Scrum methodologies, contributing to sprint planning, daily stand-ups, and retrospectives to ensure timely and efficient project delivery.",
  },
  {
    title: "Software Engineer",
    company: "Yontech Solutions Pvt. Ltd ", 
    duration: "September 2020 - Dec 2021",
    description: "Client: MakeMyPath |\n Project: MakeMyPath Website & App |\n Role: Full Stack Developer |\n Duration: Mar 2021 - Dec 2021 \n \n•  Led the design, development, and successful launch of an online AI-Enabled Exam Preparation Platform, prioritizing and resolving over 45 new features and bug fixes.\n \n•  Created responsive websites and mobile apps using JavaScript, Flutter, and Python, resulting in a 20% increase in user engagement.\n \n•  Developed a mock website showcasing process and flow using HTML, CSS, and JavaScript.\n \n•  Created multiple mock e-commerce, portals and company websites prototypes with interactive features and responsive design.\n \n•  Implemented a simple web application using JavaScript frameworks like jQuery for dynamic content rendering.\n \n•  Effectively used Jira for project management, ensuring smooth workflow and task tracking.\n Client: Aptence | \n Project: Multiple Websites & Apps | \nRole: Full Stack Developer | \nDuration: Sep 2020 - Feb 2021\n \n \n•  Developed various web applications using JavaScript, Firebase, Flutter, and WordPress. \n• Utilized Python for efficient data cleaning to obtain accurate and usable data for projects. \n• Planned and developed websites from mockups using WordPress, HTML, CSS, JavaScript, Flutter, and JSON. \n• Designed, implemented, and monitored web pages and plugins (Google Firebase, Google Search Console, Google Ad Manager & Tag Manager) for continuous improvement and performance optimization. \n• Developed and maintained multiple websites, including Gangwarerdr Institute, Dekhoto News, Inventeno Consultancy, EuNext Publications, ErDr, Vertex Educations, Erdrshare Web & EMployee Portal, Kasaya Spices, mmpfilelist Portal and many more. \n• Achieved a promotion within 6 months and earned the 'Most Creative Member' title for innovative project approaches by client.",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description: "",
 },
];

export const CognizantExperience = [
  {
    title: "Software Engineer",
    company: "Cognizant Technology Solutions Ltd.",
    duration: "january 2022 - Present (3+ years)",
    description:"Got to chance work with big clients like Google, Verizon etc. Received recognizations and awards for my work and dedication.",
  }
];

export const CognizantProjectExperience = [
  {
    client: "Verizon",
    project: "4 - Verizon Flex Dev",
    role: "Front-End Developer",
    duration: "Jan 2025 – Present",
    description:
    "• Spearheaded the development of key features and independent applications using React, JavaScript, and Tailwind CSS, directly enhancing customer support workflows and improving operational efficiency. \n• Engineered a reusable UI component library, resulting in a 40% reduction in development time and ensuring consistent code quality across multiple projects. \n• Achieved a 99% code reliability score through the implementation of comprehensive unit testing, significantly minimizing production issues. \n• Optimized cross-device compatibility and implemented responsive designs, leading to an improved user experience across all screen sizes and devices. \n• Led code reviews for front-end team & mentored junior developers, fostering a culture of high code quality & knowledge sharing. \n• Implemented advanced state management solutions using Redux and Context API to build complex and scalable user interfaces, enhancing application performance. \n• Actively participated in Agile/Scrum methodologies, contributing to sprint planning, daily stand-ups, and retrospectives to ensure timely and efficient project delivery."
   },
   {
    client: "Google",
    project: "3 - Google DCR Pub Items",
    role: "Chrome Dev Specialist (Full Stack)",
    duration: "Jul 2023 - Dec 2024",
    description:
    "• Managed and enhanced over 4000+ Chrome extensions, implementing improvements that increased user engagement metrics. \n• Led the development of more than 250+ Chrome extensions, ensuring adherence to performance and security best practices. \n• Deployed 30+ projects using React, Node.js, Git, GitHub, and Cloud, streamlining the development and deployment pipeline. \n•  Migrated 100+ Chrome Extensions from MV2 to MV3, ensuring compatibility with the latest Chrome platform standards. \n• Conducted in-depth code reviews, identifying and mitigating over 500+ security vulnerabilities, enhancing the overall security posture of the extensions. \n• Proficiently utilized Google Tools to manage and optimize 40+ projects, improving efficiency and project outcomes. \n• Engineered a dynamic webpage script using Apps Script that transforms static screenshot URLs into interactive clickable links, significantly optimizing user experience. \n• Transformed static documentation from Google Docs to a dynamic Google website using Apps Script, improving accessibility and maintainability. \n• Awarded the Cognizant 'Cheers Award' for impactful presentations, enhancing team knowledge by 20%.",
   },
    {
      client: "Google",
      project: "2 - Google Appeals Developer",
      role: ": Chrome Web Store Specialist (Front End)",
      duration: "Jul 2022 - June 2023",
      description:
      "• Proactively communicated extension-related queries and emerging malware trends to clients, ensuring timely information dissemination and proactive security measures. \n• Analyzed and presented extension query data and recent malware scenarios to inform client security posture and guide decision making. \n• Collaborated effectively with clients to understand and address their security concerns related to Chrome extensions, utilizing Google Tools (Buganizer) for issue tracking and resolution. \n• Engineered an Apps Script to dynamically convert static screenshot URLs into interactive links, optimizing user experience and navigation for Chrome Web Store users. \n• Developed an Apps Script-driven website that autonomously retrieves and integrates extension details from Google Docs, streamlining information access for stakeholders and improving efficiency. \n• Technologies used: Visual Studio Code, Online Code Editors, Apps Script.",
   },
   {
    client: "Cognizant",
      project: "1 - Cognizant Internal Project",
      role: ": Full Stack Developer",
      duration: "Jan 2022 - June 2022",
      description:
      "• Developed a full-stack retail application using React for the front-end and Java for the back-end. \n• Designed and implemented intuitive user interfaces (UI) with HTML and CSS, ensuring a seamless and engaging user experience across multiple devices. \n• Integrated key features such as product catalogs, shopping carts, user authentication, and payment gateways to enhance the customer shopping experience. \n• Implemented dynamic data fetching & asynchronous communication with RESTful APIs to improve application responsiveness. \n• Utilized cloud computing platform for application deployment & management, ensuring scalability, reliability and cost-efficiency. \n• Collaborated closely with stakeholders to gather requirements, define project scope, and prioritize features, delivering solutions aligned with critical business objectives.",
   },
];

export const YontechExperience = [
  {
    title: "Software Engineer",
    company: "Yontech Tech Solutions",
    duration: "September 2020 - December 2021 (1+ year)",
    description:"Started my IT journey from here, working with closely to founder and directors to develop and maintain multiple websites and applications. ",
  }
];

export const YontechProjectExperience = [

   {
   client: "MakeMyPath",
    project: "2 - MakeMyPath Website & App",
    role: "Full Stack Developer",
    duration: "Mar 2021 - Dec 2021",
    description:"• Led the design, development, and successful launch of an online AI-Enabled Exam Preparation Platform, prioritizing and resolving over 45 new features and bug fixes. \n• Created responsive websites and mobile apps using JavaScript, Flutter, and Python, resulting in a 20% increase in user engagement. \n• Developed a mock website showcasing process and flow using HTML, CSS, and JavaScript. \n• Created multiple mock e-commerce, portals and company websites prototypes with interactive features and responsive design. \n• Implemented a simple web application using JavaScript frameworks like jQuery for dynamic content rendering. \n• Effectively used Jira for project management, ensuring smooth workflow and task tracking."
  },
  {
    client: "Aptence",
    project: "1 - Multiple Websites & Apps",
    role: "Full Stack Developer",
    duration: "Sep 2020 - Feb 2021",
    description:
    "• Developed various web applications using JavaScript, Firebase, Flutter, and WordPress. \n• Utilized Python for efficient data cleaning to obtain accurate and usable data for projects. \n• Planned and developed websites from mockups using WordPress, HTML, CSS, JavaScript, Flutter, and JSON. \n• Designed, implemented, and monitored web pages and plugins (Google Firebase, Google Search Console, Google Ad Manager & Tag Manager) for continuous improvement and performance optimization. \n• Developed and maintained multiple websites, including Gangwarerdr Institute, Dekhoto News, Inventeno Consultancy, EuNext Publications, ErDr, Vertex Educations, Erdrshare Web & EMployee Portal, Kasaya Spices, mmpfilelist Portal and many more. \n• Achieved a promotion within 6 months and earned the 'Most Creative Member' title for innovative project approaches by client.",
   },
]

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in  Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    duration: "August 2016 - September 2020",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and WordPress. Completed a project on developing a Deep Learning based Chatbot for Medical Assistance. Using Python, TensorFlow, Pandas.",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Uttar Pradesh State Board",
    duration: "July 2014 - June 2016",
    description:
    "Got 1st Prize in Public Speaking by State Bank of India(2015) and 2nd Prize in School Cricket Match (2016). Involved in many activities like School Play and Educational Fest.",
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "Uttar Pradesh State Board",
    duration: "July 2013 - June 2014",
    description:
    "Received award of execellence for securing 97 Marks in English and being top performer in the academics.",
  },

];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/puneetshivaay/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/PuneetShivaay",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/puneetshivaay/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/puneetshivaay/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/PuneetShivaay",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/PuneetShivaay",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },

];

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  flask,
  django,
  hydra,
  twowaits,
  aspire,
  logo,
  textutils,
  crowdfunding,
  notesapp,
  weatherio,
  credclone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Co-Founder | Design & Tech Lead",
    company_name: "H.Y.D.R.A Trust",
    icon: hydra,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Feb 2021",
    points: [
      "Organized events like MUNs, debates, webinars, and awareness programs to create social, economic, and political awareness among youth.",
      "Designed and created visual assets, user interfaces, and graphics for digital and print media.",
      "Collaborated with cross-functional teams to develop and implement design projects, ensuring adherence to brand guidelines and user experience principles.",
      "Managed technology projects and systems, overseeing planning, execution, and timely delivery within allocated budgets.",
    ],
  },
  {
    title: "Software Trainee",
    company_name: "TwoWaits Technologies",
    icon: twowaits,
    iconBg: "#383E56",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Actively contributed to software development projects, collaborating with the team in designing, coding, testing, and debugging software applications.",
      "Assisted in identifying and resolving software bugs and issues, ensuring high-quality deliverables and contributing to troubleshooting efforts.",
      "Engaged in continuous learning and skill development, staying updated with the latest trends and technologies in software development.",
      "Supported the quality assurance process by performing software testing, creating test plans, and maintaining organized documentation of code and project-related information."
    ],
  },
  {
    title: "Aspire Leadership Program",
    company_name: "Aspire Institute by Harvard University",
    icon: aspire,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Oct 2022",
    points: [
      "Participated in the Aspire Leadership Program, focusing on leadership skills and professional growth.",
      "Collaborated with diverse trainees and mentors to develop competencies in communication, problem-solving, and decision-making.",
      "Actively engaged in training sessions, workshops, and experiential learning for personal and professional development.",
      "Practiced self-reflection, received feedback, and continuously improved leadership abilities with guidance from mentors and program leaders."
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Self Employed",
    icon: logo,
    iconBg: "#383E56",
    date: "Mar 2019 - Present",
    points: [
      "Developed and maintained websites using diverse programming languages, frameworks, and content management systems.",
      "Collaborated closely with clients to gather requirements, align design and functionality, and clarify project objectives.",
      "Implemented responsive and user-friendly designs for optimal performance across various devices and browsers.",
      "Managed project timelines, budgets, and deliverables independently, maintaining effective client communication throughout the development process."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crowdfunding D-App",
    description:
      "Crowdfunding application with blockchain technology that provides a transparent, secure, and accessible platform for entrepreneurs, startups, and social projects to raise funds while increasing transparency, security, and accountability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "ethersjs",
        color: "orange-text-gradient",
      },
      {
        name: "thirdweb",
        color: "yellow-text-gradient",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/blaze1402/CrowdfundingDapp",
    preview_link: "https://crowdfunding-dapp-blaze.vercel.app/"
  },
  {
    name: "TextUtils",
    description:
      "TextUtils is a versatile web application that offers various text manipulation and analysis tools to enhance productivity and streamline text-related tasks.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/blaze1402/textutils",
    preview_link: "https://textutils-sage.vercel.app/"
  },
  {
    name: "NotesApp",
    description:
      "An intuitive note-taking web app with secure login and anonymous usage options, allowing users to create, edit, and delete their notes effortlessly.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: notesapp,
    source_code_link: "https://github.com/blaze1402/NotesApp",
    preview_link: "https://notesapp-.up.railway.app/"
  },
  {
    name: "Weather IO",
    description:
      "Weatherio app provides comprehensive weather information, including AQI, sunrise-sunset times, humidity, pressure, visibility, and both current day and 5-day forecast using the OpenWeather API.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weatherio,
    source_code_link: "https://github.com/blaze1402/WeatherApp",
    preview_link: "https://weatherio-app.vercel.app/"
  },
  {
    name: "CredClub Clone App",
    description:
      "A meticulously crafted CredClub website replica featuring a visually captivating interface, mirroring the original design with precision and attention to detail.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: credclone,
    source_code_link: "https://github.com/blaze1402/CredClubClone",
    preview_link: "https://cred-club-clone.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
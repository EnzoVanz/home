// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Enzo",
  middleName: "",
  lastName: "Vanzuita",
  message: " Materials Engineer | Researcher | Bussiness Intelligence Analyst",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/EnzoVanz",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/enzovanz/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/enzo-vanzuita/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/enzovanzuita.jpeg"),
  imageSize: 375,
  message:
    "Hi, I'm Enzo Vanzuita Piazera, a 2024 graduate in Materials Science and Engineering from the Federal University of Santa Catarina. Throughout my academic and professional journey, I developed a strong passion for computing and data. This newfound interest has led me to pursue opportunities in data engineering and data science. I am eager to leverage my skills and knowledge to solve complex problems and make new contributions.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "EnzoVanz", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/enzovanzuita.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/enzovanzuita.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 30 },
    { name: "SQL", value: 30 },
    { name: "Data Structures", value: 10 },
    { name: "BI Tools", value: 10 },
    { name: "Machine Learning", value: 10 },
    { name: "Git", value: 10 },
    { name: "Docker", value: 10 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "enzovanzuita@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Researcher',// Here Add Company Name
      companylogo: require('../assets/img/labmat.png'),
      date: 'Jan 2019 – Mar 2021 / jan 2022 - oct 2023',
    },
    {
      role: 'Product Development Intern',
      companylogo: require('../assets/img/schulz.png'),
      date: 'May 2021 – Dec 2021',
    },
    {
      role: 'Researcher',
      companylogo: require('../assets/img/MRM.png'),
      date: 'Oct 2023 – Apr 2024',
    },
    {
      role: 'Bussiness Intelligence Consultant',
      companylogo: require('../assets/img/GGI.jpg'),
      date: 'May 2024 – Aug 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

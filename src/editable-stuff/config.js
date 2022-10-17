// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shivam",
  middleName: "",
  lastName: "Agnihotri",
  message: " Passionate about Leveraging Technological advances for the betterment of Society! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AgnihotriShivam",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/shivam.agnihotri.12",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/agnishivam/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shivamagnihotri0310/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/prasannabh/",
    // },
    {
      image: "fa-whatsapp",
      url: "https://wa.me/917066145884",
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
  imageLink: require("../editable-stuff/shivam1.jpg"),
  imageSize: 375,
  message:
      "Hi I am Shivam Agnihotri. 6+ years of Complete hands on experience on various skills like AWS services (multiple account management), Python(boto3), Docker/ECS Kubernatics/EKS . Having experience on CI/CD pipelines for code deployment using Git, Code Pipeline, Jenkins, Terraform, Terratest, Bitbucket and Linux administration.",
  resume: "https://drive.google.com/file/d/1ohn4-aP5XQB25U1uUX0CKWorrV4NYOcP/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AgnihotriShivam",
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
      img: require("../editable-stuff/shivam2.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/shivam1.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Global Payments Inc. - Sr. DevOps Engineer',
      companylogo: require('../assets/img/gpay.png'),
      date: 'Feb 2022 – Present',
    },
    
    {
      role: 'Birla soft - Sr. Consultant',
      companylogo: require('../assets/img/bcl.png'),
      date: 'Jan 2020 – Present',
    },

    {
      role: 'T- Systems - Consultant',
      companylogo: require('../assets/img/tsystems1.png'),
      date: 'Feb 2018 – Sept 2019',
    },

    {
      role: 'Blazeclan technologies - Cloud Engineer',
      companylogo: require('../assets/img/blazeclan.jpg'),
      date: 'Sept 2016 - Feb 2018',
    },
  ]
}

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  awsSkills: [
    { name: "AWS EC2", value: 90 },
    { name: "AWS S3", value: 95 },
    { name: "AWS VPC", value: 85 },
    { name: "AWS Route53", value: 82 },
    { name: "IAM", value: 90 },
    { name: "AWS Security Groups", value: 90},
    { name: "AWS ELB", value: 85 },
    { name: "AWS ACM", value: 80 },
    { name: "AWS RDS", value: 85 },
    { name: "AWS ECS", value: 80 },
    { name: "AWS EKS", value: 75 },
    { name: "AWS Farate", value: 85 },
    { name: "AWS WAR", value: 80 },
    { name: "AWS Code Build", value: 90 },
  ],
  devopsSkills: [
    { name: "CICD", value: 98 },
    { name: "AZURE", value: 75 },
    { name: "Google Cloud Platform", value: 70 },
    { name: "OpenStack", value: 75 },
    { name: "Git", value: 85 },
    { name: "Code Commit", value: 80 },
    { name: "Code PipeLine", value: 85 },
    { name: "Jenkins", value: 90 },
    { name: "Terraform", value: 85 },
    { name: "Linux Administrator", value: 85 },
    { name: "Docker", value: 75 },
    { name: "Kubernetes", value: 75 },
    { name: "Shell Scripting", value: 85 },
  ],
  techSkills: [
    { name: "Python", value: 80 },
    { name: "Boto3", value: 80 },
    { name: "MySQL", value: 90 },
    { name: "JSON", value: 75 },
    { name: "YAML", value: 75 },
    { name: "DataBases", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me ☎️",
  message:
    "Discuss a project or just want to say hi? My Inbox is open for all:",
  email: "agnihotrishivam@rocketmail.com",
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

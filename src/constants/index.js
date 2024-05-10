import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  link,
  ama,
  center,
  cara,
  ontheside,
  threejs,
  three,
  amazon,
  dalle,
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
  {
    idk: "download",
    titlem: "Download CV",
    
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Business Analyst",
    icon: mobile,
  },

  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Smartz Ent Management Crew",
    icon: center,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Analyze the Procurement and income data to determine the relationship between the income and expenditure",
      "Implemented a new reporting using Excel Pivot and VBA which help reduced processing time by 50%",
      "Generated three process reports weekly for continuous accounts for financial and developmental analysis",
      "Gathered and cleaned large datasets to generate insights and recommendations",
      "Developed visualizations to communicate data trends to key stakeholders effectively",
      "Conducted statistical analysis to identify patterns and correlations in data",
      "Collaborated with cross-functional teams to improve data quality and streamline processes",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Freelancing. Texas, USA",
    icon: ama,
    iconBg: "#E6DEDD",
    date: "Nov 2023-Dec 2023",
    points: [
      "Created an AIRLINE SATISFACTORY SURVEY DASHBOARD with PowerBI to help client determine the airline customers satisfactory metrics with their company",
      "Transformed and processed client's data by using DAX and Excel to ensure data completeness and validity",
      "Provided technical insights on how the client can fully utilize their data by introducing different technologies",
      "Consulted with client to determine the best metrics to be displayed on final product",
      "Gathered and cleaned large datasets to generate insights and recommendations",
      "Conducted statistical analysis to identify patterns and correlations in data",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "SpringUp-Tech-Africa Limited",
    icon: cara,
    iconBg: "#383E56",
    date: "Frelance",
    points: [
      "Extracted, cleaned, and transformed large datasets from multiple sources for analysis..",
      "Conducted data analysis to identify trends and patterns for business insights.",
      "Utilized statistical models to forecast and optimize strategies for decision-making.",
      "Created data visualizations and reports to communicate findings to stakeholders effectively.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Virtual client– Ontario",
    icon: ama,
    iconBg: "#E6DEDD",
    date: "March 2024",
    points: [
      "Utilized Excel and DAX to extract data from 8 different related tables from clients Data sets",
      "Utilized SQL to combine the  tables using JOIN and VIEW",
      "Loaded and visualized data with Tableau to professionally tp create the HR Attrition requested by client",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to hire a Data Analyst who is dilligent and result oriented, but Queen proved me wrong.",
    name: "Mrs Doris",
    designation: "HRM",
    company: "SEMAC",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a Data Analyst who truly cares about their clients' success like Queen does.",
    name: "Mr Albert",
    designation: "Client",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Queen Analized and Visualized our Data, we had a clear information and representation on the areas we need to improve on our services. We can't thank him enough!",
    name: "Lisa",
    designation: "GM",
    company: "SpringUp-Tech-Africa",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SALES REVENUE DASHBOARD",
    description:
      "Created a dashboard with PowerBI to indicate the revenue by different demographics and also the revenue by each sales rep,Utilized Excel and DAX  to perform the data cleaning, formatting and  analysis on Data set",
    tags: [
      {
        name: "Excell",
        color: "blue-text-gradient",
      },
      {
        name: "DAX",
        color: "green-text-gradient",
      },
      {
        name: "PowerBi",
        color: "pink-text-gradient",
      },
    ],
    image: three,
    url: "https://threejscustomizer-rt.vercel.app/",
    urlImg: link,
    source_code_link:
      "https://github.com/Officialsmartz/My-Data-Analyst-Portfolio.git",
  },
  {
    name: "AIRLINE SATISFACTORY SURVEY DASHBOARD ",
    description:
      "Created a dashboard with PowerBI to help client determine the airline customers satisfactory metrics with their company ,Transformed and processed client’s data by using DAX and Excel to ensure data completeness and validity,Provided technical insights on how the client can fully utilize their data by introducing different technologies ,Consulted with client to determine the best metrics to be displayed on final product",
    tags: [
      {
        name: "Excell",
        color: "blue-text-gradient",
      },
      {
        name: "PowerBi",
        color: "green-text-gradient",
      },
    ],
    image: amazon,
    url: "https://amazon-clone-3woo.vercel.app/",
    urlImg: link,
    source_code_link:
      "https://github.com/Officialsmartz/My-Data-Analyst-Portfolio.git",
  },
  {
    name: "DATA SCIENCE JOB MARKET EDA ",
    description:
      "Utilized SQL to analyze Data Professional survey and gain insights on their demographic distributions, those who are happy with their salary and those are happy with the life work balance.,Implemented Regex techniques to comb through the job descriptions and identified the key requirements ,Aggregated and visualized the data  using PowerBI to compile a professional report",
    tags: [
      {
        name: "Sql",
        color: "blue-text-gradient",
      },
      {
        name: "PowerBi",
        color: "green-text-gradient",
      },
    ],
    image: dalle,
    urlImg: link,
    url: "https://dall-e-rose-ten.vercel.app/",
    source_code_link:
      "https://github.com/Officialsmartz/My-Data-Analyst-Portfolio.git",
  },

  {
    name: "NETFLIX ANALYTICAL DASHBOARD ",
    description:
      "Utilized SQL to extract and transform data from the Netflix data set,Transformed and filtered data by using aggregating and filtering function to improve reporting process,Loaded and visualized data with Tableau to identify the performance of the movies and series using certain parameters",
    tags: [
      {
        name: "Sql",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "green-text-gradient",
      },
      {
        name: "Dax",
        color: "pink-text-gradient",
      },
    ],
    image: ontheside,
    urlImg: link,
    url: "https://dall-e-rose-ten.vercel.app/",
    source_code_link:
      "https://github.com/Officialsmartz/My-Data-Analyst-Portfolio.git",
  },
  {
    name: "KPI DASHBOARD",
    description:
      "Utilized SQL to extract data from 8 different related tables from customer sales databases using JOIN and VIEW,Transformed and filtered data by using aggregating and filtering function to improve reporting process,Loaded and visualized data with Tableau to identify key business intelligences that can improve sales performance",
    tags: [
      {
        name: "Sql",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "green-text-gradient",
      },
    ],
    image: backend,
    urlImg: link,
    url: "https://dall-e-rose-ten.vercel.app/",
    source_code_link:
      "https://github.com/Officialsmartz/My-Data-Analyst-Portfolio.git",
  },
  {
    name: "HR ATTRITION DASHBOARD ",
    description:
      "Utilized Excel and DAX to extract data from 8 different related tables from clients Data sets, Utilized SQL to combine the  tables using JOIN and VIEW,Loaded and visualized data with Tableau to professionally meet the clients specification",
    tags: [
      {
        name: "EXCELL",
        color: "blue-text-gradient",
      },
      {
        name: "Sql",
        color: "green-text-gradient",
      },
      {
        name: "Tableau",
        color: "pink-text-gradient",
      },
      {
        name: "Dax",
        color: "blue-text-gradient",
      },
    ],
    image: ama,
    urlImg: link,
    url: "https://dall-e-rose-ten.vercel.app/",
    source_code_link:
      "https://github.com/Officialsmartz/My-Data-Analyst-Portfolio.git",
  },
];

export { services, technologies, experiences, testimonials, projects };

// "use client";

// import { ReactNode } from "react";
// import { FaGlobe, FaChartBar, FaMap, FaFileInvoiceDollar, FaCloudSun, FaCalendarAlt, FaPlane, FaUniversity } from "react-icons/fa";

// type Project = {
//   title: string;
//   date: string;
//   description: string;
//   features: string[];
//   technologies: string[];
//   github: string;
//   icon: ReactNode;
// };

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Explora",
//       date: "Oct 2024",
//       description: "A Full Stack Travel Story App enabling users to document and share travel experiences with secure authentication and personalized journals.",
//       features: ["CRUD operations", "Keyword search", "Date filters", "User favorites"],
//       technologies: ["JavaScript", "ReactJS", "MongoDB", "ExpressJS"],
//       github: "https://github.com/dshiv15/Explora",
//       icon: <FaGlobe size={30} className="text-blue-600" />,
//     },
//     {
//       title: "Wayfinder",
//       date: "Oct 2024",
//       description: "An intuitive navigation application that provides optimized routing and points of interest for travelers, featuring interactive maps and location-based recommendations.",
//       features: ["Route optimization", "Location bookmarking", "Travel time estimation", "Points of interest"],
//       technologies: ["React Native", "Google Maps API", "Node.js", "Firebase"],
//       github: "https://github.com/dshiv15/Wayfinder",
//       icon: <FaMap size={30} className="text-blue-600" />,
//     },
//     {
//       title: "Sales Data Analysis",
//       date: "Jul 2024",
//       description: "Comprehensive data visualization project that analyzes sales patterns and provides actionable business insights through interactive dashboards and detailed reports.",
//       features: ["Visual representation of sales trends", "Forecasting analysis", "Key metrics visualization", "Insights dashboard"],
//       technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
//       github: "https://github.com/dshiv15/Sales_Data_Analysis",
//       icon: <FaChartBar size={30} className="text-blue-600" />,
//     },
//     {
//       title: "FinXtract",
//       date: "May 2024",
//       description: "A financial data extraction and analysis tool that helps users manage personal finances by automatically categorizing transactions and generating spending reports.",
//       features: ["Transaction categorization", "Budget tracking", "Expense analysis", "Financial reports"],
//       technologies: ["Python", "Machine Learning", "Flask", "SQLAlchemy"],
//       github: "https://github.com/dshiv15/FinXtract",
//       icon: <FaFileInvoiceDollar size={30} className="text-blue-600" />,
//     },
//     {
//       title: "ClimaCast",
//       date: "Mar 2024",
//       description: "A weather forecasting application that provides real-time updates and detailed weather information with customizable alerts and location-based forecasts.",
//       features: ["Real-time weather updates", "Weekly forecasts", "Weather alerts", "Location tracking"],
//       technologies: ["JavaScript", "React", "Weather API", "Geolocation"],
//       github: "https://github.com/dshiv15/ClimaCast",
//       icon: <FaCloudSun size={30} className="text-blue-600" />,
//     },
//     {
//       title: "Travel Tracker",
//       date: "Nov 2023",
//       description: "A travel management application that helps users track visited locations, plan future trips, and share travel experiences with an integrated journal feature.",
//       features: ["Trip planning", "Location tracking", "Travel statistics", "Photo integration"],
//       technologies: ["React", "MongoDB", "Node.js", "Express", "Google Maps API"],
//       github: "https://github.com/dshiv15/Travel-Tracker",
//       icon: <FaCalendarAlt size={30} className="text-blue-600" />,
//     },
//     {
//       title: "Airport Management",
//       date: "Aug 2023",
//       description: "A comprehensive system for managing airport operations including flight scheduling, passenger information, and gate assignments with real-time updates.",
//       features: ["Flight tracking", "Gate management", "Passenger information", "Staff scheduling"],
//       technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs"],
//       github: "https://github.com/dshiv15/Airport-Management",
//       icon: <FaPlane size={30} className="text-blue-600" />,
//     },
//     {
//       title: "Banking Project",
//       date: "May 2023",
//       description: "A secure banking system that enables account management, transaction processing, and customer service features with robust security implementations.",
//       features: ["Account management", "Transaction processing", "Balance checking", "Insufficient funds validation"],
//       technologies: ["Java", "OOP", "Database Management", "Security Protocols"],
//       github: "https://github.com/dshiv15/Banking-Project",
//       icon: <FaUniversity size={30} className="text-blue-600" />,
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 lg:py-32">
//       <div className="text-center py-4 mb-16">
//         <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-blue-400">Projects</h3>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="p-6 flex flex-col gap-4 rounded-lg border border-blue-700 text-center cursor-pointer group hover:border-blue-400 transition duration-200"
//           >
//             <div className="mb-2">{project.icon}</div>
//             <h3 className="font-medium text-xl sm:text-2xl">{project.title}</h3>
//             <p className="text-gray-300 line-clamp-3">{project.description}</p>
//             <div className="mt-auto pt-4">
//               <a href={project.github} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
//                 View Code →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import { ReactNode } from "react";
import { useState } from "react";
import { FaGlobe, FaChartBar, FaMap, FaFileInvoiceDollar, FaCloudSun, FaCalendarAlt, FaPlane, FaUniversity } from "react-icons/fa";

type Project = {
  title: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  icon: ReactNode;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Explora",
      date: "Oct 2024",
      description: "A Full Stack Travel Story App enabling users to document and share travel experiences with secure authentication and personalized journals.",
      features: ["CRUD operations", "Keyword search", "Date filters", "User favorites"],
      technologies: ["JavaScript", "ReactJS", "MongoDB", "ExpressJS"],
      github: "https://github.com/dshiv15/Explora",
      icon: <FaGlobe size={30} className="text-blue-600" />,
    },
    {
      title: "Wayfinder",
      date: "Oct 2024",
      description: "An intuitive navigation application that provides optimized routing and points of interest for travelers, featuring interactive maps and location-based recommendations.",
      features: ["Route optimization", "Location bookmarking", "Travel time estimation", "Points of interest"],
      technologies: ["React Native", "Google Maps API", "Node.js", "Firebase"],
      github: "https://github.com/dshiv15/Wayfinder",
      icon: <FaMap size={30} className="text-blue-600" />,
    },
    {
      title: "Sales Data Analysis",
      date: "Jul 2024",
      description: "Comprehensive data visualization project that analyzes sales patterns and provides actionable business insights through interactive dashboards and detailed reports.",
      features: ["Visual representation of sales trends", "Forecasting analysis", "Key metrics visualization", "Insights dashboard"],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/dshiv15/Sales_Data_Analysis",
      icon: <FaChartBar size={30} className="text-blue-600" />,
    },
    {
      title: "FinXtract",
      date: "May 2024",
      description: "A financial data extraction and analysis tool that helps users manage personal finances by automatically categorizing transactions and generating spending reports.",
      features: ["Transaction categorization", "Budget tracking", "Expense analysis", "Financial reports"],
      technologies: ["Python", "Machine Learning", "Flask", "SQLAlchemy"],
      github: "https://github.com/dshiv15/FinXtract",
      icon: <FaFileInvoiceDollar size={30} className="text-blue-600" />,
    },
    {
      title: "ClimaCast",
      date: "Mar 2024",
      description: "A weather forecasting application that provides real-time updates and detailed weather information with customizable alerts and location-based forecasts.",
      features: ["Real-time weather updates", "Weekly forecasts", "Weather alerts", "Location tracking"],
      technologies: ["JavaScript", "React", "Weather API", "Geolocation"],
      github: "https://github.com/dshiv15/ClimaCast",
      icon: <FaCloudSun size={30} className="text-blue-600" />,
    },
    {
      title: "Travel Tracker",
      date: "Nov 2023",
      description: "A travel management application that helps users track visited locations, plan future trips, and share travel experiences with an integrated journal feature.",
      features: ["Trip planning", "Location tracking", "Travel statistics", "Photo integration"],
      technologies: ["React", "MongoDB", "Node.js", "Express", "Google Maps API"],
      github: "https://github.com/dshiv15/Travel-Tracker",
      icon: <FaCalendarAlt size={30} className="text-blue-600" />,
    },
    {
      title: "Airport Management",
      date: "Aug 2023",
      description: "A comprehensive system for managing airport operations including flight scheduling, passenger information, and gate assignments with real-time updates.",
      features: ["Flight tracking", "Gate management", "Passenger information", "Staff scheduling"],
      technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs"],
      github: "https://github.com/dshiv15/Airport-Management",
      icon: <FaPlane size={30} className="text-blue-600" />,
    },
    {
      title: "Banking Project",
      date: "May 2023",
      description: "A secure banking system that enables account management, transaction processing, and customer service features with robust security implementations.",
      features: ["Account management", "Transaction processing", "Balance checking", "Insufficient funds validation"],
      technologies: ["Java", "OOP", "Database Management", "Security Protocols"],
      github: "https://github.com/dshiv15/Banking-Project",
      icon: <FaUniversity size={30} className="text-blue-600" />,
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="text-center py-4 mb-16">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-blue-400">Projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const [readMore, setReadMore] = useState(false);
          return (
            <div
              key={index}
              className="p-6 flex flex-col gap-4 rounded-lg border border-blue-700 text-center cursor-pointer group hover:border-blue-400 transition duration-200"
            >
              <div className="mb-2">{project.icon}</div>
              <h3 className="font-medium text-xl sm:text-2xl">{project.title}</h3>
              <p className="text-gray-300 line-clamp-3">
                {readMore ? project.description : `${project.description.substring(0, 100)}...`}
              </p>
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
              <div className="mt-auto pt-4">
                <a href={project.github} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  View Code →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

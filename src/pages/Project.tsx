import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { fetchProjects } from "../services/data";


const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-dark-primaryBg text-dark-primaryText p-6 bg-image">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="lg:container mx-auto flex flex-wrap gap-6 justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.thumbnail}
            link={project.link}
            tags= {project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;





// const projects = {
//   websites: [
//     {
//       title: "Website Project 1",
//       description: "A brief description of website project 1.",
//       imgSrc: "/src/assets/co-being.jpg", // Use relative paths or imported images
//       link: "https://example.com/website1",
//     },
//     {
//       title: "Website Project 2",
//       description: "A brief description of website project 2.",
//       imgSrc: "/src/assets/co-being.jpg",
//       link: "https://example.com/website2",
//     },
//     // Add more website projects here
//   ],
//   dashboards: [
//     {
//       title: "Tableau Dashboard 1",
//       description: "A brief description of Tableau dashboard 1.",
//       imgSrc: "/src/assets/co-being.jpgg",
//       link: "https://example.com/dashboard1",
//     },
//     {
//       title: "Power BI Dashboard 1",
//       description: "A brief description of Power BI dashboard 1.",
//       imgSrc: "/src/assets/co-being.jpgg",
//       link: "https://example.com/dashboard2",
//     },
//     // Add more dashboard projects here
//   ],
//   scraping: [
//     {
//       title: "Web Scraping Project 1",
//       description: "A brief description of web scraping project 1.",
//       imgSrc: "/src/assets/co-being.jpg",
//       link: "https://example.com/scraping1",
//     },
//     {
//       title: "Web Scraping Project 2",
//       description: "A brief description of web scraping project 2.",
//       imgSrc: "/src/assets/co-being.jpg",
//       link: "https://example.com/scraping2",
//     },
//     // Add more scraping projects here
//   ],
// };

// const Project: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<'websites' | 'dashboards' | 'scraping'>('websites');
  
//     return (
//       <div className="min-h-screen bg-gray-100 p-6">
//         <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        
//         <div className="mb-6">
//           <div className="flex space-x-4 mb-4">
//             <button
//               className={`py-2 px-4 rounded-t-lg font-semibold ${activeTab === 'websites' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('websites')}
//             >
//               Website Projects
//             </button>
//             <button
//               className={`py-2 px-4 rounded-t-lg font-semibold ${activeTab === 'dashboards' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('dashboards')}
//             >
//               Dashboard Projects
//             </button>
//             <button
//               className={`py-2 px-4 rounded-t-lg font-semibold ${activeTab === 'scraping' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('scraping')}
//             >
//               Scraping Projects
//             </button>
//           </div>
  
//           <div className="bg-white p-4 rounded-b-lg shadow-md">
//             {activeTab === 'websites' && (
//               <div className="flex flex-wrap gap-6 justify-center">
//                 {projects.websites.map((project, index) => (
//                   <ProjectCard
//                     key={index}
//                     title={project.title}
//                     description={project.description}
//                     imgSrc={project.imgSrc}
//                     link={project.link}
//                   />
//                 ))}
//               </div>
//             )}
//             {activeTab === 'dashboards' && (
//               <div className="flex flex-wrap gap-6 justify-center">
//                 {projects.dashboards.map((project, index) => (
//                   <ProjectCard
//                     key={index}
//                     title={project.title}
//                     description={project.description}
//                     imgSrc={project.imgSrc}
//                     link={project.link}
//                   />
//                 ))}
//               </div>
//             )}
//             {activeTab === 'scraping' && (
//               <div className="flex flex-wrap gap-6 justify-center">
//                 {projects.scraping.map((project, index) => (
//                   <ProjectCard
//                     key={index}
//                     title={project.title}
//                     description={project.description}
//                     imgSrc={project.imgSrc}
//                     link={project.link}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Project;
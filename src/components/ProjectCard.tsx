import React, { useState } from "react";
import GitLogo from "./GitLogo";

interface Tag {
  id: number;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  tags: Tag[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgSrc,
  link,
  tags,
}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // State to toggle description

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="bg-dark-secondaryBg text-dark-primaryText rounded shadow-md overflow-hidden md:max-w-1/2 md:w-1/2">
      <div className="flex flex-col">
        <div className="">
          <img src={imgSrc} alt={title} className="w-full h-auto object-cover object-center" />
        </div>
        <div className="p-2 pr-4">
          <h3 className="text-xl text-center mb-2 font-bold">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {/* Render tags dynamically */}
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`p-4 transition-all ${
          isDescriptionVisible ? "block" : "hidden"
        }`}>
        <p className=" mb-4">{description}</p>
      </div>
      <div className="flex justify-between">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#088874] text-center p-2 w-1/2 inline-flex justify-center items-center">
          <GitLogo className="w-auto h-[1.5em] mr-2 text-white"/>
          Git Link
        </a>
        <button
          onClick={toggleDescription}
          className="hover:bg-[#088874]  focus:outline-none text-center p-2 w-1/2 ">
          {isDescriptionVisible ? "More Details ▲" : "Less Details ▼"}{" "}
          {/* Toggle arrow */}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

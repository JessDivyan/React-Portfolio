import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  techStack: string;
  imgSrc: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  techStack,
  imgSrc,
  link,
}) => {
  return (
    <div className="bg-dark-secondaryBg text-dark-primaryText rounded-sm shadow-md overflow-hidden max-w-sm opacity-75 hover:opacity-100 duration-100">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover " />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <p className="mb-4">
          <span className="font-bold">Tech Stack:</span> {techStack}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-primaryText inline-flex  p-2 hover:bg-teal-600 rounded-sm ">
          <span className="material-symbols-outlined mr-2 hover:no-underline">public</span>View Project
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;

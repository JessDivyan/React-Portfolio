import React from "react";
import PortfolioCard from "../components/PortfolioCard";

const projects = [
  {
    title: "The Co Being",
    description:
      "The Co Being Website is an e-commerce solution built on Shopify platform. The site is fully customized to showcase each product.",
    techStack: "Shopify",
    imgSrc: "src/assets/co-being.jpg", // Replace with actual image paths
    link: "https://thecobeing.com",
  },
  {
    title: "Chennaiyin FC",
    description:
      "Chennaiyin FC website is built to handle regular content updates that can be done by the client without need for coding knowledge.",
    techStack: "Wordpress",
    imgSrc: "src/assets/cfc.jpg",
    link: "https://chennaiyinfc.com",
  },
  {
    title: "kitchenJi",
    description:
      "The kitchenJi website is crafted to showcase their various products.",
    techStack: "HTML, CSS, Javascript",
    imgSrc: "src/assets/kitchenJi.jpg",
    link: "https://kitchenji.com",
  },
  {
    title: "Elisar by AVA",
    description:
      "This landing page for AVA by Elisar is used to run campaigns and promotions for their state of the art perimetry products.",
    techStack: "HTML, CSS, Javascript",
    imgSrc: "src/assets/elisarAva.jpg",
    link: "https://elisar.com/ava",
  },
  {
    title: "Tagra",
    description:
      "The Tagra by Tata International website showcases the wide range of specialty shoes.",
    techStack: "Wordpress",
    imgSrc: "src/assets/tagra.jpg",
    link: "https://tagra.in",
  },
  {
    title: "Chosen",
    description:
      "The Chosen website is an online e-commerce solution that showcases dermatology products.",
    techStack: "Shopify",
    imgSrc: "src/assets/chosen.jpg",
    link: "https://chosenstore.in",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-primaryBg text-dark-primaryText p-6 bg-image">
      <h1 className="text-4xl font-bold mb-8 text-center">Websites</h1>
      <div className="lg:container mx-auto flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imgSrc={project.imgSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

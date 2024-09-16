import React from "react";


interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {


  return (
    <nav className="flex justify-center sticky bg-card   h-10 bg-dark-secondaryBg text-dark-primaryText z-10">
      <div className="xl:container flex justify-around items-center">
        <div className="font-black text-white	">
          <a href="/">JDP</a>
        </div>
        <ul className="flex justify-around items-center ">
          {links.map((link, index) => (
            <li key={index} className="p-2 m-2 hover:font-semibold">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

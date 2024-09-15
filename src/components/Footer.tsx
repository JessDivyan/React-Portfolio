import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0f766e]/[0.7] text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/jess-divyan-pradeep/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/JessDivyan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <a
            href="mailto:jessdivyanpradeep@gmail.com"
            className="text-gray-300 hover:text-white">
            <i className="fa-solid fa-envelope fa-2x"></i>
          </a>
        </div>
        <div className="text-sm">
          <p className="text-center font-medium">Developed by Jess Divyan Pradeep</p>
          <p className="text-center mt-2">Built using</p>

          <div className="flex mx-auto justify-center text-[1.25em] mt-1">
            <i className="fa-brands fa-react"></i>
            <div className="w-[1em] h-[1em] mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                fill="#e5e7eb">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H15V15H0V0ZM10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H10C9.44772 12 9 11.5523 9 11H8C8 12.1046 8.89543 13 10 13H11C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9H10C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7H11.1667C11.6269 7 12 7.3731 12 7.83333V8H13V7.83333C13 6.82081 12.1792 6 11.1667 6H10ZM3 6H8V7H6V13H5V7H3V6Z"
                />
              </svg>
            </div>
            <div className="w-[1em] h-[1em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#e5e7eb"
                viewBox="0 0 32 32">
                <path d="M14.859 0h5.234v24.219c-2.682 0.51-4.656 0.714-6.797 0.714-6.385 0-9.714-2.885-9.714-8.427 0-5.333 3.531-8.797 9-8.797 0.849 0 1.495 0.068 2.276 0.271zM14.859 12.193c-0.568-0.193-1.167-0.286-1.766-0.276-2.651 0-4.177 1.63-4.177 4.49 0 2.786 1.458 4.313 4.146 4.313 0.578 0 1.052-0.031 1.797-0.135v-8.396zM28.417 8.078v12.13c0 4.177-0.302 6.188-1.219 7.917-0.849 1.667-1.974 2.719-4.281 3.875l-4.859-2.313c2.307-1.089 3.432-2.036 4.146-3.5 0.745-1.495 0.984-3.229 0.984-7.781v-10.328zM23.188 0.026h5.229v5.37h-5.229z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

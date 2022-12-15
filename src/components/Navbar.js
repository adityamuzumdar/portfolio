import React from "react";
function Navbar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
        <a className="text-2xl font-medium mb-4 md:mb-0 hover:text-white" href="#About">
          Aditya Muzumdar
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex">
          <a href="#skills" className="mr-5 text-l ml-4 hover:text-white">
            Skills
          </a>
          <a href="#Projects" className="mr-5 text-l hover:text-white">
            Projects
          </a>
          <a href="#Blog" className="mr-5 text-l hover:text-white">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;

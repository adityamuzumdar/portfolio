import React from "react";
import { blog } from "../data";
import { CubeIcon } from "@heroicons/react/solid";

function Blog() {
  return (
    <div id="projects">
      <div className="flex flex-col items-center text-center">
      <CubeIcon className="w-10 mb-3 m-5" />
        <h1 className="text-3xl text-white mb-3">Blog</h1>
      </div>
      <div className="flex flex-col text-center"> 
        {blog.map((topic)=>(
          <a href={topic.link}>
            <p className="text-xl border-4 border-gray-800 bg-gray-900 m-5">{topic.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
export default Blog;
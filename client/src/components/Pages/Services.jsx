import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { LayersPlus } from "lucide-react";
import { GitBranch } from "lucide-react";

export const Services = () => {
const service= [
  {
    "id": 1,
    "title": "Single Page Applications (SPAs)",
    "description": "Dynamic architecture, seamless user-flow, React Router",
    "learnMore": "Learn More",
    "icon": "react",
    "topIcon": "layers",
    "branchIcon": "branch"
  },
  {
    "id": 2,
    "title": "Component-Based Architecture",
    "description": "Reusable components, clean structure, scalable React applications",
    "learnMore": "Learn More",
    "icon": "react",
    "topIcon": "blocks",
    "branchIcon": "component"
  },
  {
    "id": 3,
    "title": "React Hooks",
    "description": "State management, side effects, reusable logic with modern React",
    "learnMore": "Learn More",
    "icon": "react",
    "topIcon": "zap",
    "branchIcon": "git"
  },
  {
    "id": 4,
    "title": "State Management",
    "description": "Manage application state efficiently using Context API and Redux",
    "learnMore": "Learn More",
    "icon": "redux",
    "topIcon": "database",
    "branchIcon": "workflow"
  },
  {
    "id": 5,
    "title": "React Router",
    "description": "Client-side routing, nested routes, dynamic navigation patterns",
    "learnMore": "Learn More",
    "icon": "react",
    "topIcon": "route",
    "branchIcon": "navigation"
  },
  {
    "id": 6,
    "title": "API Integration",
    "description": "Fetch data, handle requests, loading states and API responses",
    "learnMore": "Learn More",
    "icon": "api",
    "topIcon": "globe",
    "branchIcon": "plug"
  },
  {
    "id": 7,
    "title": "Authentication",
    "description": "Secure login, signup, protected routes and user sessions",
    "learnMore": "Learn More",
    "icon": "shield",
    "topIcon": "lock",
    "branchIcon": "user"
  },
  {
    "id": 8,
    "title": "Performance Optimization",
    "description": "Faster rendering, lazy loading, memoization and optimized bundles",
    "learnMore": "Learn More",
    "icon": "speed",
    "topIcon": "gauge",
    "branchIcon": "zap"
  },
  {
    "id": 9,
    "title": "Responsive UI Design",
    "description": "Mobile-first layouts, flexible components and modern UI patterns",
    "learnMore": "Learn More",
    "icon": "design",
    "topIcon": "monitor",
    "branchIcon": "smartphone"
  },
  {
    "id": 10,
    "title": "Modern React Ecosystem",
    "description": "Vite, TypeScript, Tailwind CSS and modern React development",
    "learnMore": "Learn More",
    "icon": "react",
    "topIcon": "layers",
    "branchIcon": "settings"
  }
]


  return (
    <div className="min-h-screen lg:pt-15 mt-10">
      <div className=" backdrop-blue-md border border-white/80 rounded-2xl p-6 shadow-[0_10px_30px_-5px-rgba(0,0,0,0.65)]">
        <h2 className="text-black py-10 text-4xl  font-bold text-center ">
          My Services
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 ">
          {service.map((data) => (
            <div
              key={data.id}
              className="bg-white/65 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_20px_35px_-5px_rgba(14,165,233,0.12)] flex flex-col justify-between "
            >
              <div className="flex justify-between pt-5">
                
                <LayersPlus /> <GitBranch />
              </div>
              <div className="py-5">
                <h2 className="">{data.title}</h2>
                <span className="text-sm text-gray-400">
                  {data.description}
                </span>
              </div>
              <div className="flex justify-between py-5 items-center ">
                <p className="hover:cursor-pointer">Learn More</p>
                <FaReact size={40} color="#61DAFB" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

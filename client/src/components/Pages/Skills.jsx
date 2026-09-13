import React, { useEffect, useState } from "react";
export const Skills = () => {
const skills=[
  {
    "id": 1,
    "category": "Frontend",
    "items": [
      {
        "id": 101,
        "name": "HTML",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        "id": 102,
        "name": "CSS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        "id": 103,
        "name": "JavaScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        "id": 104,
        "name": "React",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        "id": 105,
        "name": "Tailwind CSS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      },
      {
        "id": 106,
        "name": "Bootstrap",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        "id": 107,
        "name": "Next.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        "id": 108,
        "name": "Redux",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      },
      {
        "id": 109,
        "name": "Sass",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
      }
    ]
  },
  {
    "id": 2,
    "category": "Backend",
    "items": [
      {
        "id": 201,
        "name": "Node.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        "id": 202,
        "name": "Express.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        "id": 203,
        "name": "MongoDB",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        "id": 204,
        "name": "MySQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        "id": 205,
        "name": "PostgreSQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        "id": 206,
        "name": "Firebase",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      },
      {
        "id": 207,
        "name": "REST API",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        "id": 208,
        "name": "JWT",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        "id": 209,
        "name": "GraphQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
      }
    ]
  },
  {
    "id": 3,
    "category": "Language",
    "items": [
      {
        "id": 301,
        "name": "JavaScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        "id": 302,
        "name": "TypeScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      {
        "id": 303,
        "name": "Python",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        "id": 304,
        "name": "Java",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        "id": 305,
        "name": "C",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        "id": 306,
        "name": "C++",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      },
      {
        "id": 307,
        "name": "C#",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
      },
      {
        "id": 308,
        "name": "PHP",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        "id": 309,
        "name": "SQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      }
    ]
  },
  {
    "id": 4,
    "category": "Tools",
    "items": [
      {
        "id": 401,
        "name": "Git",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        "id": 402,
        "name": "GitHub",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        "id": 403,
        "name": "VS Code",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        "id": 404,
        "name": "Postman",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
      },
      {
        "id": 405,
        "name": "Docker",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        "id": 406,
        "name": "Figma",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      },
      {
        "id": 407,
        "name": "npm",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
      },
      {
        "id": 408,
        "name": "Vite",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
      },
      {
        "id": 409,
        "name": "Linux",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      }
    ]
  }
]
  return (
    <div className="border-green-600 sm:pt-10 lg:p-10  ">
      <h2 className="text-center text-4xl font-bold mt-15  ">SKILLS</h2>
      <p className="text-center text-xl px-5 font-sm">
        A collection of my technical skills experties honed through various
        projects and experience
      </p>
      <div className="grid grid-cols-1 gap-10 p-2 pt-15 sm:p-10 w-full h-full lg:grid-cols-2 lg:px-30   ">
     {
      skills.map((data,index)=>(
        <div key={data.id} className="border-white border-2 rounded-xl   ">
          <h2 className="text-center text-2xl pt-4 font-bold text-gray-400">
            {data.category}
          </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5 p-4  gap-3">
{data.items.map((item)=>(  <div key={item.id} className=" w-full  h-10 border rounded-lg flex items-center gap-2 "><img  className="w-1/5 rounded-lg"src={item.image} alt="" /> <span>{item.name}</span> </div>))}
        </div>
     </div>
      ))
     }
      </div>
    </div>
  );
};
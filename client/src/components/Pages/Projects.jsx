import { MoveUpRight } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import React, { useEffect, useState } from 'react'


export const Projects = () => {
const projects=[
  {
    "id": 1,
    "category": "Website",
    "title": "Restaurant Website",
    "description": "A modern restaurant website with an attractive layout, menu section, gallery, and contact information.",
    "image": "https://i.pinimg.com/1200x/36/24/34/36243402094aebeffd40b8f656e90de9.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#451a03"
  },
  {
    "id": 2,
    "category": "Website",
    "title": "Portfolio Website",
    "description": "A personal portfolio website designed to showcase skills, projects, experience, and professional information.",
    "image": "https://i.pinimg.com/1200x/8a/13/a0/8a13a0f13b675d342b7ea0537da5916c.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#1e3a8a"
  },
  {
    "id": 3,
    "category": "E-commerce",
    "title": "E-commerce Website",
    "description": "An online shopping platform with product listings, categories, product details, and a responsive shopping experience.",
    "image": "https://i.pinimg.com/736x/ab/ad/8b/abad8b43e687571349d94f1f9afd6577.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#14532d"
  },
  {
    "id": 4,
    "category": "Web App",
    "title": "Task Management App",
    "description": "A task management application that helps users create, organize, update, and track their daily tasks.",
    "image": "https://i.pinimg.com/1200x/e8/d5/65/e8d565a0f3e1a7afa585a13af73c1f5b.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#581c87"
  },
  {
    "id": 5,
    "category": "Dashboard",
    "title": "Admin Dashboard",
    "description": "A responsive admin dashboard featuring statistics, charts, user management, and important business information.",
    "image": "https://i.pinimg.com/1200x/94/a1/bd/94a1bd7dc4d4c4aad0223ae199d8c43f.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#7f1d1d"
  },
  {
    "id": 6,
    "category": "Website",
    "title": "Travel Website",
    "description": "A travel website where users can explore destinations, discover popular places, and plan their next trip.",
    "image": "https://i.pinimg.com/736x/ef/4e/78/ef4e7888fa00d452c4681e33a3d0ad8d.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#164e63"
  },
  {
    "id": 7,
    "category": "Web App",
    "title": "Weather Application",
    "description": "A weather application that provides current weather conditions, temperature, and forecast information for different locations.",
    "image": "https://i.pinimg.com/1200x/ac/40/78/ac407827c48f8ba42ab84724b56f3ea9.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#713f12"
  },
  {
    "id": 8,
    "category": "Website",
    "title": "Fitness Website",
    "description": "A fitness and workout platform featuring exercise programs, workout plans, trainer information, and health-related content.",
    "image": "https://i.pinimg.com/736x/b0/24/49/b02449e1dd078662374ac14c40c5dcf5.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#064e3b"
  },
  {
    "id": 9,
    "category": "Web App",
    "title": "Chat Application",
    "description": "A real-time chat application with a clean interface designed for users to communicate and share messages easily.",
    "image": "https://i.pinimg.com/736x/99/84/6e/99846e6865ffcc29a0557de599c6b0a0.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#312e81"
  },
  {
    "id": 10,
    "category": "Landing Page",
    "title": "Business Landing Page",
    "description": "A professional business landing page designed to present services, company information, testimonials, and contact details.",
    "image": "https://i.pinimg.com/1200x/b7/f4/60/b7f460c686c9418d508a49257adfccf3.jpg",
    "github": "#",
    "live": "#",
    "iconColor": "#ffffff",
    "iconBg": "#9a3412"
  }
]


  return (
    <div className='px-4 pt-10 lg:pt-26 sm:px-6 md:px-10'>
      <h1 className='text-4xl sm:text-3xl font-bold text-center grid grid-rows-1 gap-10'>PROJECTS</h1>
      <div className='mt-2 min-h-screen   p-4 sm:p-6 md:p-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-15 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:pb-10 lg:p-8 '>
   {
  projects.map((data,index)=>(
      <div key={data.id} className=' border-black rounded-lg hover:shadow-blue-300/50 p-4 border cursor-pointer shadow-lg '>
<div className="relative w-full h-45 overflow-hidden">
  <img
    className="w-full object-cover  h-auto"
    src={data.image}
    alt={data.title}
  />
  <MoveUpRight
    className=" 
      absolute
      bottom-4
      right-4
      w-10
      h-10
      p-3
    "
    style={{
      color:data.iconColor,backgroundColor:data.iconBg,
    }}
  />
</div>
<div><p className='pt-3'>{data.category}</p> <h2 className='font-bold'>{data.title}</h2><p className='py-5'>{data.description}</p></div>
<div className='flex justify-around w-40'>
<div className='flex gap-2 items-center '><FaGithub /> View</div>
<div className='flex gap-2 items-center '> <TbWorld />View</div>
</div>
</div>
    ))
   }
      </div>
    </div>
  )
}
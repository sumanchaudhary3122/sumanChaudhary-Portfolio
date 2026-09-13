import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




export const Footer = () => {
  return (
   <footer className="w-full bg-[#f4f2fb] text-[#15131f]">
  <div className="mx-auto max-w-295 px-5 sm:px-8 md:px-10 lg:px-12">
    
    
    <div className="py-10 sm:py-12">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex items-center gap-4">
          <div
            className="
              flex h-14 w-14 items-center justify-center
              rounded-2xl
              border border-white/80
              bg-white/70
              shadow-[0_12px_30px_-12px_rgba(60,45,140,0.3)]
              backdrop-blur-xl
            "
          >
            <FaReact className="text-4xl text-[#6552e0]" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#15131f] sm:text-2xl">
              React Developer
            </h1>
            <p className="mt-1 text-sm text-[#625f78]">
              Building modern, scalable web experiences.
            </p>
          </div>
        </div>

        <div className="hidden rounded-full border border-white/80 bg-white/60 px-5 py-2.5 text-sm text-[#625f78] shadow-[0_6px_20px_-8px_rgba(60,45,140,0.18)] backdrop-blur-md sm:block">
          Available for new projects
          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#2fbfa6] animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(47,191,166,0.8)]" />
        </div>
      </div>
    </div>

    
    <div
      className="
        grid grid-cols-1 gap-8
        border-y border-black/[0.07]
        py-10
        sm:grid-cols-2
        lg:grid-cols-4
        lg:gap-12
      "
    >
     <div>
        <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#15131f]">
          Quick Links
        </h2>

        <ul className="space-y-3 text-sm text-[#625f78]">
          {["About", "Portfolio", "Resume", "Service", "Blog", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-[#6552e0]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9c8dfb] opacity-0 transition-opacity group-hover:opacity-100" />
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      <div>
        <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#15131f]">
          Core Tech Stacks
        </h2>

        <ul className="space-y-3 text-sm text-[#625f78]">
          <li className="transition-colors hover:text-[#6552e0]">
            Component Library
          </li>
          <li className="transition-colors hover:text-[#6552e0]">
            SaaS Dashboard
          </li>
          <li className="transition-colors hover:text-[#6552e0]">
            E-commerce App
          </li>
          <li className="transition-colors hover:text-[#6552e0]">
            Portfolio Site
          </li>
          <li className="transition-colors hover:text-[#6552e0]">
            EMS
          </li>
          <li className="transition-colors hover:text-[#6552e0]">
            Card UI
          </li>
        </ul>
      </div>

    
      <div>
        <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#15131f]">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "Redux",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-white/80
                bg-white/65
                px-3.5 py-1.5
                text-xs font-medium
                text-[#625f78]
                shadow-[0_4px_14px_-8px_rgba(60,45,140,0.3)]
                backdrop-blur-md
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-[#9c8dfb]
                hover:text-[#6552e0]
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

   
      <div>
        <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#15131f]">
          Get in Touch
        </h2>

        <ul className="space-y-3 text-sm text-[#625f78]">
          <li>
            <a
              href="mailto:suman2026@email.com"
              className="transition-colors hover:text-[#6552e0]"
            >
              suman2026@email.com
            </a>
          </li>

          <li>
            <a
              href="tel:+9779803637250"
              className="transition-colors hover:text-[#6552e0]"
            >
              +977-9803637250
            </a>
          </li>

          <li className="text-[#625f78]">Kathmandu, Nepal</li>
        </ul>
      </div>
    </div>

  
    <div
      className="
        flex flex-col gap-8
        py-9
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
     
      <div>
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#15131f]">
          Connect With Me
        </h2>

        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-white/80
              bg-white/65
              text-xl text-[#625f78]
              shadow-[0_6px_20px_-8px_rgba(60,45,140,0.25)]
              backdrop-blur-md
              transition-all duration-200
              hover:-translate-y-1
              hover:bg-[#6552e0]
              hover:text-white
            "
          >
            <FaFacebookSquare />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-white/80
              bg-white/65
              text-xl text-[#625f78]
              shadow-[0_6px_20px_-8px_rgba(60,45,140,0.25)]
              backdrop-blur-md
              transition-all duration-200
              hover:-translate-y-1
              hover:bg-[#e1306c]
              hover:text-white
            "
          >
            <FaInstagramSquare />
          </a>

          <a
            href="#"
            aria-label="X"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-white/80
              bg-white/65
              text-xl text-[#625f78]
              shadow-[0_6px_20px_-8px_rgba(60,45,140,0.25)]
              backdrop-blur-md
              transition-all duration-200
              hover:-translate-y-1
              hover:bg-[#15131f]
              hover:text-white
            "
          >
            <FaSquareXTwitter />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-white/80
              bg-white/65
              text-xl text-[#625f78]
              shadow-[0_6px_20px_-8px_rgba(60,45,140,0.25)]
              backdrop-blur-md
              transition-all duration-200
              hover:-translate-y-1
              hover:bg-[#1da1f2]
              hover:text-white
            "
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            aria-label="GitHub"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-white/80
              bg-white/65
              text-xl text-[#625f78]
              shadow-[0_6px_20px_-8px_rgba(60,45,140,0.25)]
              backdrop-blur-md
              transition-all duration-200
              hover:-translate-y-1
              hover:bg-[#15131f]
              hover:text-white
            "
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>

      
      <div className="w-full lg:max-w-md">
        <label className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#15131f]">
          Stay Updated
        </label>

        <div
          className="
            flex flex-col gap-2
            rounded-2xl
            border border-white/80
            bg-white/55
            p-2
            shadow-[0_12px_30px_-16px_rgba(60,45,140,0.35)]
            backdrop-blur-xl
            sm:flex-row
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              min-w-0
              flex-1
              bg-transparent
              px-3
              py-2.5
              text-sm
              text-[#15131f]
              outline-none
              placeholder:text-[#9b98b0]
            "
          />

          <button
            className="
              rounded-xl
              bg-[#6552e0]
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_18px_-8px_rgba(101,82,224,0.7)]
              transition-all
              duration-200
              hover:bg-[#4a3ab8]
              hover:shadow-[0_12px_22px_-8px_rgba(101,82,224,0.8)]
              active:scale-95
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>


  <div
    className="
      border-t border-black/[0.07]
      bg-white/30
      px-5
      py-5
      text-center
      text-xs
      text-[#9b98b0]
      backdrop-blur-md
      sm:text-sm
    "
  >
    © 2026–2030 Suman. All Rights Reserved.
  </div>
</footer>

  );
};
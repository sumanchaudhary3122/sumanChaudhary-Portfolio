import { MoveUpRight } from "lucide-react";
import Typewriter from "typewriter-effect";
export const Home = () => {
  return (
    <section className="w-full pt-5 px-5 lg:pt-10 sm:px-8  md:px-12 lg:px-20  flex ">
      <div className="w-full max-w-16xl xl:w-screen md:mb-10 mx-auto">
        <div className="w-full lg:w-3/4">
          <p className="pt-4 max-[1090px]:mt-10  md:pt-14 text-lg sm:text-xl md:text-2xl text-[#6552E0]">
            Hello, I'm 😊
          </p>
          <div className="flex flex-col mt-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#6552E0] to-[#9C8DFB] bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "React Developer",
                    "JS Developer!",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="max-w-2xl py-6 md:py-10 text-base sm:text-lg md:text-xl leading-relaxed text-gray-500">
              Hi! I’m a React Web Developer passionate about building
              responsive, user-friendly, and modern web applications. I work
              with React, JavaScript, HTML, CSS, and APIs to create clean and
              efficient web experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row py-4 md:py-8 gap-4">
            <a
              href="#projects"
              className="
                w-full sm:w-auto
                flex items-center justify-center
                bg-[#6552E0]
                gap-2
                shadow-2xl
                text-white
                rounded-full
                px-6
                py-4
                hover:bg-[#5542cf]
                transition-colors
              "
            >
              <span className="text-base sm:text-lg">View my Projects</span>
              <MoveUpRight className="w-5 h-5" />
            </a>
            <a
              
              className="
                w-full sm:w-auto
                flex items-center justify-center
                gap-2
                bg-white
                text-black
                border
                border-gray-200
                rounded-full
                px-6
                py-4
                hover:bg-gray-100
                transition-colors
              "
               href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="SumanChaudhary-CV.pdf"
            >
              <span
                className="text-base sm:text-lg"
              >
                Download my CV
              </span>
              <MoveUpRight className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-10 md:mt-16 ">
            <h2 className="text-sm sm:text-base md:text-xl text-gray-400 font-medium tracking-wide">
              TRUSTED BY TEAMS AT
            </h2>
            <div
              className="
              flex
              flex-wrap
              gap-x-6
              gap-y-4
              sm:gap-x-8
              md:gap-x-10
              mt-5
              text-sm
              sm:text-base
              md:text-lg
              text-gray-400
            "
            >
              <span>Google</span>
              <span>Microsoft</span>
              <span>Airbnb</span>
              <span>HubSpot</span>
              <span>Dribbble</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full max-[1250px]:hidden mt-3 max-w-md lg:max-w-lg aspect-4/5 flex items-center justify-center p-4 lg:pt-12">
        <div className="absolute inset-0 bg-purple-300/40 blur-3xl rounded-full " />
        <div className="relative w-full h-full rounded-[2.5rem] bg-white/30 backdrop-blur-2xl border border-white/60 shadow-xl flex items-center justify-center overflow-visible">
          <img
            className="p-10  "
            src="https://i.pinimg.com/736x/ea/2b/2a/ea2b2aff67bac0fe7c3c2b705590d002.jp"
            alt=""
          />
          <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-white/80 z-20">
            <p className="text-xl font-bold text-gray-900 leading-none">5+</p>
            <p className="text-[11px] font-medium text-gray-400 mt-1">
              Years of Experience
            </p>
          </div>
          <div className="select-none text-center">
            <span className="font-serif text-8xl md:text-9xl font-light text-purple-300/60 tracking-widest"></span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-white/80 z-20">
            <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-0.5">
              Design Impact
            </p>
            <p className="text-lg font-extrabold text-emerald-400 leading-none">
              +120%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
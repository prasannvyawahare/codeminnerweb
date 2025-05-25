import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import openui from "../assets/company/openui.png";
import printhub from "../assets/company/printhub.png";
import rccpl from "../assets/company/rccpl.png";
import datatech from "../assets/company/data_tech.png";
import divine_talk_logo from "../assets/company/divine_talk_logo.png";
const techLogos = [
  { name: "OpenUI", src: openui },
  { name: "PrintHub", src: printhub },
  { name: "RCCPL", src: rccpl },
  { name: "Data-Tech", src: datatech },
  { name: "Devine Talk", src: divine_talk_logo },
];

// eslint-disable-next-line react/prop-types
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 10);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
      {count}
      {suffix}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen py-2">
      <BackgroundBeamsWithCollision>
        <div className="relative min-h-[calc(50vh-5rem)] flex flex-col items-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-900/0 to-neutral-900/0" />

          {/* Content */}
          <div className="flex flex-col items-center mt-1 py-5 px-5 sm:px-20 z-10 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center leading-tight">
              <div>TheCodeMinners</div>
              <div className="text-5xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text leading-snug">
                Mining the Depths of Digital Solutions.
              </div>
            </h1>
            <p className="mt-10 text-lg text-neutral-400 max-w-4xl">
              Happy Clients
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full py-6 z-10">
            <div className="flex justify-end overflow-hidden">
              <div className="flex space-x-10 px-10">
                {techLogos.map((tech, i) => (
                  <div
                    key={i}
                    className="min-w-[150px] bg-neutral-800 px-6 py-4 rounded-xl text-center shadow-md flex items-center justify-center"
                  >
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Counters Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
            <div className="text-center">
              <Counter target="98" suffix="%" />
              <p className="text-neutral-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <Counter target="10" suffix="+" />
              <p className="text-neutral-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <Counter target="10" suffix="+" />
              <p className="text-neutral-400">Team Members</p>
            </div>
            <div className="text-center">
              <Counter target="15" suffix="+" />
              <p className="text-neutral-400">Team Experience</p>
            </div>
          </div>

          {/* Scroll animation style

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 20s linear infinite;
            }
          `}</style> */}
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default HeroSection;

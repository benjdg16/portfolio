import { useLayoutEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeIt from "typeit-react";
import { FaArrowCircleDown } from "react-icons/fa";

import "./Experience.css";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  const experienceRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const element = experienceRef.current;

      if (element) {
        gsap.fromTo(
          element,
          {
            // opacity: 0,
            // y: -20,
          },
          {
            // opacity: 1,
            // y: 0,
            scrollTrigger: {
              trigger: element,
              start: "top top",
              end: "bottom center",
              scrub: true,
              markers: true,
            },
          }
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="experience" ref={experienceRef}>
      <section id="experience1" className="experience-card"></section>
      <section id="experience2" className="experience-card"></section>
      <section id="experience3" className="experience-card"></section>
    </section>
  );
};

export default Experience;

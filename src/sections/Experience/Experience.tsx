import { useLayoutEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeIt from "typeit-react";
import { FaArrowCircleDown } from "react-icons/fa";

import "./Experience.css";

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const experienceCardContainerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".experience-card");

      if (experienceCardContainerRef.current) {
        // gsap.to(sections, {
        //   xPercent: -100 * (sections.length - 1),
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: ".experience-card-container",
        //     pin: true,
        //     scrub: 1,
        //     snap: 1 / (sections.length - 1),
        //     end: () => "+=" + experienceCardContainerRef.current?.offsetWidth,
        //     markers: true,
        //   },
        // });
      }

      // if (experienceRef.current) {
      //   gsap.fromTo(
      //     experienceRef.current,
      //     {
      //       // opacity: 0,
      //       // y: -20,
      //     },
      //     {
      //       // opacity: 1,
      //       // y: 0,
      //       scrollTrigger: {
      //         trigger: experienceRef.current,
      //         start: "top top",
      //         end: "bottom center",
      //         scrub: true,
      //         markers: true,
      //       },
      //     }
      //   );
      // }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="experience" ref={experienceRef}>
      <div className="experience-card-container">
        <section id="experience1" className="experience-card"></section>
        <section id="experience2" className="experience-card"></section>
        <section id="experience3" className="experience-card"></section>
      </div>
    </section>
  );
};

export default Experience;

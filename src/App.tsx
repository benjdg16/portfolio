import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as Section from "./sections";
import { Home } from "./sections";

import { THomeRefHandler } from "./sections/Home/Home";
import { TExperienceHandler } from "./sections/Experience/Experience";

import "./App.css";

const CLASS_HOME_HERO_SVG = ".hero-svg";

const App = () => {
  const [isExpTLVisible, setIsExpTLVisible] = useState<boolean>(false);

  const appRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<THomeRefHandler>(null);
  const experienceRef = useRef<TExperienceHandler>(null);
  // const cursor = document.querySelector(".cursor") as HTMLElement;

  // const handleCursorMouseMove = (e: MouseEvent) => {
  //   cursor.style.left = e.pageX + "px";
  //   cursor.style.top = e.pageY + "px";
  // };

  // const handleCursorClick = (e: MouseEvent) => {
  //   if (cursor.classList.contains("click")) {
  //     cursor.classList.remove("click");
  //     // Triggering a Dom Reflow
  //     void cursor.offsetWidth;
  //     cursor.classList.add("click");
  //   } else {
  //     cursor.classList.add("click");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleCursorMouseMove);

  //   window.addEventListener("click", handleCursorClick);

  //   return () => {
  //     window.removeEventListener("mousemove", handleCursorMouseMove);
  //     window.removeEventListener("click", handleCursorClick);
  //   };
  // }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-svg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: Expo.easeOut,
          stagger: {
            amount: 1,
            from: "random",
          },
          duration: 2,
        }
      );

      const items = gsap.utils.toArray(".hero-svg").map((element) => {
        return {
          element,
          transformValue: -50,
          xSet: gsap.quickSetter(element as SVGSVGElement, "x", "%"),
          ySet: gsap.quickSetter(element as SVGSVGElement, "y", "%"),
        };
      });

      gsap.ticker.add(() => {
        items.forEach((item) => {
          if (homeRef.current?.mouseCoordinates.current) {
            item.xSet(
              (homeRef.current.mouseCoordinates.current.x -
                window.innerWidth / 2) /
                100 +
                item.transformValue
            );
            item.ySet(
              (homeRef.current.mouseCoordinates.current.y -
                window.innerHeight / 2) /
                100 +
                item.transformValue
            );
          }
        });
      });

      // gsap.to("#experience", {
      //   backgroundColor: "white",
      //   scrollTrigger: {
      //     trigger: "#experience",
      //     start: "top center",
      //     end: "center bottom",
      //     scrub: 2,
      //     // markers: true,
      //     id: "experience",
      //     onEnter: () => {
      //       // setIsExpTLVisible(true);
      //       console.log("hey");
      //     },
      //     onLeave: () => {
      //       // setIsExpTLVisible(false);
      //       console.log(`bye`);
      //     },
      //   },
      //   duration: 2,
      //   immediateRender: false,
      // });
    }, appRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* <div className="cursor"></div> */}
      <div className="app" ref={appRef}>
        <div className="app-container">
          <Section.Home ref={homeRef} />
          <Section.Experience ref={experienceRef} isExpTLVisible />
          <Section.Contact />
          <Section.Footer />
        </div>
      </div>
    </>
  );
};

export default App;

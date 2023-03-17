import { useRef, useLayoutEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import * as Section from "./sections";
import { THomeRefHandler } from "./sections/Home/Home";
import { TExperienceHandler } from "./sections/Experience/Experience";

import "./App.css";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<THomeRefHandler>(null);
  const experienceRef = useRef<TExperienceHandler>(null);

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
    }, appRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* <div className="cursor"></div> */}
      <div className="app" ref={appRef}>
        <Section.Home ref={homeRef} />
        <Section.Experience ref={experienceRef} />
        <Section.Contact />
        <Section.Footer />
      </div>
    </>
  );
};

export default App;

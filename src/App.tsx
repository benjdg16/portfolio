import { useLayoutEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import NavBar from "./components/NavBar";
import * as Section from "./sections";
import { Home } from "./sections";

import { RefHandler } from "./sections/Home/Home";

import "./App.css";

const CLASS_HOME_HERO_SVG = ".hero-svg";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);
  /**
   * Home
   */
  const homeRef = useRef<RefHandler>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      const gsapAppTimeline = gsap.timeline({
        defaults: { duration: 2 },
      });

      gsapAppTimeline.fromTo(
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
        }
      );
    }, appRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="app" ref={appRef}>
      {/* <NavBar /> */}
      <div className="app-noise-overlay" />
      <div className="app-container">
        <Section.Home ref={homeRef} />
        <Section.Experience />
        {/* <div
          className="section-2"
          style={{ height: `100vh`, backgroundColor: "pink" }}
        ></div> */}
      </div>
    </div>
  );
};

export default App;

import React, {
  forwardRef,
  RefObject,
  MutableRefObject,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import TypeIt from "typeit-react";
import { FaArrowCircleDown } from "react-icons/fa";

import { ReactComponent as CssLogo } from "../../assets/stack-logos/css.svg";
import { ReactComponent as HtmlLogo } from "../../assets/stack-logos/html.svg";
import { ReactComponent as JsLogo } from "../../assets/stack-logos/js.svg";
import { ReactComponent as NextLogo } from "../../assets/stack-logos/next.svg";
import { ReactComponent as NodeLogo } from "../../assets/stack-logos/node.svg";
import { ReactComponent as ReactLogo } from "../../assets/stack-logos/react.svg";
import { ReactComponent as TsLogo } from "../../assets/stack-logos/ts.svg";
import Button from "../../components/Button";
import resumePDF from "../../assets/files/bien_joseph_de_guzman_resume.pdf";

import "./Home.css";

type TProps = {};
type THomeMouseCoordinates = {
  x: number;
  y: number;
};

export type THomeRefHandler = {
  // pressAlert: () => void;
  // inputRef: RefObject<HTMLInputElement>;
  homeRef: RefObject<HTMLElement>;
  mouseCoordinates: MutableRefObject<THomeMouseCoordinates>;
};

const Home = forwardRef<THomeRefHandler, TProps>((props, ref) => {
  const homeRef = useRef<HTMLElement>(null);
  const mouseCoordinates = useRef<THomeMouseCoordinates>({
    x: 0,
    y: 0,
  });

  useImperativeHandle(ref, () => ({
    homeRef,
    mouseCoordinates,
  }));

  const handleMouseMove = (e: MouseEvent) => {
    mouseCoordinates.current.x = e.x;
    mouseCoordinates.current.y = e.y;
  };

  useEffect(() => {
    if (homeRef.current) {
      (homeRef.current as HTMLElement).addEventListener(
        "mousemove",
        handleMouseMove
      );
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const typedHTML = () => {
    const typedString = `full-stack web developer`;
    return (
      <code className="role">
        <TypeIt
          options={{
            strings: [typedString],
            speed: 100,
            waitUntilVisible: true,
          }}
        />
      </code>
    );
  };

  return (
    <section id="home" ref={homeRef}>
      <div className="home-bg">
        <div className="home-container">
          <div className="hero-text-container">
            <span className="hero-superscript">Hello there!</span>
            <span className="hero-text">
              <h1>
                I'm <span id="name">Bien Joseph</span>
              </h1>
            </span>
            <span className="hero-subscript">
              A {typedHTML()} focusing heavy on front-end technologies. Industry
              experienced in the field for {<span id="years">5 years</span>}.
            </span>
            <Button onClick={() => console.log("hello")}>
              <a
                className="pdf-download-link"
                target="_blank"
                rel="noreferrer"
                href={resumePDF}
              >
                <span style={{ marginRight: "8px" }}>Download resume</span>
                <FaArrowCircleDown color={"#"} />
              </a>
            </Button>
          </div>
          <div className="hero-svg-container">
            <CssLogo id="css-logo" className="hero-svg" title="CSS logo" />
            <HtmlLogo id="html-logo" className="hero-svg" title="HTML logo" />
            <JsLogo id="js-logo" className="hero-svg" title="JavaScript logo" />
            <NextLogo
              id="next-logo"
              className="hero-svg"
              title="Next.js logo"
            />
            <NodeLogo id="node-logo" className="hero-svg" title="Node logo" />
            <ReactLogo
              id="react-logo"
              className="hero-svg"
              title="React.js logo"
            />
            <TsLogo id="ts-logo" className="hero-svg" title="TypeScript logo" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Home;

import NavBar from "./components/NavBar";
import * as Section from "./sections";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <div className="app-noise-overlay" />
      <div className="app-container">
        <Section.Home />
        <Section.Experience />
        <div
          className="section-2"
          style={{ height: `100vh`, backgroundColor: "pink" }}
        ></div>
      </div>
    </div>
  );
};

export default App;

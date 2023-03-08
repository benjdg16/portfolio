import NavBar from "./components/NavBar";
import * as Section from "./sections";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <div className="app-container">
        <Section.Home />
        <div className="section-2" style={{ height: `100vh` }}></div>
      </div>
    </div>
  );
};

export default App;

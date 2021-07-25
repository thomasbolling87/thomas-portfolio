import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./components/About/AboutMe";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Header/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Footer/Contact";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutme">
          <AboutMe /> 
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

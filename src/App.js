import "./App.css";
import About from "./components/about";
import Contact from "./components/Contact";
import ToolBar from "./components/toolbar";
import Policy from "./components/Policy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <ToolBar />
      <NavBar />
      <Switch>

        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

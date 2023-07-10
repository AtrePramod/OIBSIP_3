import "./App.css";
import About from "./components/about";
import ToolBar from "./components/toolbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ToolBar />
      <Switch>
        <Route path="/about" component={About} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

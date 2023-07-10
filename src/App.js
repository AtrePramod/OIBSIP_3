import "./App.css";
import { Container } from "react-bootstrap";
import ToolBar from "./components/toolbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ToolBar />
    </BrowserRouter>
  );
}

export default App;

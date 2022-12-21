import './components/styles.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home"
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Sidebar/>
      <Home/>
      </Router>
    </div>
  );
}

export default App;

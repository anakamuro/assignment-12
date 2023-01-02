import './components/styles.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home"
import Activity from "./components/Activity"
import {BrowserRouter as Router} from "react-router-dom";
import Session from './components/Session';
import Rader from "./components/Rader";
import Key from "./components/Key";
import Score from "./components/Score"

function App() {


  return (
    <div>
      <Router>
      <Navbar/>
      <Sidebar/>
      <Home/>
      <Activity/>
      <Session/>
      <Rader/>
      <Key/>
      <Score/>
      </Router> 
    </div>
  );
}

export default App;

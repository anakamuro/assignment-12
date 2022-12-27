import './components/styles.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home"
import Activity from "./components/Activity"
import {BrowserRouter as Router} from "react-router-dom";
import Session from './components/Session';
import Types from "./components/Types";
import Key from "./components/Key"

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Sidebar/>
      <Home/>
      
      
      <Activity/>
      <Session/>
      <Types/>
      <Key/>
      </Router> 
    </div>
  );
}

export default App;

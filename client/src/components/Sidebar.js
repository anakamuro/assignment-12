import React, {Component} from "react";
import {  NavLink    } from "./NavElements"
import "./styles.css";

class Sidebar extends Component {
render(){
    return (
        <>
          <div className="wrapper">
          <div className="sidebar">
                <NavLink to='/zen'>
                   <div className="zen"></div>
                </NavLink>
                <NavLink to='/swim'>
                <div className="swim"></div>
                </NavLink>
                <NavLink to='/cycle'>
                <div className="cycle"></div>
                </NavLink>
                <NavLink to='/dbell'>
                <div className="dbell"></div>
                </NavLink>
                <div className="copy" to='/'>
            Copyright, SportSee 2020
            </div>
                </div>
              
            </div>
        </>
    )
}
}

export default Sidebar;
import React, {Component} from "react";
import { Nav, NavLink, NavMenu   } from "./NavElements"
import "./styles.css";

class Navbar extends Component {
render(){
    return (
        <>
          <Nav>
          <NavMenu>
            <NavLink className="navlink" to='/'>
            <div className="running" alt="running"/>
            </NavLink>
           
                <NavLink  className="navlink" to='/home'>
                   Home 
                </NavLink>
                <NavLink  className="navlink"  to='/profile'>
                   Profile
                </NavLink>
                <NavLink  className="navlink"  to='/settings'>
                   Settings
                </NavLink>
                <NavLink to='/community'>
                   Community
                </NavLink>
            </NavMenu>
            </Nav>
        </>
    )
}
}

export default Navbar;
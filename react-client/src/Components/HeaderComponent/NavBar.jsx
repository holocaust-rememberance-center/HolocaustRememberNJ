import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { reveal as Menu } from 'react-burger-menu';
import img from '../Pics/Remember-header.jpg';
import img1 from '../Pics/menu.png';
class NavBar extends Component {
  render() {
    return (
      <div>
          <div class="titleheader">
          <img src={img} />
          </div><div class="topnav" >
            <Menu customBurgerIcon={ <img src={img1} />} >
              <a id="Home" className="menu-item" ><Link to="/">Home</Link></a>
              <a id="About" className="menu-item" ><Link to="/about">About</Link></a>
              <a id="" className="menu-item"><Link to="/beforethewar">Before the War</Link></a>
              <a id="" className="menu-item"><Link to="/kristallnacht">Kristallnacht</Link></a>
              <a id="" className="menu-item"><Link to="/peter">Stories</Link></a>
                    <ul>
                          <li><a id="" className="menu-item--small"><Link to="/peter">Peter Lederman</Link></a></li>
                          <li><a id="" className="menu-item--small"><Link to="/bea">Bea Muhlfelder</Link></a></li>
                    </ul>
              <a id="" className="menu-item"><Link to="/timeline"> Timeline</Link></a>
            </Menu>
            </div>
      </div>
    )
  }
}
export default NavBar;

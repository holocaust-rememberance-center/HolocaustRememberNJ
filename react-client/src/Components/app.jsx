import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './homepage';
import About from './about';
import BeforetheWar from './beforetheWar';
import Kristallnacht from './kristallnacht';
import Peter from './peter';
import Bea from './bea';
import VTimeline from './vTimeline';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () =><div></div>,
    main: () =><Route name="home" exact path="/" component={HomePage} />
  },
  {
    path: "/about",
    sidebar: () =><div class="head">About</div>,
    main: () =><Route exact path="/about" component={About} />
  },
  {
    path: "/beforethewar",
    sidebar: () =><div class="head">Before the War</div>,
    main: () =><Route exact path="/beforethewar" component={BeforetheWar} />
  },
  {
    path: "/kristallnacht",
    sidebar: () =><div class="head">Kristallnacht</div>,
    main: () =><Route exact path="/kristallnacht" component={Kristallnacht} />
  },
  {
    path: "/stories",
    sidebar: () =><div class="head">Stories</div>,
    main: () =><Route exact path="/stories" component={Stories} />
  },
  {
    path: "/peter",
    sidebar: () =><div class="head">Peter Lederman</div>,
    main: () =><Route exact path="/peter" component={Peter} />
  },
  {
    path: "/bea",
    sidebar: () =><div class="head">Bea Muhlfelder</div>,
    main: () =><Route exact path="/bea" component={Bea} />
  },
  {
    path: "/timeline",
    sidebar: () => <div class="head">Timeline</div>,
    main: () =><Route exact path="/timeline" component={VTimeline} />
  }

];
class App extends Component {
  showSettings (event) {
  event.preventDefault();
  }

  render() {
    return (
    <Router>
      <div class="Page">
        <div class="header">
          < NavBar/>
        </div>
        <div class="column">
          {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
              />
            ))}
        {this.props.children}
          </div>
        <div>
            <Footer/>
        </div>
      </div>



    </Router>
    )
  }
}
export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

const pStyle = {
  textAlign: 'center',
    padding: 50
};
class HomePage extends Component {
  render() {
    return (

      <div>

      <div>
      <img class= "collage"  src={require('./Pics/1.0-Home/Collage.jpg')}/>
      <div style={pStyle} >
      <h3 >Life and Loss in Germany: The 80th Anniversary of Kristallnacht</h3>
      Over half a million Jews called Germany their home in 1933. Kristallnacht, the Night of the Broken Glass, a Nazi-organized pogrom of November 1938, marked a turning point for Germany's Jews. More than half of them had left the country by 1939. Up to 180,000 German Jews were murdered. Only a small number survived. Life and Loss in Germany: The 80th Anniversary of Kristallnacht explores the thriving Jewish life in German lands and commemorates the human and material destruction during the Holocaust.
      </div>
      <div>
          <table class="front_menu">
              <tr>
                <td>
                  < div class="polaroid">
                      <Link to="/beforethewar">
                          <img src={require('./Pics/1.0-Home/Before.jpg')}alt="Before the War" />
                      </Link>
                      <div class="container">
                        <p style={{textAlign: 'center', fontWeight:'bold'}}>Before the War</p>
                      </div>
                  </div>
                </td>
                <td>
                < div class="polaroid">
                    <Link to="/peter">
                        <img src={require('./Pics/1.0-Home/Peter.jpg')} alt=" The Peter Lederman Story" />
                    </Link>
                    <div class="container">
                      <p style={{textAlign: 'center', fontWeight:'bold'}}>The Peter Lederman Story</p>
                    </div>
                </div>
                </td>
                <td>
                  < div class="polaroid">
                    <Link to="/bea">
                        <img src={require('./Pics/1.0-Home/Bea.jpg')} alt="The Bea Muhlfelder Story" />
                    </Link>
                    <div class="container">
                      <p style={{textAlign: 'center', fontWeight:'bold'}}>The Bea Muhlfelder Story</p>
                    </div>
                </div>
                </td>
                <td>
                  < div class="polaroid">
                    <Link to="/timeline">
                        <img src={require('./Pics/1.0-Home/Timeline.jpg')} alt="Timeline" />
                    </Link>
                    <div class="container">
                      <p style={{textAlign: 'center', fontWeight:'bold'}}>Timeline</p>
                    </div>
                  </div>
                </td>
              </tr>
          </table>
          {this.props.children}
      </div>
      </div>
      </div>

    )
  }
}
export default HomePage;

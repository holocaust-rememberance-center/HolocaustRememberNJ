import React, { Component } from 'react';
const pStyle = {
  textAlign: 'center',
    paddingLeft: 50,
    paddingRight:50
};
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <table style={{width:'1440'}}>
                <tr >
                    <td style={{textAlign:"left", padding:30, color:"white", fontSize:18, padding:30}}>
                        <p>Contact Us: 208 Summit Ave, Summit, NJ 07901 (908) 273-4921</p>
                        <p>Privacy Policy | Member Terms</p>
                    </td>
                    <td style={{textAlign:"right", color:"white", fontSize:18, padding:30}}>
                        <p> &copy; All rights reserved.</p>
                    </td>
                </tr>
          </table>
        </div>
      </footer>
    )
  }
}
export default Footer;

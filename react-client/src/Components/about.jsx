import React, { Component } from 'react';
const pStyle = {
  textAlign: 'justify',
  paddingLeft: 50,
  paddingRight:50,
  paddingBottom:20,
  paddingTop:20
};
import img1 from './Pics/2.0-About/abt.jpg';
class About extends Component {
  render() {
    return (
      <div class="positioning" style={pStyle} >
      <h1>About</h1>
<p>
      On behalf of the Holocaust Remembrance Center Committee, it is our pleasure to welcome you to the Temple Emanu-El Holocaust Remembrance Center (HRC) at Temple Sinai website. This project has been in the works for more than a year and we are proud to share this special dedication site with you.
      <div class="imgr">
      <img src={img1} />
      </div>
      <p>
 </p>

The Holocaust Remembrance Center helps to fulfill our obligation to "never forget" what was done to the Jewish people during the Holocaust. As the time since the Holocaust increases, it is even more important for us to make it tangible to the next generation (and future generations) that this is what was done to us. As we commemorate the 80th anniversary of Kristallnacht, we are honored that we are bringing the Emanu-El Holocaust Remembrance Center back to life in its new home at Temple Sinai.
</p>


<p>
On this site, you will see and learn about the survival stories of Peter Lederman and Bea Muhlfelder. It is also through their stories and through various artifacts that visitors to the HRC will learn about the history of German Jews. Trained docents are available to lead tours.We will invite other congregations, schools, and the community at large to spend time at the HRC.
</p>
<p>
Finally, we want to thank Bea Muhlfelder for her ongoing dedication to the HRC. It was Bea and her late husband, Lu, who started the Temple Emanu-El Holocaust Remembrance Center.  Bea has been an active member of our committee, sharing stories, ideas, and encouragement as we have worked together. You will learn more about Bea through personal journeys on this site, as well as through stories in the exhibit.  We would not be here without her.
</p>
<p>
Sincerely,
</p>
<p>
Steve Greenblatt</p>
<p>
Chair, Holocaust Remembrance Center
</p>
      </div>
    )
  }
}
export default About;

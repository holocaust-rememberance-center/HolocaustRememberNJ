import React, { Component } from 'react';
const pStyle = {
  textAlign: 'justify',
  paddingLeft: 50,
  paddingRight:50,
  paddingBottom:20,
  paddingTop:20
};
import img1 from './Pics/5.0-Stories/Bea Muhlfelder/5.0.3-Bea-Muhlfelder.jpg';
import img2 from './Pics/5.0-Stories/Bea Muhlfelder/5.0.4-Bea-Muhlfelder.jpg';

class Bea extends Component {
  render() {
    return (
      <div class="positioning" style={pStyle} >
      <h1> Bea Muhlfelder Story</h1>
      <p>Bea Muhlfelder was born in Konstanz, a small town on the border between Switzerland and Germany. Bea’s father served as a cantor at the synagogue, across the street from her house. When the temple’s rabbi left for Israel, Bea’s father assumed the rabbi’s responsibilities.
</p>
<div class="imgr">
<img src={img1} />
</div>
<p>Tragedy struck the town when a trained group of Nazis ransacked Bea’s synagogue in 1936. Bea’s parents understood that it was time to leave their town and their small business. The location of Konstanz allowed Bea’s parents to help smuggle people across the border and proved vital in her family’s efforts to escape Nazi Germany. Bea’s cousin who had emigrated to the United States earlier, facilitated their travel to the U.S. after Bea and her parents had crossed the border into Switzerland in summer 1938.

</p>
<p>After arriving in the U.S., Bea faced many challenges, the most difficult of which was learning a new language. Because of this, Bea felt like an outsider among her peers. At times, she feels this way to this day.

</p>
<p>It took many years for Bea to mend her relationship with Germany. She finally restored her connection with Germany in 1986 when she returned there for the first time since leaving 48 years earlier. The reception that she received in Konstanz was so welcoming that it convinced her late husband, Ludwig Muhlfelder, who chose not to go with her, to visit Germany a year later. While in Konstanz, Bea connected with Gunter Demnig, an artist who made it his life work to remember all those affected by the Holocaust through Stolpersteine, “stumbling blocks.” He made one to commemorate Bea’s persecution and her flight from her hometown.
<div class="imgx">
<img src={img2} />
</div>
</p>

<p>By Matt Riseman, a student in the HRC elective, 2018.
</p>
      </div>
    )
  }
}
export default Bea;

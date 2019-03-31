import React, { Component } from 'react';
const pStyle = {
  textAlign: 'justify',
  paddingLeft: 50,
  paddingRight:50,
  paddingBottom:20,
  paddingTop:20

};
class Kristallnacht extends Component {
  render() {
    return (
      <div class="positioning" style={pStyle} >
      <h1> Kristallnacht - “Night of Broken Glass”  </h1>
      <p>
      The Nazi ascent to power in 1933 spelled the demise of German Jewish life. Branded and disenfranchised, Jews became vulnerable to persecution. Violence against Jews in Greater Germany – which included annexed Austria and the Czech lands – reached its peak when Herschel Grynszpan, a young German Jew, shot a German official in Paris, France, on November 7, 1938. Grynszpan’s act of desperation following the Nazi expulsion of Polish-born Jews, his parents among them, became the Nazis’ pretext to stage an attack against Jews in Germany. On the night of November 9-10, 1938, known as Kristallnacht (the Night of the Broken Glass, the November Pogrom), Nazi units destroyed and looted countless Jewish homes and businesses, burned over 200 synagogues, killed 91 Jews, and incarcerated up to 30,000 Jewish men in concentration camps.
      Kristallnacht marked a key turning point for German Jews and a critical step in the Nazi persecution of European Jews. Terror and violence against Jews became normalized. Anti-Jewish measures intensified. The events of Kristallnacht heralded the next stage of the “Final Solution to the Jewish Question” – physical destruction of German, and of European Jews.
      </p>
      </div>
    )
  }
}
export default Kristallnacht;

import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Timeline from 'react-dual-timeline';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './menu.css';
const pStyle = {
  textAlign: 'justify',
  textAlign: 'justify',
  paddingLeft: 50,
  paddingRight:50,
  paddingBottom:20,
  paddingTop:20
};
const sty = {
  overflow:'auto'

};
// list of items
const list = [
  { name: '1933' },
  { name: '1934' },
  { name: '1935' },
  { name: '1936' },
  { name: '1937' },
  { name: '1938' },
  { name: '1939' },
  { name: '1940' },
  { name: '1941' },
  { name: '1942' },
  { name: '1943' },
  { name: '1944' },
  { name: '1945' }
];


// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div style={sty}
    className={`scroll ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = '1933';
class VTimeline extends Component {

  constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
        this.state = {selected };

        this.onSelect = key => {
        document.getElementById(key).scrollIntoView(true);
        this.setState({ selected: key });
        }

      }
      goTotop(){
        document.getElementById("top").scrollIntoView(true);
      }






  render() {
    const { selected} = this.state;
     // Create menu from items
   const menu = this.menuItems;

    return (

      <StyleRoot>
          <div class="positioning" style={pStyle}>
          <div style={{display:"flex", flexDirection:"row", padding:0}}>
              <div style={{paddingLeft:30, paddingRight:5}}><a id="Home" className="menu-item"><Link to="/" ><img src={require('./Pics/home.png')} alt="Home" style={{width:25, height:25, paddingRight:5}}/> Home</Link></a> > Timeline</div>
          </div>
            <h1 id="top">Timeline</h1>

              <table class="anchormenu">
              <td class="anchormenu">
            <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                  />
                  </td>
            </table>

            <img class="arrowtop" src={require('./Pics/top.png')} alt="gototop" onClick={this.goTotop}/>
                    <Timeline
                    activeColor='#555555'
                    color='#FFF'
                    lineColor='transparent'
                    lineWidth="7"
                    circleWidth="80"
                    >
                      <div id="1933" icon="1933"></div>
                    </Timeline>

             <Timeline
              activeColor='#555555'
              color='#FFF'
              lineColor='#000'
              lineWidth="7"
              addEvenPropToChildren= 'true'
              >
                    <div style={sty}>
                      <img class="banner1" src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.1.jpg')}  width="350" height="175"/>
                      <p>Adolf Hitler Appointed Chancellor</p>

                      <h4>January 30, 1933</h4>
                      The Nazi Party assumes control of the German state.
                    </div>
                    <div style={sty}>
                      <img class="banner1" src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.2.jpg')}  width="350" height="175"/>
                      <p>Reichstag Fire Decree</p>
                      <h4>FEBRUARY 28, 1933</h4>
                      President Hindenburg suspends constitutional protections in Germany.
                    </div>
                    <div style={sty}>
                    <img class="banner11" src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.3.jpg')}  width="350" height="175"/>
                    <p>Establishment of Dachau Camp</p>
                    <h4>MARCH 22, 1933</h4>
                    The SS establishes the Dachau concentration camp in March 1933.
                    </div>
                    <div style={sty}>
                    <img class="banner1" src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.4.jpg')} width="350" height="175"/>
                    <p>Anti-Jewish Boycott</p>
                    <h4>APRIL 1, 1933</h4>
                    Members of the Nazi Party and its affiliated organizations organize a nationwide boycott of Jewish-owned businesses in Germany.
                    </div>
                    <div style={sty}>
                    <p>Law for the Restoration of the Professional Civil Service</p>
                    <h4>APRIL 7, 1933</h4>
                    German law excludes Jews and other political opponents from civil service positions.
                    </div>

                    <div style={sty}>
                    <img class="banner1" src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.5.png')} width="350" height="175"/>
                    <p>Law Limits Jews in Public Schools</p>
                    <h4>APRIL 25, 1933</h4>
                    The Law against Overcrowding in Schools and Universities limits the number of Jewish students in public schools.
                    </div>

                    <div style={sty}>
                    <img class="banner1" src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.6.png')} width="350" height="175"/>
                    <p>Book Burning</p>
                    <h4>MAY 10, 1933</h4>
                    Books deemed "un-German" are publicly burned throughout Germany.
                    </div>

                    <div style={sty}>
                    <p>Law for the “Prevention of Offspring with Hereditary Diseases”</p>
                    <h4>JULY 14, 1933</h4>
                    New German law mandates the forced sterilization of certain individuals with physical and mental disabilities.
                    </div>

                    <div style={sty}>
                    <p>Central Organization of German Jews Formed</p>
                    <h4>SEPTEMBER 17, 1933</h4>
                    German Jewish organizations join together to form the Reichsvertretung der deutschen Juden.
                    December 1: Hitler declares legal unity of the German State and Nazi Party
                    </div>
              </Timeline>
                    <Timeline
                    activeColor='#555555'
                    color='#FFF'
                    lineColor='#000'
                    lineWidth="7"
                    circleWidth="80"
                    >
                      <div id="1934" icon="1934"></div>
                    </Timeline>

              <Timeline
               activeColor='#555555'
               color='#FFF'
               lineColor='#000'
               lineWidth="7"
               addEvenPropToChildren= 'true'
               >
                    <div style={sty}>
                    <p>Night of the Long Knives</p>
                    <h4>JUNE 30, 1934</h4>
                    Hitler orders the purge of the top leadership of the SA, the Nazi Party paramilitary formation.
                    </div>
                    <div style={sty}>
                    Death of German President v on Hindenburg
                    <h4>AUGUST 2, 1934</h4>
                    Adolf Hitler becomes President of Germany.
                    </div>

                    <div style={sty}>
                    Hitler Abolishes the Office of President
                    <h4>AUGUST 19, 1934</h4>
                    Hitler becomes the absolute dictator of Germany.
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div id="1935" icon="1935"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'>
                    <div style={sty}>
                    Nuremberg Race Laws
                    <h4>SEPTEMBER 15, 1935</h4>
                    The Nuremberg Laws of 1935 herald a new wave of antisemitic legislation that brings immediate and concrete segregation.
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div  id="1936" icon="1936"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    Olympic Games Open in Berin
                    <h4>AUGUST 1, 1936</h4>
                    The Nazi dictatorship camouflages its racist, militaristic character while hosting the Summer Olympics.
                    October 25: Hitler and Mussolini form Rome-Berlin Axis
                    November 25: Germany and Japan sign military pact
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div id="1937" icon="1937"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    Buchenwald Concentration Camp Opens
                    <h4>JULY 15, 1937</h4>
                    Buchenwald becomes one of the largest concentration camps established within the old German borders of 1937
                    </div>

                    <div style={sty}>
                    Antisemitic Exhibition Opens in Munich
                    <h4>NOVEMBER 8, 1937</h4>
                    Josef Goebbels and Julius Streicher open the antisemitic exhibition Der Ewige Jude (The Eternal Jew) at the library of the German Museum in Munich, Germany.
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div id="1938" icon="1938"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    German Annexation of Austria
                    <h4>MARCH 11, 1938</h4>
                    On March 11–13, 1938, German troops invade Austria and incorporate Austria into the German Reich in what is known as the Anschluss.
                    </div>

                    <div style={sty}>
                    Law on Alteration of Family and Personal Names
                    <h4>AUGUST 17, 1938</h4>
                    A new German law requires Jews bearing first names of “non-Jewish” origin to adopt an additional name: “Israel” for men and “Sara” for women.
                    </div>

                    <div style={sty}>
                    Munich Agreement
                    <h4>SEPTEMBER 29, 1938</h4>
                    Germany, Italy, Great Britain, and France sign the Munich agreement.
                    </div>

                    <div style={sty}>
                    German Jews’ Passports Declared Invalid
                    <h4>OCTOBER 5, 1938</h4>
                    The Reich Ministry of the Interior invalidates all German passports held by Jews. Jews must surrender their old passports, which will become valid only after the letter “J” has been stamped on them.
                    </div>

                    <div style={sty}>
                    Kristallnacht
                    <h4>NOVEMBER 9, 1938</h4>
                    In a nationwide pogrom called Kristallnacht, members of the Nazi Party and other Nazi formations burn synagogues, loot Jewish homes and businesses, and kill at least 91 Jews.
                    </div>

                    <div style={sty}>
                    First Kindertransport Arrives in Great Britain
                    <h4>DECEMBER 2, 1938</h4>
                    In desperation, Jewish parents send their unaccompanied children abroad to escape Nazi persecution.
                    </div>
                    </Timeline>
                        <Timeline
                        activeColor='#555555'
                        color='#FFF'
                        lineColor='#000'
                        lineWidth="7"
                        circleWidth="80"
                        >
                          <div id="1939" icon="1939"></div>
                        </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    St. Louis Sets Sail
                    <h4>MAY 13, 1939</h4>
                    The St. Louis, carrying Jews fleeing from Nazi Germany, departs for Havana, Cuba.
                    </div>

                    <div style={sty}>
                    German Invasion of Poland
                    <h4>SEPTEMBER 1, 1939</h4>
                    Germany invades Poland, initiating World War II in Europe.
                    </div>

                    <div style={sty}>
                    Britain and France Declare War
                    <h4>SEPTEMBER 3, 1939</h4>
                    Great Britain and France declare war on Germany.
                    </div>
                    </Timeline>
                        <Timeline
                        activeColor='#555555'
                        color='#FFF'
                        lineColor='#000'
                        lineWidth="7"
                        circleWidth="80"
                        >
                          <div id="1940" icon="1940"></div>
                        </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    Auschwitz Camp Established
                    <h4>MAY 20, 1940</h4>
                    SS authorities establish the largest concentration camp complex of the Nazi regime.
                    </div>

                    <div style={sty}>
                    Warsaw Ghetto Sealed
                    <h4>NOVEMBER 15, 1940</h4>
                    The ghetto was enclosed by a wall that was over ten feet high, topped with barbed wire.
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div id="1941" icon="1941"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>

                    Operation Barbarossa
                    <h4>JUNE 22, 1941</h4>
                    Germany launches its largest military operation of the war.
                    </div>

                    <div style={sty}>
                    “Euthanasia” Killings
                    <h4>AUGUST 24, 1941</h4>
                    Responding in part to public protests, Hitler orders the cessation of centrally coordinated murder of the disabled.
                    </div>

                    <div style={sty}>
                    Jewish Badge
                    <h4>SEPTEMBER 1, 1941</h4>
                    All Jews over six years of age in the Reich, Alsace, Bohemia-Moravia and the German–annexed territory of western Poland (called the Warthegau) are ordered to wear an identifying badge.
                    </div>

                    <div style={sty}>
                    Deportations of German, Austrian, and Czech Jews
                    <h4>OCTOBER 15, 1941</h4>
                    German authorities begin deporting Jews from central Europe to ghettos in occupied eastern territory.
                    </div>

                    <div style={sty}>
                    Operation Reinhard
                    <h4>OCTOBER 15, 1941</h4>
                    The plan to annihilate Jews in occupied Poland will lead to the murder of some 1.7 million innocent people.
                    </div>

                    <div style={sty}>
                    Theresienstadt Camp-Ghetto Established
                    <h4>NOVEMBER 24, 1941</h4>
                    In its function as a tool of deception, Theresienstadt was a unique facility
                    </div>

                    <div style={sty}>
                    Attack on Pearl Harbor
                    <h4>DECEMBER 7, 1941</h4>
                    Japan launches a surprise attack on the United States Pacific fleet at Pearl Harbor, Hawaii, severely damaging the installation.
                    </div>

                    <div style={sty}>
                    United States Declares War on Japan
                    <h4>DECEMBER 8, 1941</h4>
                    President Roosevelt asks the US Congress to declare war on Japan following the surprise attack on Pearl Harbor.
                    </div>

                    <div style={sty}>
                    Killing Operations Begin at Chelmno
                    <h4>DECEMBER 8, 1941</h4>
                    Chelmo was first stationary facility where poison gas was used for mass murder.
                    </div>
                    </Timeline>
                        <Timeline
                        activeColor='#555555'
                        color='#FFF'
                        lineColor='#000'
                        lineWidth="7"
                        circleWidth="80"
                        >
                          <div id="1942" icon="1942"></div>
                        </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    Wannsee Conference
                    <h4>JANUARY 20, 1942</h4>
                    Reinhard Heydrich convenes the Wannsee Conference and presents plans to coordinate a European-wide “Final Solution of the Jewish Question.”
                    </div>

                    <div style={sty}>
                    Auschwitz-Birkenau Camp Established
                    <h4>MARCH 1, 1942</h4>
                    The Inspectorate of Concentration Camps opens a second camp at Auschwitz, called Auschwitz-Birkenau or Auschwitz II.
                    </div>

                    <div style={sty}>
                    Assassination of Reinhard Heydrich
                    <h4>MAY 27, 1942</h4>
                    Czech agents kill SS General Reinhard Heydrich, chief of the Reich Security Main Office.
                    </div>

                    <div style={sty}>
                    German Forces Launch Offensive
                    <h4>JUNE 28, 1942</h4>
                    German forces attack the Soviet Union in the south towards the city of Stalingrad.
                    </div>

                    <div style={sty}>
                    Gassing Operations Begin at Treblinka
                    <h4>JULY 23, 1942</h4>
                    SS Special Detachment Treblinka begins gassing operations at the Treblinka killing center.
                    </div>
                    </Timeline>
                            <Timeline
                            activeColor='#555555'
                            color='#FFF'
                            lineColor='#000'
                            lineWidth="7"
                            circleWidth="80"
                            >
                              <div id="1943" icon="1943"></div>
                            </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    German Defeat at Stalingrad
                    <h4>FEBRUARY 2, 1943</h4>
                    After months of fierce fighting and heavy casualties, German forces (numbering now only about 91,000 surviving soldiers) surrender at Stalingrad on the Volga.
                    </div>

                    <div style={sty}>
                    Sobibor Uprising
                  <h4>  OCTOBER 14, 1943</h4>
                    Jewish prisoners at the Sobibor killing center begin an armed revolt. Selma Wijnberg and Chaim Engel escape and flee into hiding.
                    </div>

                    <div style={sty}>
                    Operation Harvest Festival
                  <h4>  NOVEMBER 3, 1943</h4>
                    SS forces kill surviving Jews in work camps near Lublin, Poland.
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div id="1944" icon="1944"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    Creation of War Refugee Board
                    <h4>JANUARY 22, 1944</h4>
                    Franklin D. Roosevelt issues Executive Order 9417, creating the War Refugee Board.
                    </div>

                    <div style={sty}>
                    German Troops Occupy Hungary
                    <h4>MARCH 19, 1944</h4>
                    German forces occupy Axis
                    </div>

                    <div style={sty}>
                    Deportation of Hungarian Jews
                    <h4>MAY 15, 1944</h4>
                    From mid-May until July 9, 1944, Hungarian gendarmerie officials, under the guidance of German SS officials, deport some 440,000 Jews from Hungary.
                    </div>

                    <div style={sty}>
                    D-Day
                    <h4>JUNE 6, 1944</h4>
                    Under the code name Operation “Overlord,” US, British, and Canadian troops land on the beaches of Normandy, France.
                    </div>

                    <div style={sty}>
                    Attempt to Assassinate Hitler
                    <h4>JULY 20, 1944</h4>
                    German military officers attempt to assassinate Adolf Hitler in his East Prussian headquarters at Rastenburg.
                    </div>

                    <div style={sty}>
                    Prisoner Revolt at Auschwitz-Birkenau
                    <h4>OCTOBER 7, 1944</h4>
                    Prisoners assigned to Crematorium IV at the Auschwitz-Birkenau killing center rebelled after learning that they were going to be killed.
                    </div>
                    </Timeline>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div id="1945" icon="1945"></div>
                          </Timeline>

                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div style={sty}>
                    Yalta Conference
                    <h4>FEBRUARY 4, 1945</h4>
                    Allied leaders meet to discuss military strategy in the final defeat of Nazi Germany, the postwar occupation of Germany, and the prosecution of German war criminals.
                    </div>

                    <div style={sty}>
                    US Forces Liberate Buchenwald
                    <h4>APRIL 11, 1945</h4>
                    On April 11, 1945, in expectation of liberation, starved and emaciated prisoners storm watchtowers, seizing control of the Buchenwald camp.
                    </div>

                    <div style={sty}>
                    Liberation of Dachau
                    <h4>APRIL 29, 1945</h4>
                    US forces liberate the Dachau camp.
                    </div>

                    <div style={sty}>
                    Hitler Commits Suicide
                    <h4>APRIL 30, 1945</h4>
                    Adolf Hitler commits suicide in his bunker in Berlin.
                    </div>

                    <div style={sty}>
                    German Surrender
                    <h4>MAY 7, 1945</h4>
                    German armed forces surrender unconditionally to Allied forces in the west.
                    </div>

                    <div style={sty}>
                    Japan Surrenders
                    <h4>SEPTEMBER 2, 1945</h4>
                    Japan surrenders. World War II officially ends.
                    </div>

                    <div style={sty}>
                    International Military Tribunal
                    <h4>NOVEMBER 20, 1945</h4>
                    </div>

                    <div style={sty}>
                    New Directive on Immigrant Visas to the US
                    <h4>DECEMBER 22, 1945</h4>
                    US President Harry S Truman issues a directive giving preference to displaced persons for immigrant visas under existing US immigration quota restrictions.
                    </div>
                    </Timeline>


      </div>
       </StyleRoot>
    )
  }
}
export default VTimeline;

import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import Timeline from 'react-dual-timeline';
import Anchor, {goToTop} from 'react-scrollable-anchor';
const pStyle = {
  textAlign: 'justify',
  textAlign: 'justify',
  paddingLeft: 50,
  paddingRight:50,
  paddingBottom:20,
  paddingTop:20
};

class VTimeline extends Component {
  render() {
    goToTop()
    return (

      <StyleRoot>
          <div style={pStyle}>
            <h1>Timeline</h1>
              {/*<a href='#1933'> 1933 </a>
              <a href='#1934'> 1934 </a>
              <a href='#1935'> 1935 </a>
              <a href='#1936'> 1936 </a>
              <a href='#1937'> 1937 </a>
              <a href='#1938'> 1938 </a>
              <a href='#1939'> 1939 </a>
              <a href='#1940'> 1940 </a>
              <a href='#1941'> 1941 </a>
              <a href='#1942'> 1942 </a>
              <a href='#1943'> 1943 </a>
              <a href='#1944'> 1944 </a>
              <a href='#1945'> 1945 </a> */}
                <div onClick={goToTop} style={{cursor: 'pointer'}}><img class="toparrow" src={require('./Pics/top.png')}  alt="top" /></div>
              <Anchor id={'1933'}>
                    <Timeline
                    activeColor='#555555'
                    color='#FFF'
                    lineColor='transparent'
                    lineWidth="7"
                    circleWidth="80"
                    >
                      <div icon="1933"></div>
                    </Timeline>
             </Anchor>

             <Timeline
              activeColor='#555555'
              color='#FFF'
              lineColor='#000'
              lineWidth="7"
              addEvenPropToChildren= 'true'
              >
                    <div>
                      <img src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.1.jpg')} width="350" height="175"/>
                      Adolf Hitler Appointed Chancellor
                      <h4>January 30, 1933</h4>
                      The Nazi Party assumes control of the German state.
                    </div>
                    <div>
                      <img src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.2.jpg')} width="350" height="175"/>
                      Reichstag Fire Decree
                      <h4>FEBRUARY 28, 1933</h4>
                      President Hindenburg suspends constitutional protections in Germany.
                    </div>
                    <div>
                    <img src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.3.jpg')} width="350" height="175"/>
                    Establishment of Dachau Camp
                    <h4>MARCH 22, 1933</h4>
                    The SS establishes the Dachau concentration camp in March 1933.
                    </div>
                    <div>
                    <img src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.4.jpg')} width="350" height="175"/>
                    Anti-Jewish Boycott
                    <h4>APRIL 1, 1933</h4>
                    Members of the Nazi Party and its affiliated organizations organize a nationwide boycott of Jewish-owned businesses in Germany.
                    </div>
                    <div>
                    Law for the Restoration of the Professional Civil Service
                    <h4>APRIL 7, 1933</h4>
                    German law excludes Jews and other political opponents from civil service positions.
                    </div>

                    <div>
                    <img src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.5.png')} width="350" height="175"/>
                    Law Limits Jews in Public Schools
                    <h4>APRIL 25, 1933</h4>
                    The Law against Overcrowding in Schools and Universities limits the number of Jewish students in public schools.
                    </div>

                    <div>
                    <img src={require('./Pics/6.0-Visual-Timeline/Timeline-lightbox/6.0.6.png')} width="350" height="175"/>
                    Book Burning
                    <h4>MAY 10, 1933</h4>
                    Books deemed "un-German" are publicly burned throughout Germany.
                    </div>

                    <div>
                    Law for the “Prevention of Offspring with Hereditary Diseases”
                    <h4>JULY 14, 1933</h4>
                    New German law mandates the forced sterilization of certain individuals with physical and mental disabilities.
                    </div>

                    <div>
                    Central Organization of German Jews Formed
                    <h4>SEPTEMBER 17, 1933</h4>
                    German Jewish organizations join together to form the Reichsvertretung der deutschen Juden.
                    December 1: Hitler declares legal unity of the German State and Nazi Party
                    </div>
              </Timeline>
              <Anchor id={'1934'}>
                    <Timeline
                    activeColor='#555555'
                    color='#FFF'
                    lineColor='#000'
                    lineWidth="7"
                    circleWidth="80"
                    >
                      <div icon="1934"></div>
                    </Timeline>
              </Anchor>
              <Timeline
               activeColor='#555555'
               color='#FFF'
               lineColor='#000'
               lineWidth="7"
               addEvenPropToChildren= 'true'
               >
                    <div>
                    Night of the Long Knives
                    <h4>JUNE 30, 1934</h4>
                    Hitler orders the purge of the top leadership of the SA, the Nazi Party paramilitary formation.
                    </div>
                    <div>
                    Death of German President v on Hindenburg
                    <h4>AUGUST 2, 1934</h4>
                    Adolf Hitler becomes President of Germany.
                    </div>

                    <div>
                    Hitler Abolishes the Office of President
                    <h4>AUGUST 19, 1934</h4>
                    Hitler becomes the absolute dictator of Germany.
                    </div>
                    </Timeline>
                    <Anchor id={'1935'}>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1935"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Nuremberg Race Laws
                    <h4>SEPTEMBER 15, 1935</h4>
                    The Nuremberg Laws of 1935 herald a new wave of antisemitic legislation that brings immediate and concrete segregation.

                    </div>
                    </Timeline>
                    <Anchor id={'1936'}>

                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1936"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Olympic Games Open in Berlin
                    <h4>AUGUST 1, 1936</h4>
                    The Nazi dictatorship camouflages its racist, militaristic character while hosting the Summer Olympics.
                    October 25: Hitler and Mussolini form Rome-Berlin Axis
                    November 25: Germany and Japan sign military pact
                    </div>
                    </Timeline>
                    <Anchor id={'1937'}>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1937"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Buchenwald Concentration Camp Opens
                    <h4>JULY 15, 1937</h4>
                    Buchenwald becomes one of the largest concentration camps established within the old German borders of 1937
                    </div>

                    <div>
                    Antisemitic Exhibition Opens in Munich
                    <h4>NOVEMBER 8, 1937</h4>
                    Josef Goebbels and Julius Streicher open the antisemitic exhibition Der Ewige Jude (The Eternal Jew) at the library of the German Museum in Munich, Germany.
                    </div>
                    </Timeline>
                    <Anchor id={'1938'}>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1938"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    German Annexation of Austria
                    <h4>MARCH 11, 1938</h4>
                    On March 11–13, 1938, German troops invade Austria and incorporate Austria into the German Reich in what is known as the Anschluss.
                    </div>

                    <div>
                    Law on Alteration of Family and Personal Names
                    <h4>AUGUST 17, 1938</h4>
                    A new German law requires Jews bearing first names of “non-Jewish” origin to adopt an additional name: “Israel” for men and “Sara” for women.
                    </div>

                    <div>
                    Munich Agreement
                    <h4>SEPTEMBER 29, 1938</h4>
                    Germany, Italy, Great Britain, and France sign the Munich agreement.
                    </div>

                    <div>
                    German Jews’ Passports Declared Invalid
                    <h4>OCTOBER 5, 1938</h4>
                    The Reich Ministry of the Interior invalidates all German passports held by Jews. Jews must surrender their old passports, which will become valid only after the letter “J” has been stamped on them.
                    </div>

                    <div>
                    Kristallnacht
                    <h4>NOVEMBER 9, 1938</h4>
                    In a nationwide pogrom called Kristallnacht, members of the Nazi Party and other Nazi formations burn synagogues, loot Jewish homes and businesses, and kill at least 91 Jews.
                    </div>

                    <div>
                    First Kindertransport Arrives in Great Britain
                    <h4>DECEMBER 2, 1938</h4>
                    In desperation, Jewish parents send their unaccompanied children abroad to escape Nazi persecution.
                    </div>
                    </Timeline>
                    <Anchor id={'1939'}>
                        <Timeline
                        activeColor='#555555'
                        color='#FFF'
                        lineColor='#000'
                        lineWidth="7"
                        circleWidth="80"
                        >
                          <div icon="1939"></div>
                        </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    St. Louis Sets Sail
                    <h4>MAY 13, 1939</h4>
                    The St. Louis, carrying Jews fleeing from Nazi Germany, departs for Havana, Cuba.
                    </div>

                    <div>
                    German Invasion of Poland
                    <h4>SEPTEMBER 1, 1939</h4>
                    Germany invades Poland, initiating World War II in Europe.
                    </div>

                    <div>
                    Britain and France Declare War
                    <h4>SEPTEMBER 3, 1939</h4>
                    Great Britain and France declare war on Germany.
                    </div>
                    </Timeline>
                    <Anchor id={'1940'}>
                        <Timeline
                        activeColor='#555555'
                        color='#FFF'
                        lineColor='#000'
                        lineWidth="7"
                        circleWidth="80"
                        >
                          <div icon="1940"></div>
                        </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Auschwitz Camp Established
                    <h4>MAY 20, 1940</h4>
                    SS authorities establish the largest concentration camp complex of the Nazi regime.
                    </div>

                    <div>
                    Warsaw Ghetto Sealed
                    <h4>NOVEMBER 15, 1940</h4>
                    The ghetto was enclosed by a wall that was over ten feet high, topped with barbed wire.
                    </div>
                    </Timeline>
                    <Anchor id={'1941'}>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1941"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>

                    Operation Barbarossa
                    <h4>JUNE 22, 1941</h4>
                    Germany launches its largest military operation of the war.
                    </div>

                    <div>
                    “Euthanasia” Killings
                    <h4>AUGUST 24, 1941</h4>
                    Responding in part to public protests, Hitler orders the cessation of centrally coordinated murder of the disabled.
                    </div>

                    <div>
                    Jewish Badge
                    <h4>SEPTEMBER 1, 1941</h4>
                    All Jews over six years of age in the Reich, Alsace, Bohemia-Moravia and the German–annexed territory of western Poland (called the Warthegau) are ordered to wear an identifying badge.
                    </div>

                    <div>
                    Deportations of German, Austrian, and Czech Jews
                    <h4>OCTOBER 15, 1941</h4>
                    German authorities begin deporting Jews from central Europe to ghettos in occupied eastern territory.
                    </div>

                    <div>
                    Operation Reinhard
                    <h4>OCTOBER 15, 1941</h4>
                    The plan to annihilate Jews in occupied Poland will lead to the murder of some 1.7 million innocent people.
                    </div>

                    <div>
                    Theresienstadt Camp-Ghetto Established
                    <h4>NOVEMBER 24, 1941</h4>
                    In its function as a tool of deception, Theresienstadt was a unique facility
                    </div>

                    <div>
                    Attack on Pearl Harbor
                    <h4>DECEMBER 7, 1941</h4>
                    Japan launches a surprise attack on the United States Pacific fleet at Pearl Harbor, Hawaii, severely damaging the installation.
                    </div>

                    <div>
                    United States Declares War on Japan
                    <h4>DECEMBER 8, 1941</h4>
                    President Roosevelt asks the US Congress to declare war on Japan following the surprise attack on Pearl Harbor.
                    </div>

                    <div>
                    Killing Operations Begin at Chelmno
                    <h4>DECEMBER 8, 1941</h4>
                    Chelmo was first stationary facility where poison gas was used for mass murder.
                    </div>
                    </Timeline>
                    <Anchor id={'1942'}>
                        <Timeline
                        activeColor='#555555'
                        color='#FFF'
                        lineColor='#000'
                        lineWidth="7"
                        circleWidth="80"
                        >
                          <div icon="1942"></div>
                        </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Wannsee Conference
                    <h4>JANUARY 20, 1942</h4>
                    Reinhard Heydrich convenes the Wannsee Conference and presents plans to coordinate a European-wide “Final Solution of the Jewish Question.”
                    </div>

                    <div>
                    Auschwitz-Birkenau Camp Established
                    <h4>MARCH 1, 1942</h4>
                    The Inspectorate of Concentration Camps opens a second camp at Auschwitz, called Auschwitz-Birkenau or Auschwitz II.
                    </div>

                    <div>
                    Assassination of Reinhard Heydrich
                    <h4>MAY 27, 1942</h4>
                    Czech agents kill SS General Reinhard Heydrich, chief of the Reich Security Main Office.
                    </div>

                    <div>
                    German Forces Launch Offensive
                    <h4>JUNE 28, 1942</h4>
                    German forces attack the Soviet Union in the south towards the city of Stalingrad.
                    </div>

                    <div>
                    Gassing Operations Begin at Treblinka
                    <h4>JULY 23, 1942</h4>
                    SS Special Detachment Treblinka begins gassing operations at the Treblinka killing center.
                    </div>
                    </Timeline>
                    <Anchor id={'1943'}>
                            <Timeline
                            activeColor='#555555'
                            color='#FFF'
                            lineColor='#000'
                            lineWidth="7"
                            circleWidth="80"
                            >
                              <div icon="1943"></div>
                            </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    German Defeat at Stalingrad
                    <h4>FEBRUARY 2, 1943</h4>
                    After months of fierce fighting and heavy casualties, German forces (numbering now only about 91,000 surviving soldiers) surrender at Stalingrad on the Volga.
                    </div>

                    <div>
                    Sobibor Uprising
                  <h4>  OCTOBER 14, 1943</h4>
                    Jewish prisoners at the Sobibor killing center begin an armed revolt. Selma Wijnberg and Chaim Engel escape and flee into hiding.
                    </div>

                    <div>
                    Operation Harvest Festival
                  <h4>  NOVEMBER 3, 1943</h4>
                    SS forces kill surviving Jews in work camps near Lublin, Poland.
                    </div>
                    </Timeline>
                    <Anchor id={'1944'}>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1944"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Creation of War Refugee Board
                    <h4>JANUARY 22, 1944</h4>
                    Franklin D. Roosevelt issues Executive Order 9417, creating the War Refugee Board.
                    </div>

                    <div>
                    German Troops Occupy Hungary
                    <h4>MARCH 19, 1944</h4>
                    German forces occupy Axis
                    </div>

                    <div>
                    Deportation of Hungarian Jews
                    <h4>MAY 15, 1944</h4>
                    From mid-May until July 9, 1944, Hungarian gendarmerie officials, under the guidance of German SS officials, deport some 440,000 Jews from Hungary.
                    </div>

                    <div>
                    D-Day
                    <h4>JUNE 6, 1944</h4>
                    Under the code name Operation “Overlord,” US, British, and Canadian troops land on the beaches of Normandy, France.
                    </div>

                    <div>
                    Attempt to Assassinate Hitler
                    <h4>JULY 20, 1944</h4>
                    German military officers attempt to assassinate Adolf Hitler in his East Prussian headquarters at Rastenburg.
                    </div>

                    <div>
                    Prisoner Revolt at Auschwitz-Birkenau
                    <h4>OCTOBER 7, 1944</h4>
                    Prisoners assigned to Crematorium IV at the Auschwitz-Birkenau killing center rebelled after learning that they were going to be killed.
                    </div>
                    </Timeline>
                    <Anchor id={'1945'}>
                          <Timeline
                          activeColor='#555555'
                          color='#FFF'
                          lineColor='#000'
                          lineWidth="7"
                          circleWidth="80"
                          >
                            <div icon="1945"></div>
                          </Timeline>
                    </Anchor>
                    <Timeline
                     activeColor='#555555'
                     color='#FFF'
                     lineColor='#000'
                     lineWidth="7"
                     addEvenPropToChildren= 'true'
                     >
                    <div>
                    Yalta Conference
                    <h4>FEBRUARY 4, 1945</h4>
                    Allied leaders meet to discuss military strategy in the final defeat of Nazi Germany, the postwar occupation of Germany, and the prosecution of German war criminals.
                    </div>

                    <div>
                    US Forces Liberate Buchenwald
                    <h4>APRIL 11, 1945</h4>
                    On April 11, 1945, in expectation of liberation, starved and emaciated prisoners storm watchtowers, seizing control of the Buchenwald camp.
                    </div>

                    <div>
                    Liberation of Dachau
                    <h4>APRIL 29, 1945</h4>
                    US forces liberate the Dachau camp.
                    </div>

                    <div>
                    Hitler Commits Suicide
                    <h4>APRIL 30, 1945</h4>
                    Adolf Hitler commits suicide in his bunker in Berlin.
                    </div>

                    <div>
                    German Surrender
                    <h4>MAY 7, 1945</h4>
                    German armed forces surrender unconditionally to Allied forces in the west.
                    </div>

                    <div>
                    Japan Surrenders
                    <h4>SEPTEMBER 2, 1945</h4>
                    Japan surrenders. World War II officially ends.
                    </div>

                    <div>
                    International Military Tribunal
                    <h4>NOVEMBER 20, 1945</h4>
                    </div>

                    <div>
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
